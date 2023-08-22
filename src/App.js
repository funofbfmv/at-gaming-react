import React from "react";
import Navbar from "./components/Navbar/Navbar";
import BannerCarousel from "./components/BannerCarousel/BannerCarousel"
import Home from "./pages/Home/Home";
import ScrollToTop from "./components/ScroolToTop/ScroolToTop";
import PreLoader from "./components/PreLoader/PreLoader";

function App() {
  return (
    <div className="App bg-gray-950">

        <Home/>
        {/* <PreLoader/> */}
        <ScrollToTop/>

    </div>
  );
}


export default App;
