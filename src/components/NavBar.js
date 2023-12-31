import { useEffect, useState } from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";

import logo from "../assests/img/logo.png";
import navIcon1 from "../assests/img/nav-icon1.svg";
import navIcon2 from "../assests/img/github-mark-white.png";
import navIcon3 from "../assests/img/nav-icon3.svg";

import { HashLink } from "react-router-hash-link";
import { BrowserRouter as Router } from "react-router-dom";

export const NavBar = () => {
  const [activeLink, setActiveLink] = useState("");
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    
    const onScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener("scroll", onScroll);

    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const onUpdateActiveLink = (value) => {
    setActiveLink(value);
  };

  return (
    <Router>
      <Navbar expand="md" className={scrolled ? "scrolled" : ""}>
        <Container>
          <Navbar.Brand href="#home">
            <img className="logo" src={logo} alt="Logo" srcset="" />
          </Navbar.Brand>

          <Navbar.Toggle aria-controls="basic-navbar-nav">
            <span className="navbar-toggler-icon"></span>
          </Navbar.Toggle>

          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link
                href="#home"
                className={
                  activeLink === "home" ? "active:navbar-link" : "navbar-link"
                }
                onClick={() => onUpdateActiveLink("home")}
              >
                Home
              </Nav.Link>
              <Nav.Link
                href="#skills"
                className={
                  activeLink === "skills" ? "active:navbar-link" : "navbar-link"
                }
                onClick={() => onUpdateActiveLink("skills")}
              >
                Skills
              </Nav.Link>
              <Nav.Link
                href="#projects"
                className={
                  activeLink === "projects"
                    ? "active:navbar-link"
                    : "navbar-link"
                }
                onClick={() => onUpdateActiveLink("projects")}
              >
                Projects
              </Nav.Link>
              <Nav.Link
                href="https://53abdeali.github.io/MyResume/"
                className={
                  activeLink === "resume" ? "active:navbar-link" : "navbar-link"
                }
                onClick={() => onUpdateActiveLink("resume")}
              >
                Resume
              </Nav.Link>
            </Nav>

            <span className="navbar-text">
              <div className="social-icon">
                <a href="https://www.linkedin.com/in/abdeali-kota-wala-039155242/">
                  <img src={navIcon1} alt="" srcset="" />
                </a>
                <a href="https://github.com/53Abdeali">
                  <img src={navIcon2} alt="" srcset="" />
                </a>
                <a href="https://instagram.com/abdealiamiruddin?igshid=NzZlODBkYWE4Ng==">
                  <img src={navIcon3} alt="" srcset="" />
                </a>
              </div>
              <HashLink to="#connect">
                <button
                  className="vvd"
                  onClick={() => console.log("connect to github")}
                >
                  <a href="https://github.com/53Abdeali">Let's Connect</a>
                </button>
              </HashLink>
            </span>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </Router>
  );
};

export default NavBar;
