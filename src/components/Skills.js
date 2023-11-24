import {Container, Row, Col} from 'react-bootstrap';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import meter1 from '../assests/img/meter1.png';
import meter2 from '../assests/img/meter2.png';
import meter3 from '../assests/img/meter3.png';
import colorSharp from '../assests/img/color-sharp.jpg';

export const Skills = () =>{
    const responsive = {
        superLargeDesktop: {
          // the naming can be any, depends on you.
          breakpoint: { max: 4000, min: 3000 },
          items: 5
        },
        desktop: {
          breakpoint: { max: 3000, min: 1024 },
          items: 3
        },
        tablet: {
          breakpoint: { max: 1024, min: 464 },
          items: 2
        },
        mobile: {
          breakpoint: { max: 464, min: 0 },
          items: 1
        }
      };

      return(
        <section className="skill" id="skill">
            <Container>
                <Row>
                    <Col>
                    <div className="skill-bx">
                        <h2>Skills</h2>
                        <p>I possess a versatile skill set that includes proficiency in programming languages such as JavaScript and Java. I have hands-on experience with web development, including front-end technologies like React and back-end frameworks like Spring. Additionally, I am adept at problem-solving, collaboration, and effective communication. My skills extend to data analysis, utilizing tools like  MySQL. With a strong foundation in software development and a passion for learning, I am well-equipped to contribute to dynamic and innovative projects.</p>
                        <Carousel responsive={responsive} infinite={true} className='skill-slider'>
                            <div className="item">
                                <img src={meter3} alt="" srcset="" />
                                <h5>Web Developement</h5>

                            </div>
                            <div className="item">
                                <img src={meter1} alt="" srcset="" />
                                <h5>Internet Of Things</h5>
                            </div>
                            <div className="item">
                                <img src={meter3} alt="" srcset="" />
                                <h5>Java Backend</h5>
                            </div>
                            <div className="item">
                                <img src={meter3} alt="" srcset="" />
                                <h5>Canva Designing</h5>
                            </div>
                            <div className="item">
                                <img src={meter2} alt="" srcset="" />
                                <h5>MySQL Database</h5>
                            </div>
                        </Carousel>
                    </div>
                    </Col>
                </Row>
            </Container>
            <img className="background-image-left" src={colorSharp} alt="" srcset="" />
        </section>
      )
}