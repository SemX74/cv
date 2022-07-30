import React from 'react';
import { ReactComponent as GitHub } from '../../misc/icons/icons8-github-50.svg'
import { ReactComponent as Insta } from '../../misc/icons/icons8-instagram-50.svg'
import { ReactComponent as Telegram } from '../../misc/icons/icons8-телеграмма-app-50.svg'
import { ReactComponent as Gmail } from '../../misc/icons/icons8-gmail-50.svg'
import './About.css'
import Aos from 'aos';

const About = () => {
    return (
        <div data-aos="fade-up" id="about" className='about'>
          <div className='aboutinfo'>
            <h1 className='about-title'>About me</h1>
            <p className='about-text'>Hey! My name is Mykola and I'm exploring the programming world for like 1 year. <br /> My first 3 languages (C++, C# & Python) gave me invaluable experience in solving algorithm exercises. I have been learning JS for 6 months and made huge progress because of previous experience.
            <br /><br />
About my soft skills:
<br /><br />
Firstly, I have strong B2 English which allows me to communicate with people all around the world. 
<br />
Secondly, I've always been a captain everywhere. Every single birthday, school event, or celebration didn't pass by my leadership.</p>
          </div>
            <h1 className="links-title">Links</h1>
          <div className='links'>
            <a className='link' href="https://github.com/SemX74"><GitHub /></a>
            <a className='link' href="https://www.instagram.com/kose_7/"><Insta/></a>
            <a className='link' href="https://t.me/Nikeolay"><Telegram /></a>
            <a className='link' href="mailto:semka147semov@gmail.com"><Gmail /></a>
          </div>
        </div>
      );
}
 
export {About};