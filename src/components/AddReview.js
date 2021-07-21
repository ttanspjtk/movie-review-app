import React, { useState } from 'react';
import { addReview } from '../service/api';
import { useHistory } from 'react-router-dom';

const initialValues = {
  title: '',
  date: '',
  rating: ''
}

const AddReview = () => {
  const [review, setReview] = useState(initialValues);
  const { 
    title,
    date,
    rating
  } = review;
  const history = useHistory();

  const onValueChange = (e) => {
    setReview({ ...review, [e.target.name]: e.target.value })
  }

  const addReviewDetails = async () => {
    await addReview(review);
    history.push('./all');
  }

  return (
    <>
      <div className="container p-4 ">
        <h2 className="pb-3">Review Movie</h2>
        <div className="row">
          <div className="col-3"><p>Movie Title</p></div>
          <div className="col-9">
            <input type="text" onChange={(e) => onValueChange(e)} name="title" value={title}/>
          </div>
        </div>     
        <div className="row">
          <div className="col-3"><p>Date Release</p></div>
          <div className="col-9">
            <input type="text" onChange={(e) => onValueChange(e)} name="date" value={date} />
          </div>
        </div>
        <div className="row">
          <div className="col-2"><p>Rating</p></div>
          <div className="col-10">
            <select className="form-select-sm" aria-label=".form-select-sm example" onChange={(e) => onValueChange(e)} name="rating" value={rating}>
              <option selected></option>
              <option value="G">G</option>
              <option value="PG">PG</option>
              <option value="M">M</option>
              <option value="MA">MA</option>
              <option value="R">R</option>
            </select>
          </div>
        </div>
        <div className="row">
          <button 
            type="button" 
            class="btn btn-success m-2"
            style={{ width: '10%'}}
            onClick={() => addReviewDetails()}
          >
            Submit
          </button>
        </div>
      </div>
    </>
  );
};

export default AddReview;
