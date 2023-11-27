import { useEffect, useState, useCallback, useMemo } from "react";
import { Container, Row, Col } from "react-bootstrap";
import { ArrowRightCircle } from "react-bootstrap-icons";
import 'react-animations';
import TrackVisibility from "react-on-screen";
import headerImg from "../assests/img/3426526.png";

export const Banner = () => {
  const [loopNum, setLoopNum] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const [text, setText] = useState("");
  const [delta, setDelta] = useState(200 - Math.random() * 100);
  const period = 2000;
  const toRotate = useMemo(() => ['Web Developer', 'Java Developer', 'MySQL Developer'], []);

  const tick = useCallback(() => {
    let i = loopNum % toRotate.length;
    let ft = toRotate[i];
    let updated = isDeleting
      ? ft.substring(0, text.length - 1)
      : ft.substring(0, text.length + 1);

    setText(updated);

    if (isDeleting) {
      setDelta((prevDelta) => prevDelta / 2);
    }

    if (!isDeleting && updated === ft) {
      setIsDeleting(true);
      setDelta(period);
    } else if (isDeleting && updated === "") {
      setIsDeleting(false);
      setLoopNum((prevLoopNum) => prevLoopNum + 1);
      setDelta(500);
    }
  }, [isDeleting, setDelta, setIsDeleting, setLoopNum, setText, text, toRotate, loopNum, period]);

  useEffect(() => {
    let ticker = setInterval(() => {
      tick();
    }, delta);

    return () => {
      clearInterval(ticker);
    };
  }, [delta, text, tick]);


  return (
    <section className="banner" id="home">
      <Container>
        <Row className="align-items-center">
          <Col xs={12} md={6} xl={7}>
          <TrackVisibility>
              {({ isVisible }) =>
              <div className={isVisible ? "animate__animated animate__fadeIn" : ""}>
            <span className="tagline">Welcome to my Portfolio</span>
            <h1>
              {`Hi I'm Abdeali`}
              <br /> <span className="wrap">{text}</span>
            </h1>
            <p>
              Dedicated and highly skilled Java Backend Developer with 2+ years
              of experience in designing, developing, and maintaining robust,
              scalable, and efficient back-end systems. Proficient in a wide
              range of Java technologies and frameworks, I am committed to
              delivering high-quality software solutions that meet and exceed
              client expectations. My strong analytical and problem-solving
              skills, coupled with a deep understanding of software development
              best practices, make me a valuable asset to any development team.
            </p>
            <button onClick={() => console.log("connect")}> <a href="https://github.com/53Abdeali">Let's Connect </a>
              <ArrowRightCircle size={25}></ArrowRightCircle>
            </button>
            </div>}
            </TrackVisibility>
          </Col>
          <Col className="bannerImage" xs={12} md={6} xl={5}>
          <TrackVisibility>
              {({ isVisible }) =>
                <div className={isVisible ? "animate__animated animate__zoomIn" : ""}>
                  <img src={headerImg} alt="Header Img"/>
                </div>}
            </TrackVisibility>
          </Col>
        </Row>
      </Container>
    </section>
  );
};
