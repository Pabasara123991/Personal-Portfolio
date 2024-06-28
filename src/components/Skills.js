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
    return (
        <section className='skills' id='skills'>
            <Container>
                <div className='skills-content'>
                    <h2>Skills</h2>
                    <div className='skills-icon-container'>
                        <div className='icon-wrapper figma-icon'>
                            <img src={figma} alt="Figma" />
                        </div>
                        <div className='icon-wrapper html-icon'>
                            <img src={html} alt="HTML" />
                        </div>
                        <div className='icon-wrapper css-icon'>
                            <img src={css} alt="CSS" />
                        </div>
                        <div className='icon-wrapper javascript-icon'>
                            <img src={javascript} alt="JavaScript" />
                        </div>
                        <div className='icon-wrapper react-icon'>
                            <img src={react} alt="React" />
                        </div>
                        <div className='icon-wrapper java-icon'>
                            <img src={java} alt="Java" />
                        </div>
                        <div className='icon-wrapper mysql-icon'>
                            <img src={mysql} alt="MySQL" />
                        </div>
                        <div className='icon-wrapper python-icon'>
                            <img src={python} alt="Python" />
                        </div>
                    </div>
                </div>
            </Container>
        </section>
    );
};

export default Skills;
