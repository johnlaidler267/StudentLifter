//React components
import React from 'react';

//Custom components
import IntroCard from './IntroCard';
import ProductWheel from './ProductWheel.js';
import AboutUs from './AboutUs.js'

function Main(props) {
    return (
        <div>
            <IntroCard />
            <br></br>
            <ProductWheel />
            <br></br>
            <AboutUs />
        </div>
    );
}

export default Main;

