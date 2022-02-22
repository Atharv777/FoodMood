import React from 'react'

import { AiOutlineSearch } from "react-icons/ai"

export default function SearchBar() {

    const [srchTxt, setSrchTxt] = React.useState("")

    return (
        <div className="container flex justify-center items-center">
            <div className="relative w-full">
                <div className="absolute left-5 flex items-center h-14">
                    <AiOutlineSearch size="1.5rem" color="#575757" />
                </div>
                <input
                    type="text"
                    value={srchTxt}
                    onChange={(e) => setSrchTxt(e.target.value)}
                    className="h-14 w-full pl-14 pr-24 rounded-lg z-0 focus:shadow-md focus:outline-none bg-gray-100"
                    placeholder="Search Recipes"
                />
            </div>
        </div>
    )
}
