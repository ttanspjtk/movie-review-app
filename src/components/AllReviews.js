import React, { useState, useEffect } from 'react';
import { getReviews, deleteReview } from '../service/api';

const AllReviews = () => {
    const [reviews, setReviews] = useState([]);

    useEffect(() => {
        getAllReviews();
    }, [])

    const getAllReviews = async () => {
        const response = await getReviews();
        console.log(response.data);
        setReviews(response.data);
    }

    const deleteReviewData = async (id) => {
        await deleteReview(id);
        getAllReviews();
    }


    return (
        <>
        <div className="container p-4">
            <h2 className="pb-2">All Reviews</h2>
            {
                reviews.map(review => (
                    <div>
                        <div>Id : {review.id}</div>
                        <div> Movie Title : {review.title}</div>
                        <div>Date Release : {review.date}</div>
                        <div>Rating : {review.rating}</div>
                        
                        <div className="pb-2">
                            <button 
                                type="button" 
                                class="btn btn-outline-danger m-2"
                                onClick={() => deleteReviewData(review.id)}
                            >
                                Delete
                            </button>
                            <hr />
                        </div>    
                    </div>
                ))
            }
        </div>
        </>
    );
};

export default AllReviews;