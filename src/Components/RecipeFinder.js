import React, { useState, useEffect } from 'react'
import { AiOutlineSearch } from "react-icons/ai"

import RecipeCard from './RecipeCard';

import Food from "../assets/food-gif.gif"
import Loading from "../assets/loading.gif"
import FailedToFetch from "../assets/failed-to-fetch.gif"

export default function RecipeFinder() {

    const [loading, setLoading] = useState(false)
    const [recipes, setRecipes] = useState([]);
    const [healthLabel, setHealthLabel] = useState("Vegan");

    const [search, setSearch] = useState("");
    const [error, setError] = useState(false);
    const allLabel = [
        "All",
        "Vegan",
        "Vegetarian",
        "Paleo",
        "Dairy-free",
        "Gluten-free",
        "Wheat-free",
        "Low-sugar",
        "Egg-free",
        "Peanut-free",
        "Tree-nut-free",
        "Soy-free",
        "Fish-free",
        "Shellfish-free"
    ]

    const APP_ID = "11bcf1fd";
    const APP_KEY = "5d8e03c8a28d989f4f655c4d072ab5fd";

    const handleSearch = () => {
        setError(false)
        setLoading(true)
        getRecipes(search)
    }

    const getRecipes = async (query) => {
        try {
            var url;
            if (healthLabel === "All") {
                url = `https://api.edamam.com/search?q=${query}&app_id=${APP_ID}&app_key=${APP_KEY}`

            }
            else {
                url = `https://api.edamam.com/search?q=${query}&app_id=${APP_ID}&app_key=${APP_KEY}&health=${healthLabel.toLowerCase()}`
            }
            console.log(url)
            const response = await fetch(url)
            const data = await response.json();
            setRecipes(data.hits);
            setLoading(false)
            console.log(data);
        } catch (e) {
            setError(true)
            console.log(e)
        }
    };


    return (
        <div className="w-full mb-20">
            <div className="flex justify-center items-center">
                <div className="w-full flex md:flex-row flex-col justify-center">
                    <div className="relative w-full ">
                        <div className="absolute left-5 flex items-center h-14">
                            <AiOutlineSearch size="1.5rem" color="#575757" />
                        </div>
                        <input
                            type="text"
                            value={search}
                            onChange={(e) => setSearch(e.target.value)}
                            className="h-14 w-full pl-14 pr-24 rounded-lg z-0 focus:shadow-md focus:outline-none bg-gray-100"
                            placeholder="Search Recipes"
                        />
                    </div>
                    <div className="flex flex-row h-14 sm:w-auto w-full md:mt-0 mt-2 md:justify-start justify-center">
                        <select value={healthLabel} onChange={(e) => setHealthLabel(e.target.value)} className="h-14 bg-gray-50 pl-2 py-1 border border-gray-200 rounded-xl ml-2">
                            <option onClick={() => { setHealthLabel("All") }}>{"All"}</option>
                            <option onClick={() => { setHealthLabel("Vegan") }}>{"Vegan"}</option>
                            <option onClick={() => { setHealthLabel("Vegetarian") }}>{"Vegetarian"}</option>
                            <option onClick={() => { setHealthLabel("Paleo") }}>{"Paleo"}</option>
                            <option onClick={() => { setHealthLabel("Dairy-free") }}>{"Dairy-free"}</option>
                            <option onClick={() => { setHealthLabel("Gluten-free") }}>{"Gluten-free"}</option>
                            <option onClick={() => { setHealthLabel("Wheat-free") }}>{"Wheat-free"}</option>
                            <option onClick={() => { setHealthLabel("Low-sugar") }}>{"Low-sugar"}</option>
                            <option onClick={() => { setHealthLabel("Egg-free") }}>{"Egg-free"}</option>
                            <option onClick={() => { setHealthLabel("Tree-nut-free") }}>{"Tree-nut-free"}</option>
                            <option onClick={() => { setHealthLabel("Soy-free") }}>{"Soy-free"}</option>
                            <option onClick={() => { setHealthLabel("Fish-free") }}>{"Fish-free"}</option>
                            <option onClick={() => { setHealthLabel("Shellfish-free") }}>{"Shellfish-free"}</option>
                        </select>
                        <button onClick={() => { handleSearch() }} className="h-14 bg-gray-50 hover:bg-gray-100 px-5 border border-gray-200 rounded-xl ml-3 text-lg font-bold">Search</button>
                    </div>
                </div>
            </div>

            {
                recipes.length > 0 && !loading &&
                <div className="grid sm:gap-20 gap-10 lg:grid-cols-3 sm:grid-cols-2 grid-cols-1 w-full mt-5">
                    {recipes.map((recipe) => {
                        return (
                            <RecipeCard recipe={recipe.recipe} />
                        )
                    })}
                </div>
            }

            {
                recipes.length === 0 && loading && !error &&
                < div className="flex flex-row justify-center my-14 w-full">
                    <div className="flex flex-col justify-center items-center">
                        <p className="text-lg text-gray-500">Loading recipes...</p>
                        <img className="h-44" src={Loading} alt="Loading..." />
                    </div>
                </div>
            }

            {
                recipes.length === 0 && !loading && !error &&
                < div className="flex flex-row justify-center my-14 w-full" >
                    <div className="flex flex-col justify-center items-center">
                        <p className="text-lg text-gray-500">Search for recipes</p>
                        <img className="w-44" src={Food} alt="fo" />
                    </div>
                </div >
            }

            {
                recipes.length === 0 && error &&
                <div className="flex flex-row justify-center my-14 w-full">
                    <div className="flex flex-col justify-center items-center">
                        <p className="text-lg text-gray-500">Failed to fetch</p>
                        <img className="w-44" src={FailedToFetch} alt="fo" />
                    </div>
                </div>
            }

        </div >
    )
}
