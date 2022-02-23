import React, { useState } from 'react';
import { SiInstagram, SiFacebook, SiYoutube, SiTwitter } from "react-icons/si"

import Header from "./Components/Header"
import RecipeFinder from "./Components/RecipeFinder"

import HeroBannerImg from './assets/hero.jpg'
import Logo from "./assets/logo.png"

function App() {

    return (
        <>
            <div className="px-10 font-exo">
                <Header />
                <section className="w-full">
                    <div className="rounded-3xl bg-gray-100 flex lg:flex-row flex-col justify-between">
                        <div className="lg:w-3/6 w-full text-md sm:p-20 p-5 flex flex-col justify-center items-center">
                            <h1 className="sm:text-6xl text-5xl font-bold">Food Mood</h1>
                            <p className="mt-7 text-center sm:text-xl text-lg text-gray-700">We provide a variety of recipes including chinese, italian, spanish and mexican. You will also get to know the detailed nutritional information.</p>
                        </div>

                        <img src={HeroBannerImg} className="lg:w-3/6 w-full rounded-3xl" draggable="false" />

                    </div>
                </section>

                <section className="mt-14 flex flex-row justify-center">
                    <div className="w-5/6">
                        <RecipeFinder />
                    </div>
                </section>
            </div>

            <footer class="bg-gray-100 text-gray-700 py-7 flex flex-col items-center shadow-lg">
                <div className="mt-7 flex flex-row items-center">
                    <img src={Logo} alt="" className="w-8 h-8 mr-2" />
                    <a href="#" className="font-lobster text-4xl text-gray-800">Food Mood</a>
                </div>
                <div className="mt-9 flex flex-row items-center">
                    <div className="transition mx-5 text-3xl hover:text-purple-600">
                        <SiInstagram />
                    </div>
                    <div className="transition mx-5 text-3xl hover:text-blue-700">
                        <SiFacebook />
                    </div>
                    <div className="transition mx-5 text-3xl hover:text-blue-500">
                        <SiTwitter />
                    </div>
                    <div className="transition mx-5 text-3xl hover:text-red-600">
                        <SiYoutube />
                    </div>
                </div>
                <div className="mt-9 flex sm:flex-row flex-col justify-center items-center sm:divide-x-2 sm:divide-gray-500">
                    <p className="px-2">Copyright &#169; FoodMood 2022</p>
                    <p className="px-2">Made with ❤ by Atharv varshney</p>
                </div>
            </footer >
        </>
    );
}

export default App;
