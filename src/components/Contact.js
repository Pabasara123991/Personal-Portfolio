import React, { useState } from 'react';
import { Container } from 'react-bootstrap';

export default function Contact() {
  const [submitted, setSubmitted] = useState(false); // State variable to track submission status

  // Function to handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();

    const scriptURL = 'https://script.google.com/macros/s/AKfycbxYo2bptFl6efSNbYbFGb_ug004uzAqV03zOGfD826nQlcILI_rqSFlWhQkZqitPH6k/exec';
    const form = e.target;
    
    try {
      const response = await fetch(scriptURL, {
        method: 'POST',
        body: new FormData(form)
      });
      
      if (response.ok) {
        console.log('Form submitted successfully');
        setSubmitted(true); // Update state to indicate form submission success
        form.reset(); // Optionally reset the form fields
      } else {
        throw new Error('Form submission failed');
      }
    } catch (error) {
      console.error('Error submitting form:', error.message);
    }
  };

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
                  <span className='icon'><i className="fa-solid fa-envelope"></i></span>
                  <span>bodahandihdesilva@gmail.com</span>
                </p>
                <p>
                  <span className='icon'><i className="fa-solid fa-phone"></i></span>
                  <span>0711582299</span>
                </p>
              </div>
            </div>
            <div className='contact-right'>
              {submitted ? (
                <div className="success-message">
                  <p style={{ color: '#0047AB' }}>Message sent successfully!</p>
                </div>
              ) : (
                <form onSubmit={handleSubmit}>
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
                    <input type='email' id="email" name="Email" placeholder='Your Email' required />
                  </div>
                  
                  <div className='form-group'>
                    <label htmlFor="message">Message</label>
                    <textarea id="message" name='Message' rows={6} placeholder='Your Message' required></textarea>
                  </div>
                  <div className='form-group'>
                    <button type='submit' className='btn'>Submit</button>
                  </div>
                </form>
              )}
            </div>
          </div>
        </div>
      </Container>
    </section>
  )
}
