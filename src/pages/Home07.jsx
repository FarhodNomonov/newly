import React from "react";
import HeaderStyle2 from "../components/header/HeaderStyle2";
import Footer from "../components/footer/Footer";
import Category from "../components/layouts/home-7/Category";
import LiveAuction from "../components/layouts/home-7/LiveAuction";
import TopSeller from "../components/layouts/home-7/TopSeller";
import SliderStyle4 from "../components/slider/SliderStyle4";
import heroSliderData from "../assets/fake-data/data-slider";
import TodayPicks from "../components/layouts/home-7/TodayPicks";
import Create from "../components/layouts/home-7/Create";
import PopularCollection from "../components/layouts/home-7/PopularCollection";
import Slider from "./../components/slider/Slider";
import Header from "../components/header/Header";

const Home07 = () => {
  return (
    <div className="home-1 home-6">
      <Header />
      <Slider data={heroSliderData} />
      {/* <HeaderStyle2 />
      <SliderStyle4 /> */}
      <LiveAuction />
      <Category />
      <TopSeller />
      <TodayPicks />
      <Create />
      <PopularCollection />
      <Footer />
    </div>
  );
};

export default Home07;
