import React from 'react';
import './Projects.css'

const Projects = () => {
    return (
        <div data-aos="fade-up" id="projects" className='projects'>
          <div className="projects-title_wrapper">
            <h1 className="projects-title">Projects</h1>
          </div>
          <div className="projects-list_wrapper">
            <ul className="project-list">
              <ul className="project-li">
                <a target='_blank' href="https://github.com/SemX74/simple-notes">NoteApp</a>
                <p>Create, edit and delete notes. Includes dark and light theme.</p>
              </ul>
              <ul className="project-li">
                <a target='_blank' href="https://github.com/SemX74/simple_calculator">Calculator</a>
                <p>Moden styled calculator with basic operations. </p>
              </ul>
              <ul className="project-li">
                <a target='_blank' href="https://github.com/SemX74/simple-weather">Weather App</a>
                <p>Weather website gives you advanced information about your city and foreast for 10 days.</p>
              </ul>
              <ul className="project-li">
                <a target='_blank' href="https://github.com/SemX74/Grass-Stories_Router">Router-Project</a>
                <p>Useless project to practise with react-router and insta-search.</p>
              </ul>
              <ul className="project-li">
                <a target='_blank' href="https://github.com/SemX74/authform-mongodb-express-react">Fullstack Authorization Form</a>
                <p>Project includes mongoose library, express and react-hook-form.</p>
              </ul>
              <ul className="project-li">
                <a target='_blank' href="https://github.com/SemX74/TicTacToe">Tic-Tac-Toe</a>
                <p>TicTacToe and nothing else</p>
              </ul>
              <ul className="project-li">
                <a target='_blank' href="https://github.com/SemX74/letspdf/tree/main/letspdf-client">PDF-Converter(Client side)</a>
                <p>Client side includes dropbox and list with added files.</p>
              </ul>
            </ul>
          </div>
        </div>
      );
}
 
export {Projects};