import React from 'react';
import './Home.css'

const Home = () => {
    return (
        <div id="home"className='home'>
            <div data-aos="fade-right" className='left'>
                <div className='home-title_wrapper'>
                    <h1 className='home-title'>Hi, I'm <span >Nick</span></h1>
                    <h3 className='home-subtitle'>And I'm Junior Frontend Developer!</h3>
                </div>
            </div>
            <div data-aos="fade-left" className='right'></div>
        </div>
      );
}
 
export {Home};