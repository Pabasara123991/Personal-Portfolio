import React from 'react';
import { Container } from 'react-bootstrap';

export const About = () => {
  const handleDownload = () => {
    // Replace with your CV file URL
    const cvUrl = `${process.env.PUBLIC_URL}/cv/Pabasara-De-Silva-CV.pdf`;

    // Create an anchor element
    const link = document.createElement('a');
    link.href = cvUrl;

    // Set the download attribute and filename
    link.setAttribute('download', 'Pabasara_De_Silva_CV.pdf');

    // Append the anchor to the body
    document.body.appendChild(link);

    // Click the anchor to trigger the download
    link.click();

    // Clean up: Remove the anchor from the body
    document.body.removeChild(link);
  };

  return (
    <section className='about' id='about'>
      <Container>
        <div className='about-content'>
          <h2>About Me</h2>
          <p>Hi, I am Pabasara De Silva, an undergraduate student who is passionate about <strong className='highlight1'>UI/UX Design</strong> and <strong className='highlight1'>Front-end Development</strong>. I enjoy working on projects that involve creativity and innovation.
          </p>
          <p>I am actively seeking an internship in front-end development and UX/UI design, eager to contribute my skills and creativity to a forward-thinking team. My motivation lies in the opportunity to learn, grow, and make a meaningful impact through innovative design and development. If my profile resonates with you, I would love to connect and discuss potential opportunities.</p>
        </div>
        <div className='button-container'>
        <button onClick={handleDownload}>Download CV </button>
        </div>
      </Container>
      <div className="shape3">
        <div className="shape gradient-circle3">
        </div>
      </div>
      <div className="shape4">
        <div className="shape gradient-circle3">
        </div>
      </div>
      <div className="shape5">
        <div className="shape gradient-circle3">
        </div>
      </div>
      <div className="shape6">
        <div className="shape gradient-circle3">
        </div>
      </div>
      <div className="shape7">
        <div className="shape gradient-circle4">
        </div>
      </div>
      <div className="shape8">
        <div className="shape gradient-circle4">
        </div>
      </div>
      <div className="shape9">
        <div className="shape gradient-circle4">
        </div>
      </div>
      <div className="shape10">
        <div className="shape gradient-circle4">
        </div>
      </div>
    </section>
  );
};
