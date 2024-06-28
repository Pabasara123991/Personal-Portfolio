import { useState, useEffect } from "react";
import { Container, Row, Col } from "react-bootstrap";
import headerImg from "../assets/img/headerImg.png"
import img2 from "../assets/img/img2.png";
import { ArrowRightCircle } from 'react-bootstrap-icons';
import 'animate.css';
import TrackVisibility from 'react-on-screen';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLinkedinIn } from "@fortawesome/free-brands-svg-icons/faLinkedinIn";
import { faGithub } from "@fortawesome/free-brands-svg-icons/faGithub";
import { faBehance } from "@fortawesome/free-brands-svg-icons";

export const Banner = () => {
  const [loopNum, setLoopNum] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const [text, setText] = useState('');
  const [delta, setDelta] = useState(300 - Math.random() * 100);
  const [index, setIndex] = useState(1);
  const toRotate = [  "UI/UX Designer", "Frontend Developer" ];
  const period = 2000;

  useEffect(() => {
    let ticker = setInterval(() => {
      tick();
    }, delta);

    return () => { clearInterval(ticker) };
  }, [text])

  const tick = () => {
    let i = loopNum % toRotate.length;
    let fullText = toRotate[i];
    let updatedText = isDeleting ? fullText.substring(0, text.length - 1) : fullText.substring(0, text.length + 1);

    setText(updatedText);

    if (isDeleting) {
      setDelta(prevDelta => prevDelta / 2);
    }

    if (!isDeleting && updatedText === fullText) {
      setIsDeleting(true);
      setIndex(prevIndex => prevIndex - 1);
      setDelta(period);
    } else if (isDeleting && updatedText === '') {
      setIsDeleting(false);
      setLoopNum(loopNum + 1);
      setIndex(1);
      setDelta(500);
    } else {
      setIndex(prevIndex => prevIndex + 1);
    }
  }

  return (
    <section className="banner" id="home">
      <Container>
      <div className="shape">
        <div className="shape gradient-circle">
        </div>
      </div>
      <div className="shape1">
        <div className="shape gradient-circle1">
        </div>
      </div>
      <div className="shape2">
        <div className="shape gradient-circle2">
        </div>
      </div>
        <Row className="aligh-items-center">
          <Col xs={12} md={6} xl={7}>
            <TrackVisibility>
              {({ isVisible }) =>
              <div className={isVisible ? "animate__animated animate__fadeIn" : ""}>
                {/* <span className="tagline">Welcome to my Portfolio</span> */}
                <h1>{`Hi! I'm Pabasara`}<br /> <span className="txt-rotate" dataPeriod="1000" data-rotate='[  "UI/UX Designer", "Frontend Developer" ]'><span className="wrap">{text}</span></span></h1>
                  <p>I'm a UI/UX designer and web developer passionate about creating engaging digital experiences. With a focus on user-centric design and cutting-edge web technologies, I strive to bring creativity and functionality together.</p>
                  <div className="social-icon">
                    <a href="https://www.linkedin.com/in/pabasara-de-silva-257349266/" target="_blank"><FontAwesomeIcon icon={faLinkedinIn} /></a>
                    <a href="https://github.com/Pabasara123991" target="_blank"><FontAwesomeIcon icon={faGithub}/></a>
                    <a href="https://www.behance.net/pabasaradesilva" target="_blank"><FontAwesomeIcon icon={faBehance}  /></a>
                  </div>
                  <button onClick={() => console.log('connect')}>Let’s Connect <ArrowRightCircle size={25} /></button>
              </div>}
            </TrackVisibility>
          </Col>
          <Col xs={12} md={6} xl={5}>
            <TrackVisibility>
              {({ isVisible }) =>
                <div className={isVisible ? "animate__animated animate__zoomIn" : ""}>
                  <img 
                  src={img2} 
                  alt="Header Img" 
                  style={
                    { marginTop: '-200px'}
                    }/>
                </div>}
            </TrackVisibility>
          </Col>
        </Row>
      </Container>
    </section>
  )
}
