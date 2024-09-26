import React from 'react';
import Banner from './Banner';
import Scrolling from './Scrolling';
import HomeGallery from './HomeGallery';

const Home = () => {
    return (
        <div className=''>
            <Banner/>
            <Scrolling/>
            <HomeGallery/>
        </div>
    );
};

export default Home;