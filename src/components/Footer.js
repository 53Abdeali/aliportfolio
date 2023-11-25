import { Container, Row, Col } from "react-bootstrap";
import { MailchimpForm } from "./MailchimpForm";
import logo from "../assests/img/logo.png";
import navIcon1 from '../assests/img/nav-icon1.svg';
import navIcon2 from '../assests/img/nav-icon2.svg';
import navIcon3 from '../assests/img/nav-icon3.svg';


export const Footer = () =>{
    <footer className="footer">
        <Container>
            <Row className="align-items-center">
                <MailchimpForm/>
                <Col sm={6}>
                    <img src={logo} alt="" />
                </Col>
                <Col sm={6} className="text-center text-sm-end">
                    <div className="social-icons">
                        <a href="https://www.linkedin.com/in/abdeali-kota-wala-039155242"><img src={navIcon1} alt="" /></a>
                        <a href="#"><img src={navIcon2} alt="" /></a>
                        <a href="https://instagram.com/abdealiamiruddin?igshid=NzZlODBkYWE4Ng=="><img src={navIcon3} alt="" /></a>
                    </div>
                    <p>Copyright 2023. All Rights Reserved. Thankyou! Abdeali Kota Wala</p>
                </Col>
            </Row>
        </Container>
    </footer>
}