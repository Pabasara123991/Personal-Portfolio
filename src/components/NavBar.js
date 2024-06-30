import React, { useState, useEffect, useRef } from "react";
import { Navbar, Nav, Container } from "react-bootstrap";
import logo from '../assets/img/logo.svg';

export const NavBar = () => {
  const [activeLink, setActiveLink] = useState('home');
  const [scrolled, setScrolled] = useState(false);
  const [click, setClick] = useState(false);
  const navRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const handleNavItemClick = (value) => {
    setActiveLink(value);
    const section = document.getElementById(value);
    if (section) {
      window.scrollTo({
        top: section.offsetTop,
        behavior: "smooth"
      });
    }
  };

  const handleClick = () => setClick(!click);

  const closeMobileMenu = () => {
    setClick(false);
    document.body.classList.remove('no-scroll');
  };

  const handleResize = () => {
    if (window.innerWidth <= 960) {
      setClick(false); // Close mobile menu on resize
    }
  };

  useEffect(() => {
    handleResize();
    window.addEventListener('resize', handleResize);
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  const handleClickOutside = (event) => {
    if (navRef.current && !navRef.current.contains(event.target)) {
      setClick(false);
      document.body.classList.remove('no-scroll');
    }
  };

  useEffect(() => {
    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  useEffect(() => {
    if (click) {
      document.body.classList.add('no-scroll');
    } else {
      document.body.classList.remove('no-scroll');
    }
  }, [click]);

  return (
    <Navbar expand="md" fixed="top" className={scrolled ? "scrolled" : ""} ref={navRef}>
      <Container>
        <Navbar.Brand href="/" onClick={closeMobileMenu}>
          <img src={logo} alt="Logo" />
        </Navbar.Brand>
        <div className="icon1" onClick={handleClick}>
          <i className={click ? "fa fa-xmark" : "fa fa-bars"}></i>
        </div>
        <Navbar.Collapse id="basic-navbar-nav" className={`basic-navbar-nav ${click ? "show" : ""}`}>
          <Nav className="ms-auto">
            <ul className="navbar-list">
              <li>
                <Nav.Link
                  href="#home"
                  className={activeLink === 'home' ? 'active navbar-link' : 'navbar-link'}
                  onClick={() => { handleNavItemClick('home'); closeMobileMenu(); }}>
                  Home
                </Nav.Link>
              </li>
              <li>
                <Nav.Link
                  href="#about"
                  className={activeLink === 'about' ? 'active navbar-link' : 'navbar-link'}
                  onClick={() => { handleNavItemClick('about'); closeMobileMenu(); }}>
                  About
                </Nav.Link>
              </li>
              <li>
                <Nav.Link
                  href="#skills"
                  className={activeLink === 'skills' ? 'active navbar-link' : 'navbar-link'}
                  onClick={() => { handleNavItemClick('skills'); closeMobileMenu(); }}>
                  Skills
                </Nav.Link>
              </li>
              <li>
                <Nav.Link
                  href="#projects"
                  className={activeLink === 'projects' ? 'active navbar-link' : 'navbar-link'}
                  onClick={() => { handleNavItemClick('projects'); closeMobileMenu(); }}>
                  Projects
                </Nav.Link>
              </li>
              <li>
                <Nav.Link
                  href="#contact"
                  className={activeLink === 'contact' ? 'active navbar-link' : 'navbar-link'}
                  onClick={() => { handleNavItemClick('contact'); closeMobileMenu(); }}>
                  Contact
                </Nav.Link>
              </li>
            </ul>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};
