import React from 'react';
import Hero from '../components/hero/Hero';
import Sezon from '../components/sezon/Sezon';
import Collect from '../components/collecsia/Collect';
import New from '../components/new/New';
import Brand from '../components/brand/Brand';

const Home = () => {
    return (
        <div>
        <Hero />
        <Sezon />
        <Collect />
        <New />
        <Brand />
        
        </div>
    );
}

export default Home;
