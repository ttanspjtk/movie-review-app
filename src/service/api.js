import axios from 'axios';

const url = 'http://localhost:3003/reviews';

export const getReviews = async (id) => {
    id = id || '';
    return await axios.get(`${url}/${id}`);
}

export const addReview = async (review) => {
    return await axios.post(url, review);
}

export const deleteReview = async (id) => {
    return await axios.delete(`${url}/${id}`);
}