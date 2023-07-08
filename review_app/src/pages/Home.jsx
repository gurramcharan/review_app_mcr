import React, { useContext} from 'react'
import { cuisineData } from "../data/data"
import { ReviewContext } from '../contexts/ReviewContext'
import {Link} from "react-router-dom"

export const Home = () => {
    const {setCuisineId, filteredRestaurants} = useContext(ReviewContext)

    const handleCuisineId = (id) => {
        setCuisineId(id)
        
    }
    return (
        <div>
            <div>
                <h1>Food Ordering App</h1>
                <h2>Select your Cuisine</h2>

                <div>
                    {cuisineData.map((item) => (
                        <button key={item.id} onClick={() => handleCuisineId(item.id)}>{item.name}</button>
                    ))}
                </div>

                <div>
                    {filteredRestaurants.map((item) => (
                        <div key={item.id}>
                            <div>
                                <h3>Dishes by {item.name}</h3>
                            </div>
                            <div>
                                {item.menu.map((menu) => (
                                    <div key={menu.name}>
                                        <Link to={`/review/${item.id}`}>
                                        <p>{menu.name}</p>
                                        </Link>
                                    </div>
                                ))}
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}
