import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { openModal, updatePost } from '../redux/actionCreators/postActions';


const UpdateModal = () => {
    const state = useSelector((state) => state)
    const dispatch = useDispatch()

    /* Submit form here */
    const handleSubmit = (event) => {
        dispatch(openModal(false))
        event.preventDefault()
        const title = event.target.title.value;
        const body = event.target.body.value;
        const posts = JSON.parse(localStorage.getItem("POSTS"))
        const restPosts = posts?.filter(post => post?.id !== state?.updatePost[0]?.id)
        dispatch(updatePost(restPosts))

        /* Set posts in local store from here */
        if (!posts) {
            localStorage.setItem("POSTS", JSON.stringify(
                [{
                    title,
                    body,
                    id: state.updatePost[0]?.id
                }]
            ))
        } else {
            localStorage.setItem("POSTS", JSON.stringify(
                [...restPosts, {
                    title,
                    body,
                    id: state.updatePost[0]?.id
                }]
            ))
        }
    }

    return (
        <div>
            <input type="checkbox" id="updateModal" className="modal-toggle" />
            <div className="modal">
                <div className="modal-box relative">
                    <label htmlFor="updateModal" className="btn btn-sm btn-circle absolute right-2 top-2">✕</label>
                    <div>
                        <form onSubmit={handleSubmit}>
                            <div className="mb-6">
                                <label htmlFor="message" className="uppercase text-2xl font-bold block mb-5 text-gray-900 dark:text-slate-800">update your post here ID: {state.updatePost[0]?.id}</label>
                                <input type="text" name='title' placeholder="Post title..." className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:placeholder-gray-400 dark:text-slate-700 dark:focus:ring-blue-500 dark:focus:border-blue-500 mb-5" required />

                                <textarea name='body' rows="4" className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:text-slate-700 dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Update post here...." required></textarea>
                            </div>
                            <button type="submit" className="text-slate-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 dark:bg-green-400 dark:hover:bg-green-400 inline-flex items-center">
                                Submit here
                            </button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default UpdateModal;