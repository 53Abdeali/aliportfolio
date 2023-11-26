import { Row, Col, Container, Tab, Nav } from "react-bootstrap";
import TrackVisibility from 'react-on-screen';
import 'react-animations';
import { ProjectCard } from "./ProjectCard";
import colorsharp from '../assests/img/color-sharp.jpg'
import projImg1 from '../assests/img/portfolio.png'
import projImg2 from '../assests/img/react & spring.png'
import projImg3 from '../assests/img/Mysql+ml.png'

export const Projects = () => {
  const projects = [
    {
      title: "My Portfolio",
      description: "Design & Developed using React.JS .",
      imgUrl: projImg1
    }
  ];

  const projectsJava = [
    {
      title: "To do List",
      description: "Developed using Java, React.JS, Spring Boot. ",
      imgUrl: projImg2
    }
  ];

  const projectsSql = [
    {
      title: "Image Visualisation",
      description: "A Machine Learning Project for the visualisation of image using Python and MySql. ",
      imgUrl: projImg3
    }
  ];

  return (
    <section className="project" id="projects">
      <Container >
        <Row>
          <Col size={12}>
            <TrackVisibility>
            {({ isVisible }) =>
              <div className={isVisible ? "animate__animated animate__fadeIn": ""}>
            <h2>Projects</h2>
            <p>
              Hey! Here are the few glimpses of project made by me.
            </p>
            <Tab.Container id="projects-tabs" defaultActiveKey="first">
              <Nav variant="pills" className="nav-pills mb-5 justify-content-center align-items-center" id ="pils-tab">
                <Nav.Item>
                  <Nav.Link eventKey="first">Web Projects</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                  <Nav.Link eventKey="second">Java Projects</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                  <Nav.Link eventKey="third">
                    MySQL + ML
                  </Nav.Link>
                </Nav.Item>
              </Nav>
              <Tab.Content>
                <Tab.Pane eventKey="first">
                    <Row>
                        {
                            projects.map((project, index) => {
                                return(
                                    <ProjectCard key={index} {...project}/>
                                )
                            })
                        }
                    </Row>
                </Tab.Pane>

                <Tab.Pane eventKey="second">
                <Row>
                        {
                            projectsJava.map((project, index) => {
                                return(
                                    <ProjectCard key={index} {...project}/>
                                )
                            })
                        }
                    </Row>
                </Tab.Pane>
                <Tab.Pane eventKey="third">
                <Row>
                        {
                            projectsSql.map((project, index) => {
                                return(
                                    <ProjectCard key={index} {...project}/>
                                )
                            })
                        }
                    </Row>
                </Tab.Pane>

              </Tab.Content>
            </Tab.Container>
            </div>
        }</TrackVisibility>
          </Col>
        </Row>
      </Container>
      <img className="background-image-right" src={colorsharp} alt=""></img>
    </section>
  );
};
