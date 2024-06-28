import React from 'react';
import { Container } from 'react-bootstrap';

export default function Contact() {
  return (
    <section className='contact' id='contact'>
    <Container>
        <div className='contact-content'> 
            <div className='row'>
                <div className='contact-left'>
                    <div className="form-shape3">
                        <div className="form-shape-circle3"></div>
                    </div>
                    <h2>Let's Work Together. <br /> Drop Me A Line.</h2>
                    <p className='description'>I'm actively seeking for new opportunities. If you're looking for a dedicated and skilled professional to join your team, I'd love to discuss how I can contribute. Please feel free to reach out!
                    </p>
                    <div className='social-icons'>
                        <p>
                            <span className='icon'><i class="fa-solid fa-envelope"></i></span>
                            <span>bodahandihdesilva@gmail.com</span>
                        </p>
                        <p>
                            <span className='icon'><i class="fa-solid fa-phone"></i></span>
                            <span>0711582299</span>
                        </p>
                    </div>
                </div>
                <div className='contact-right'>
                    <form>
                        <div className="form-shape1">
                            <div className="form-shape-circle1"></div>
                        </div>
                        <div className="form-shape2">
                            <div className="form-shape-circle2"></div>
                        </div>
                        <div className='form-group'>
                            <label htmlFor="name">Name</label>
                            <input type='text' id="name" name="Name" placeholder='Your Name' required />
                        </div>
                        
                        <div className='form-group'>
                            <label htmlFor="email">Email</label>
                            <input type='email' id="email" name="email" placeholder='Your Email' required />
                        </div>
                        
                        <div className='form-group'>
                            <label htmlFor="message">Message</label>
                            <textarea id="message" name='Message' rows={6} placeholder='Your Message' required></textarea>
                        </div>
                        <div className='form-group'>
                            <button type='submit' className='btn'>Submit</button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    </Container>
    </section>
  )
}
