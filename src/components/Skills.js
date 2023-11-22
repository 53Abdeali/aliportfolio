import {Container, Row, Col} from 'react-bootstrap';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import meter1 from '../assests/img/meter1.svg';
import meter2 from '../assests/img/meter2.svg';
import meter3 from '../assests/img/meter3.svg';
import colorSharp from '../assests/img/color-sharp.png';

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
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nulla doloremque odio assumenda maiores consequuntur, incidunt suscipit corrupti eos libero ipsa reprehenderit debitis cum voluptatem totam perferendis. Veniam provident non libero nesciunt reiciendis? Dolorum aspernatur dicta beatae nobis possimus nisi fugit esse odio repellat quae ut obcaecati iste minus rem voluptatum sunt impedit vel provident, ullam totam mollitia tempore repellendus exercitationem? Accusamus voluptas consectetur sit ea vitae veniam nostrum maxime voluptatibus rem quisquam ipsum, quidem perferendis harum fugit quis aliquam inventore enim id sunt corrupti! Adipisci quisquam tempora saepe ullam, rerum perferendis inventore nulla fuga impedit porro consectetur vel a deleniti.</p>
                        <Carousel responsive={responsive} infinite={true} className='skill-slider'>
                            <div className="item">
                                <img src={meter1} alt="" srcset="" />
                                <h5>Web Developer</h5>

                            </div>
                            <div className="item">
                                <img src={meter2} alt="" srcset="" />
                                <h5>Internet Of Things</h5>
                            </div>
                            <div className="item">
                                <img src={meter3} alt="" srcset="" />
                                <h5>Java Backend</h5>
                            </div>
                            <div className="item">
                                <img src={meter2} alt="" srcset="" />
                                <h5>Canva Designing</h5>
                            </div>
                            <div className="item">
                                <img src={meter1} alt="" srcset="" />
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