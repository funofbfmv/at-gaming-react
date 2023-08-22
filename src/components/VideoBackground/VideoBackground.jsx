// src/VideoBackground.js

import React from 'react';
import Video1 from "../../assets/Video/purple.mp4";

const VideoBackground = () => {
    return (
        <div className="relative w-full h-screen overflow-hidden">
            <video
                className="absolute top-0 left-0 object-cover w-full h-full"
                autoPlay
                muted
                loop
                video
            >
                <source src={Video1} type="video/mp4" />
                Your browser does not support the video tag.
            </video>
            {/* Content overlay */}
            <div className="absolute top-0 left-0 w-full h-full bg-opacity-40 bg-black flex items-center justify-center">
                <div className="text-white text-center">
                    <h1 className="text-4xl font-semibold mb-4">Добро пожаловать в AT-Gaming</h1>
                    <p className="text-lg mb-8">Откройте для себя удивительный мир игровых девайсов.</p>
                    <button className="px-16 py-2 bg-purple-800 text-white font-bold rounded-full transition duration-500 ease-in-out shadow-md hover:scale-110 hover:bg-white hover:text-black">
                        Перейти в Каталог
                    </button>
                </div>
            </div>
        </div>
    );
};

export default VideoBackground;