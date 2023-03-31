import React from 'react';

const Card = ({ post, handleDelete, handleUpdate }) => {
    const { title, body, id } = post

    return (
        <div>
            <div className="card bg-base-100 h-full shadow-xl rounded-lg">
                <div className="card-body">
                    <h2 className="card-title font-bold">Title: {title.length >= 50 ? `${title.slice(0, 50)}...` : title}</h2>
                    <p className='py-5'>{body.length >= 100 ? `${body.slice(0, 100)}.....more` : body}</p>
                    <p className='font-bold'>ID: {id}</p>
                    <div className="flex justify-end gap-5">
                        <button onClick={() => handleDelete(id)} className=" bg-green-400 rounded-md py-3 px-5">Delete</button>
                        <label onClick={() => handleUpdate(id)} htmlFor="updateModal" className="btn">Update</label>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Card;