import { createContext, useState } from "react";
import { cuisineData, restaurantsData } from "../data/data";

export const ReviewContext = createContext()

export const ReviewProvider = ({children}) => {
    const [cuisineId, setCuisineId] = useState()
    const [rating, setRating] = useState(0)
    const [comment, setComment] = useState(0)

    // const initialRestaurants = restaurantsData;

    // const [state,dispatch] = useReducer(RestaurantReducer,initialRestaurants)

    const allRestaurants = restaurantsData;

    const addNewReview = () => {
        
    }

    const filteredRestaurants = allRestaurants.filter((item) => item.cuisine_id === cuisineId);




    return (
        <ReviewContext.Provider value={{setCuisineId, cuisineId, filteredRestaurants, setRating,setComment}}>
            {children}
        </ReviewContext.Provider>
    )
}