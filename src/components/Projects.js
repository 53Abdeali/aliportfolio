import { Row, Col, Container, Tab, Nav } from "react-bootstrap";
import TrackVisibility from 'react-on-screen';
import { ProjectCard } from "./ProjectCard";
import colorsharp from '../assests/img/color-sharp.jpg'
import projImg1 from '../assests/img/project-img1.png'
import projImg2 from '../assests/img/project-img2.png'
import projImg3 from '../assests/img/project-img3.png'

export const Projects = () => {
  const projects = [
    {
      title: "Business Startup",
      description: "Design & Development",
      imgUrl: projImg1
    },

    {
      title: "Business Startup",
      description: "Design & Development",
      imgUrl: projImg2
    },

    {
      title: "Business Startup",
      description: "Design & Development",
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
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Eum,
              recusandae quos doloribus tenetur quas vero. Nobis ducimus aliquid
              tempore recusandae doloremque quo soluta numquam cum ullam
              perspiciatis tenetur repudiandae, temporibus ipsa eveniet error
              architecto maiores ab. Iste aliquam voluptas nesciunt. Repellat
              voluptatem quisquam dignissimos assumenda repellendus sed error
              tempore et?
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

                <Tab.Pane eventKey="second">Lorem, ipsum.</Tab.Pane>
                <Tab.Pane eventKey="third">Lorem, ipsum.</Tab.Pane>

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
