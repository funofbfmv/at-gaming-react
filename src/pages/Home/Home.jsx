import React from "react";
import { Link } from "react-router-dom";
import Navbar from "../../components/Navbar/Navbar"
import BannerCarousel from "../../components/BannerCarousel/BannerCarousel";
import Card, { CardDefault } from "../../components/CardDefault/CardDefault";
import VideoBackground from "../../components/VideoBackground/VideoBackground";
import Footer from "../../components/Footer/Footer";
import ScrollToTop from "../../components/ScroolToTop/ScroolToTop";


function Home(){
    return(
        <>
        <Navbar/>
        <VideoBackground/>   
        <div className="lg:flex md:block justify-center align-center space-x-12 space-y-1 lg:px-24 mt-10 mb-10">     

                <div>
                <CardDefault/>
                </div>
                <div>
                <CardDefault/>
                </div>
                <div>
                <CardDefault/>
                </div>
        </div> 

        <Footer/>

        </>
    )
};
export default Home;