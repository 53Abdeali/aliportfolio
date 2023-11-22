import { useEffect, useState } from 'react';
import {Container, Row, Col} from 'react-bootstrap';
import { ArrowRightCircle } from 'react-bootstrap-icons';
import headerImg from "../assests/img/header-img.svg"

export const Banner = () =>{

    const [loopNum, setLoopNum] = useState(0);
    const [isDeleting, setIsDeleting] = useState(false);
    const toRotate = ["Web developer", "Java Developer", "MySQL Developer" ];
    const [text , setText] = useState("");
    const [delta, setDelta] = useState(300 - Math.random() * 100);
    const period = 2000;

    useEffect(() => {
        let ticker = setInterval(() =>{
            tick();
        }, delta)

        return () => {clearInterval(ticker)};
    }, [text])

    const tick =() =>{
        let i = loopNum % toRotate.length;
        let ft = toRotate[i];
        let updated = isDeleting ? ft.substring(0, text.length - 1) : ft.substring(0, text.length +1); 

        setText(updated);

        if (isDeleting){
            setDelta(prevDelta => prevDelta/2);
        }

        if (!isDeleting && updated===ft){
            setIsDeleting(true);
            setDelta(period);
        }else if (isDeleting && updated=== ""){
            setIsDeleting(false);
            setLoopNum(loopNum + 1);
            setDelta(500);
        }
    }

    return(
        <section className="banner" id="home">
           <Container>
                <Row className='align-items-center'>
                    <Col xs={12} md={6} xl={7} >
                        <span className="tagline">Welcome to my Portfolio</span>
                        <h1>{`Hi I'm Abdeali`}<br/> <span className="wrap">{text}</span></h1>
                        <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Perspiciatis vel culpa inventore, recusandae animi ut consectetur ratione veniam dignissimos blanditiis quidem dolorem reiciendis quis odio amet nihil est, voluptates voluptas! Placeat illo maxime autem sed? Obcaecati, asperiores dolorem culpa soluta eveniet laboriosam rerum nemo cumque sequi eligendi ducimus, ut quasi.</p>
                        <button onClick={()=> console.log('connect')}>Let's Connect <ArrowRightCircle size={25}></ArrowRightCircle></button>
                    </Col>
                    <Col xs={12} md={6} xl={5} >
                        <img src={headerImg} alt="header" srcset="" />
                    </Col>
                </Row>
           </Container> 
        </section>
    )
}