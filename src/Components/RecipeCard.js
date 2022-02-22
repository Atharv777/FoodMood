import React from 'react'
import { FaExternalLinkAlt } from "react-icons/fa"

export default function RecipeCard({ recipe }) {
    return (
        <div className="border border-gray-200 rounded-xl shadow-xl">
            <img src={recipe.image} alt="Recipe image" className="rounded-xl w-full group-hover:scale-125" />

            <div className="px-4 py-3 flex flex-row justify-center items-center">
                <div className="w-3/5 flex flex-col">
                    <p className="text-lg font-bold">{recipe.label}</p>
                    <p className="text-sm">{recipe.cuisineType} - {recipe.dishType}</p>
                </div>
                <div className="w-2/5 flex flex-col items-center justify-center">
                    <p className="text-sm text-gray-700 text-center">By: {recipe.source}</p>
                    <a href={recipe.url} target="_blank"><FaExternalLinkAlt /></a>
                </div>
            </div>
        </div>
    )
}