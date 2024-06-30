import React from 'react';
import { Container } from 'react-bootstrap';
import figma from '../assets/img/figma.svg';
import html from '../assets/img/html.svg';
import css from '../assets/img/css.svg';
import react from '../assets/img/react.svg';
import mysql from '../assets/img/mysql.svg';
import python from '../assets/img/python.svg';
import java from '../assets/img/java.svg';
import javascript from '../assets/img/javascript.svg';

const Skills = () => {
    const skills = [
        "Figma", "HTML", "CSS", "JavaScript", 
        "React", "Java", "MySQL", "Python"
    ];

    const lastRow = skills.slice(-2);
    const remainingSkills = skills.slice(0, -2);

    return (
        <section className='skills' id='skills'>
            <Container>
                <div className='skills-content'>
                    <h2>Skills</h2>
                    <div className='skills-icon-container'>
                        <div className='icon-wrapper figma-icon'>
                            <img src={figma} alt="Figma" className="skill-icon"/>
                        </div>
                        <div className='icon-wrapper html-icon'>
                            <img src={html} alt="HTML" className="skill-icon"/>
                        </div>
                        <div className='icon-wrapper css-icon'>
                            <img src={css} alt="CSS" className="skill-icon"/>
                        </div>
                        <div className='icon-wrapper javascript-icon'>
                            <img src={javascript} alt="JavaScript" className="skill-icon"/>
                        </div>
                        <div className='icon-wrapper react-icon'>
                            <img src={react} alt="React" className="skill-icon"/>
                        </div>
                        <div className='icon-wrapper java-icon'>
                            <img src={java} alt="Java" className="skill-icon"/>
                        </div>
                        <div className='icon-wrapper mysql-icon'>
                            <img src={mysql} alt="MySQL" className="skill-icon"/>
                        </div>
                        <div className='icon-wrapper python-icon'>
                            <img src={python} alt="Python" className="skill-icon"/>
                        </div>
                    </div>
                    <div className='skills-mobile-container'>
                        <ul>
                            {remainingSkills.map(skill => (
                                <li key={skill}>{skill}</li>
                            ))}
                        </ul>
                        <div className='last-row'>
                            {lastRow.map(skill => (
                                <li key={skill}>{skill}</li>
                            ))}
                        </div>
                    </div>
                </div>
            </Container>
        </section>
    );
};

export default Skills;
