import React from 'react';
import About from '../About/About';
import Footer from '../Shared/Footer/Footer';
import Navigation from '../Shared/Navigation/Navigation';
import Tours from '../Tours/Tours';
import Banner from './Banner/Banner';

const Home = () => {
    return (
        <div id="home">
            <Navigation/>
            <Banner/>
            <Tours/>
            <About/>
            <Footer></Footer>
        </div>
    );
};

export default Home;