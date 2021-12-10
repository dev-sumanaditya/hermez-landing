import React, { useState } from 'react';
import Fade from 'react-reveal/Fade';
import './homepage.css'

const HomePage = () => {
    return (
        <div className="min-h-screen">
            <div className="relative">
                <div className="fixed top-0 right-0 w-3/12 h-full z-10 overflow-hidden">
                        <video onContextMenu={e => e.preventDefault()} className="videoBG" preload="auto" autoPlay muted loop>
                            <source src={`${process.env.PUBLIC_URL}/assets/video/dark1.mp4`} type="video/mp4"/>
                        </video>
                </div>
                <div className="absolute top-0 left-0 w-full h-full z-30 px-4">
                    <div className="max-w-6xl h-screen flex flex-col justify-between mx-auto">
                        <div className="flex py-14 md:py-20">
                            <div className="brand">
                                <img src={`${process.env.PUBLIC_URL}/assets/logo/logo.svg`} alt="" />
                            </div>
                        </div>
                        <div className="flex-grow flex flex-col justify-center">
                            <div className="text-white">
                                <div className="w-full md:w-9/12">
                                    <h1 className="text-2xl sm:text-4xl md:text-5xl lg:text-5xl xl:text-5xl leading-normal">We help NFT collection offering services @ the intersection of media, promotion, newsletter & research</h1>
                                </div>
                            </div>
                        </div>
                        <div className="flex py-14 md:py-20">
                            <a href="mailto:hermezfirm@gmail.com" className="flex items-center gap-2 text-white hover:text-gray-300">
                                <svg className="h-6 w-6 md:h-10 md:w-10" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path fill-rule="evenodd" clip-rule="evenodd" d="M3.87868 5.87868C3 6.75736 3 8.17157 3 11V13C3 15.8284 3 17.2426 3.87868 18.1213C4.75736 19 6.17157 19 9 19H15C17.8284 19 19.2426 19 20.1213 18.1213C21 17.2426 21 15.8284 21 13V11C21 8.17157 21 6.75736 20.1213 5.87868C19.2426 5 17.8284 5 15 5H9C6.17157 5 4.75736 5 3.87868 5.87868ZM6.5547 8.16795C6.09517 7.8616 5.4743 7.98577 5.16795 8.4453C4.8616 8.90483 4.98577 9.5257 5.4453 9.83205L10.8906 13.4622C11.5624 13.9101 12.4376 13.9101 13.1094 13.4622L18.5547 9.83205C19.0142 9.5257 19.1384 8.90483 18.8321 8.4453C18.5257 7.98577 17.9048 7.8616 17.4453 8.16795L12 11.7982L6.5547 8.16795Z" fill="currentColor"/>
                                </svg>
                                <p className="text-sm md:text-2xl">hermezfirm@gmail.com</p>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default HomePage;