import React, { useEffect } from 'react';
import { toast } from 'react-hot-toast';
import { useDispatch, useSelector } from 'react-redux';
import LoadingSpinner from '../components/LoadingSpinner.js';
import { loading } from '../redux/actionCreators/postActions';

const Home = () => {

    const state = useSelector((state) => state)
    const dispatch = useDispatch()


    /* Load all posts data from here */
    useEffect(() => {
        dispatch(loading(true))
        fetch('https://jsonplaceholder.typicode.com/posts')
            .then(res => res.json())
            .then(data => {

                /* Save post on localStorage from here */
                const posts = localStorage.getItem('POSTS')
                if (!posts) {
                    localStorage.setItem("POSTS", JSON.stringify(data.splice(0, 15)))
                }
                dispatch(loading(false))
            })
    }, [dispatch])


    if (state.isLoading) {
        return <LoadingSpinner />
    }

    /* Create new post from here */
    const handleSubmit = (event) => {
        event.preventDefault()
        const title = event.target.title.value;
        const body = event.target.body.value;
        const posts = JSON.parse(localStorage.getItem("POSTS"))

        /* Set post localStorage from here */
        if (!posts) {
            localStorage.setItem("POSTS", JSON.stringify(
                [
                    {
                        id: 1,
                        title,
                        body

                    }
                ]
            ))
        } else if (posts.length === 0) {
            localStorage.setItem("POSTS", JSON.stringify(
                [{
                    id: posts.length + 1,
                    title,
                    body
                }]
            ))
        }
        else {
            localStorage.setItem("POSTS", JSON.stringify(
                [...posts, {
                    id: posts.length + 1,
                    title,
                    body
                }]
            ))
        }

        /* Tost message from here */
        toast.success("Created post successfully")
        event.target.reset()
    }

    console.log(state)
    return (
        <div>
            <div className='lg:w-6/12 mx-auto p-12 my-12 bg-base-100 shadow-2xl rounded-lg'>
                <form onSubmit={handleSubmit}>
                    <div className="mb-6">
                        <label htmlFor="message" className="uppercase text-2xl font-bold block mb-5 dark:text-slate-800">Write your post here</label>
                        <input type="text" name='title' placeholder="Post title..." className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:placeholder-gray-400 dark:text-slate-700 dark:focus:ring-blue-500 dark:focus:border-blue-500 mb-5" required />

                        <textarea name='body' rows="4" className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:text-slate-700 dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Your post here...." required></textarea>
                    </div>
                    <button type="submit" className="text-slate-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 dark:bg-green-400 dark:hover:bg-green-400 inline-flex items-center">
                        Submit here
                    </button>
                </form>
            </div>
        </div>
    );
};

export default Home;