import React, { useContext } from 'react'
import { useParams } from 'react-router-dom'
import { ReviewContext } from '../contexts/ReviewContext'
import {FiStar} from "react-icons/fi"
import { NewReviewCard } from '../components/NewReviewCard'

export const HotelDetail = () => {
    const {hotelId} = useParams()
    const {filteredRestaurants} = useContext(ReviewContext)
    const FilteredHotel = filteredRestaurants.filter((item) => item.id == hotelId)
    return (
        <div>
            <div>
                {FilteredHotel.map((item) => (
                    <div key={item.id}>
                        <div>
                        <h1>{item.name}</h1>
                        </div>
                        <div>
                            <p>{item.menu.map((menu) => (
                                <span key={menu.name}>{menu.name}, </span>
                            ))}</p>
                            <button>Add Review</button>
                        </div>
                        <div>
                            <p>{item.address}</p>
                        </div>
                        <div>
                            <p>Average Rating: {item.averageRating}</p>
                        </div>
                        <hr />
                        <div>
                            <div>
                            <h3>Reviews</h3>
                            </div>
                            <div>
                                {item.ratings.map((rating) => (
                                    <div key={rating.revName}>
                                        <div>
                                            <div>
                                                <img src={rating.pp} alt={rating.revName} />
                                                <p><b>{rating.revName}</b></p>
                                            </div>
                                            <div>
                                                <p>{rating.rating}<FiStar /></p>
                                            </div>
                                        </div>
                                        <div>
                                            <p>{rating.comment}</p>
                                        </div>
                                        <hr />
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                ))}
                <NewReviewCard />
            </div>
        </div>
    )
}
