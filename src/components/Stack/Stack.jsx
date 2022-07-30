import React from 'react';
import './Stack.css'

const Stack = () => {
    return (
        <div  id="stack" className='stack'>
            <div className='stack-title_wrapper'>
                <h1 className="stack-title">Skills</h1>
            </div>
            <div data-aos="fade-up" className="mern-wrapper">
                <div className="mern-column">
                    <h1><span>*</span>Frontend</h1>
                    <p>Solid knowleadge of : <br /> - HTML <br /> - SCSS <br /> - ReactJS</p>
                </div>
                <div className="mern-column">
                    <h1>Backend</h1>
                    <p>Basics of : <br /> - MongoDB <br /> - Express <br /> - NodeJS</p>
                </div>
                <div className="mern-column">
                    <h1>Soft</h1>
                    <p> - Strong english <br /> - Out-going <br />- Passionate <br />- Responsible</p>
                </div>
                <div className="mern-column">
                    <h1>Other</h1>
                    <p>- Git <br />- Adobe soft(Ps,Pp) <br />- Fluent Ukrainian/Russian <br /> - 18 y.o </p>
                </div>
            </div>
        </div>
      );
}
 
export {Stack};