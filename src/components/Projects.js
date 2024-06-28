import React from 'react';
import { Container } from 'react-bootstrap';
import cozypaws from '../assets/img/cozypaws.png';
import UGC from '../assets/img/UGC.png';
import guide from '../assets/img/guide.png';
import NOIR from '../assets/img/NOIR.png';
import carzilla from '../assets/img/carzilla.png';
import marks from '../assets/img/marks.png';
import foodmanagement from '../assets/img/foodmanagement.png';
import shopping from '../assets/img/shopping.png';
import '@fortawesome/fontawesome-free/css/all.min.css';


export default function Projects() {
  return (
    <section className='projects' id='projects'>
        <Container>
            <div className='projects-content'> 
                <h2>Projects</h2>
                <div className='project-list'>
                    <div className='project'>
                        <img src={cozypaws} alt="Cozy Paws" />
                        <div className='layer'>
                            <h3>Cozy Paws Mobile Application</h3>
                            <p>Mobile application for seamless pet care, offering easy access to pet details, medical history, heat cycle tracking, and care resources.
                            </p>
                            <p>
                                <span style={{ color: '#0096FF' }}>#ReactNative</span>&nbsp;
                                <span style={{ color: '#0096FF' }}>#NodeJs</span>&nbsp;
                                <span style={{ color: '#32de84' }}>#MongoDB</span>&nbsp;
                                <span style={{ color: '#CF9FFF' }}>#Figma</span>
                            </p>
                            <div class="icon-container">
                                <a href='https://github.com/TrusfratedGucci/CozyPaws' target="_blank" rel="noreferrer"><i class="fa-brands fa-github"></i></a>
                                <a href='https://www.figma.com/design/ZnatQ4BlFPvMvGGY517Y2t/COZY-PAWS?node-id=17-2&t=IvuVdEpnbcRi4fbx-1' target="_blank" rel="noreferrer"><i class="fa-regular fa-eye"></i></a>
                            </div>
                        </div>
                    </div>
                    <div className='project'>
                        <img src={UGC} alt="UGC" /> 
                        <div className='layer'>
                            <h3>UGC Website Redesign</h3>
                            <p>Redesign of the University Grants Commission website using Figma, enhancing usability and visual appeal, with intuitive layouts and user-friendly navigation.</p>
                            <p style={{ color: '#CF9FFF' }}>#Figma</p>
                            <a href='https://www.figma.com/design/OC9tLKp70SSHU30ozFwjAI/MORA-UI%2FUX-Round-2?node-id=0-1&t=IvuVdEpnbcRi4fbx-1' target="_blank" rel="noreferrer"><i class="fa-regular fa-eye"></i></a>
                        </div>
                    </div>
                    <div className='project'>
                        <img src={NOIR} alt="NOIR" />
                        <div className='layer'>
                            <h3>NOIR E-Commerce Shopping App Design</h3>
                            <p>Mobile application concept in Figma, designed to offer a sleek and user friendly interface for seamless online shopping. It includes features for browsing products, managing orders, and ensuring a smooth shopping experience.</p>
                            <p style={{ color: '#CF9FFF' }}>#Figma</p>
                            <a href='https://www.figma.com/design/5HdBdaHCdWUvJPDPItGANS/NOIR-E-Commerce-Mobile-App?t=IvuVdEpnbcRi4fbx-1' target="_blank" rel="noreferrer"><i class="fa-regular fa-eye"></i></a>
                        </div>
                    </div>
                    <div className='project'>
                        <img src={guide} alt="Find Your Guide" />
                        <div className='layer'>
                            <h3>Find Your Guide Web Design</h3>
                            <p>Web application concept in Figma, designed to connect users with local guides for personalized tours, featuring direct messaging for seamless trip planning and authentic experiences.</p>
                            <p style={{ color: '#CF9FFF' }}>#Figma</p>
                            <a href='https://www.figma.com/design/bAqIcu3Rg5YJNDlJQpMKwt/UI%2FUX--Solution-for-SL-tourism-problem?node-id=0-1&t=BrACb0VLdggnb68A-1' target="_blank" rel="noreferrer"><i class="fa-regular fa-eye"></i></a>
                        </div>
                    </div>
                    <div className='project'>
                        <img src={carzilla} alt="Carzilla" />
                        <div className='layer'>
                            <h3>Carzilla Web Application</h3>
                            <p>The website offers a gallery of car photos, car-related quizzes, and a selection of automotive shopping items, providing entertainment and practical resources for car enthusiasts.
                            </p>
                            <p>
                                <span style={{ color: '#0096FF' }}>#HTML</span>&nbsp;
                                <span style={{ color: '#0096FF' }}>#JavaScript</span>&nbsp;
                                <span style={{ color: '#0096FF' }}>#CSS</span>&nbsp;
                            </p>
                            <a href='https://github.com/Pabasara123991/Carziila-Web-Application' target="_blank" rel="noreferrer"><i class="fa-brands fa-github"></i></a>
                        </div>
                    </div>
                    <div className='project'>
                        <img src={shopping} alt="Shopping" />
                        <div className='layer'>
                            <h3>Westminster Shopping Center</h3>
                            <p>This project showcases an online shopping system with two interfaces, a console system for product management in addition, deletion, printing, and saving and a GUI for browsing products, adding them to a cart, and viewing dynamic total prices.</p>
                            <p>
                                <span style={{ color: '#0096FF' }}>#Java</span>&nbsp;
                                <span style={{ color: '#0096FF' }}>#Swing</span>&nbsp;
                            </p>
                            <a href='https://github.com/Pabasara123991/Westminster-Shopping-Center' target="_blank" rel="noreferrer"><i class="fa-brands fa-github"></i></a>
                        </div>
                    </div>
                    <div className='project'>
                        <img src={foodmanagement} alt="Food Management" />
                        <div className='layer'>
                            <h3>FoodiesFav Queue Management System</h3>
                            <p>This project showcases an online shopping system for a food center with cashiers and queue limits. It manages burger stock and customer queues, updating stock as customers are served and alerting when stock is low.</p>
                            <p style={{ color: '#0096FF' }}>#Java</p>
                            <a href='https://github.com/Pabasara123991/Foodies-Fav-Queue-Management-System-' target="_blank" rel="noreferrer"><i class="fa-brands fa-github"></i></a>
                        </div>
                    </div>
                    <div className='project'>
                        <img src={marks} alt="Marks" />
                        <div className='layer'>
                            <h3>Marks Sorting System</h3>
                            <p>This project showcases a program that allows students to predict their progression outcome based on the number of credits at pass, defer, and fail. Users input these values, and the program displays the appropriate progression outcome for each student.</p>
                            <p style={{ color: '#0096FF' }}>#Python</p>
                            <a href='https://github.com/Pabasara123991/Marks-Sorting-System' target="_blank" rel="noreferrer"><i class="fa-brands fa-github"></i></a>
                        </div>
                    </div>
                </div>
                
            </div>
        </Container>
    </section>
  )
}
