import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Card from '../components/Card';
import LoadingSpinner from '../components/LoadingSpinner';
import UpdateModal from '../components/UpdateModal';
import { deletePost, getPost, openModal, updatePost } from '../redux/actionCreators/postActions';


const AllPost = () => {
    const dispatch = useDispatch()
    const state = useSelector((state) => state)

    /* Get all post from localStorage here */
    useEffect(() => {
        const allPosts = JSON.parse(localStorage.getItem("POSTS"))
        dispatch(getPost(allPosts))
    }, [dispatch, state.updatePost])

    /* Sorting post from here */
    state?.posts?.sort((a, b) => {
        return parseInt(a?.id) - parseInt(b?.id);
    })


    /* Loading spinner star here */
    if (!state?.posts) {
        return <LoadingSpinner></LoadingSpinner>
    }

    /* Delete post from here */
    const handleDelete = (id) => {
        const agree = window.confirm("Are you sure you want to detele?");
        if (agree) {
            const restPosts = state?.posts?.filter(post => post.id !== id)
            localStorage.setItem("POSTS", JSON.stringify(restPosts))
            dispatch(deletePost(restPosts))
        }
    }



    /* Update post from here */
    const handleUpdate = (id) => {
        const selectUpadatePost = state?.posts?.filter(post => post.id === id)
        dispatch(updatePost(selectUpadatePost))
        dispatch(openModal(true))
    }
    return (
        <div className='container mx-auto py-10'>
            {
                state?.posts?.length === 0 ?
                    <div className='flex flex-col justify-center items-center'>
                        <h1 className='font-bold my-10 text-5xl uppercase'>No post available</h1>
                        <img src="empty.svg" alt="empty" className='w-3/12' />
                    </div>
                    :
                    <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5'>
                        {
                            state?.posts?.map(post => {
                                return <Card
                                    key={post.id}
                                    post={post}
                                    handleDelete={handleDelete}
                                    handleUpdate={handleUpdate}
                                ></Card>
                            })
                        }
                    </div>
            }
            {
                state.isModalOpen && <UpdateModal

                ></UpdateModal>
            }
        </div>
    );
};

export default AllPost;