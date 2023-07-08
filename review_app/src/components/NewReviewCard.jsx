import React, { useContext } from 'react'
import { ReviewContext } from '../contexts/ReviewContext'

export const NewReviewCard = () => {
    const {setRating, setComment} = useContext(ReviewContext)
    return (
        <div>
            <div>
                <h2>Add your Review</h2>
                <hr/>
            </div>
            <div>
                <p>Rating:
                </p>
                <select name="rating" id="rating" onChange={(e) => setRating(e.target.value)}>
                    <option value="">Select rating</option>
                    <option value="1">1</option>
                    <option value="2">2</option>
                    <option value="3">3</option>
                    <option value="4">4</option>
                    <option value="5">5</option>
                </select>
            </div>
            <div>
                <p>Comment: </p>
                <textarea name="comment" id="comment" cols="30" rows="3" onChange={(e) => setComment(e.target.value)} />
            </div>
        </div>
    )
}
