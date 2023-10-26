import React from 'react';
import HomeHeader from "./HomeHeader.jsx";
import HomeThreeColumns from "./HomeThreeColumns.jsx";
import HomeSimpleSteps from "./HomeSimpleSteps.jsx";
import HomeAboutUs from "./HomeAboutUs.jsx";
import HomeWhoWeHelp from "./HomeWhoWeHelp.jsx";
import HomeContact from "./HomeContact.jsx";
import HomeFooter from "./HomeFooter.jsx";

const Home = () => {
    return (
        <div className="home-page" id="home-page">
            <HomeHeader/>
            <HomeThreeColumns/>
            <HomeSimpleSteps/>
            <HomeAboutUs/>
            <HomeWhoWeHelp/>
            <HomeContact/>
            <HomeFooter/>
        </div>
    );
};

export default Home;