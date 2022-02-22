import React from "react";
import Logo from "../assets/logo.png"

export default function Navbar() {

    return (
        <div className="bg-white w-full h-20 flex flex-row items-center justify-center mb-5">

            <div className="py-5 flex flex-row items-center">
                <img src={Logo} alt="" className="w-8 h-8 mr-2" />
                <a href="#" className="font-lobster font-semibold text-3xl">Food Mood</a>
            </div>

        </div>
    );
}
