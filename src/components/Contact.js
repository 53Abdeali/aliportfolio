import { useEffect, useState } from "react";
import { Container, Row, Col } from "react-bootstrap";
import contact from '../assests/img/contact-img.svg'

export const Contact = () =>{
    const details ={
        firstName:"",
        lastName:"",
        email:"",
        phone:"",
        message:"",
    }

    const [formDetails, setFormDetails] = useState(details);

    const [buttonText, setButtonText] = useState('send');

    const [status, setStatus] = useState({});

    const onFormUpdate = (category, value) =>{
        setFormDetails({
            ...formDetails,
            [category]:value
        })
    }

    const Submit = async(e) =>{
        e.preventDefault();
        setButtonText('Sending...');
        let response = await fetch("http://localhost:5000/contact",{
        method: "POST",
        headers:{
            "Content-Type":"Application/json;charset=utf-8",
        },

        body: JSON.stringify(formDetails),
    });
    setButtonText ('Send');
    let result = response.json();
    setFormDetails(details);

    if(result.code===200){
        setStatus({success:true, message:"Message Sent Successfully"});
    }else{
        setStatus({success:false, message:"Something went wrong, please try again later"});
    }
};


    return(
        <section className="contact" id="connect">
            <Container>
                <Row className="align-items-center">
                    <Col md={6}>
                        <img src={contact} alt="Contact Us" />
                    </Col>
                    <Col md={6}>
                        <h2>Get in Touch</h2>
                        <form onSubmit={Submit} action="">
                            <Row>
                                <Col sm={6} className="px-1">
                                    <input type="text"  value={formDetails.firstName} placeholder="First name" onChange={(e)=> onFormUpdate('firstname', e.target.value)}/>
                                </Col>
                                <Col sm={6} className="px-1">
                                    <input type="text"  value={formDetails.lastName} placeholder="Last name" onChange={(e)=> onFormUpdate('lastname', e.target.value)}/>
                                </Col>
                                <Col sm={6} className="px-1">
                                    <input type="email"  value={formDetails.email} placeholder="Email Address" onChange={(e)=> onFormUpdate('email', e.target.value)}/>
                                </Col>
                                <Col sm={6} className="px-1">
                                    <input type="tel"  value={formDetails.phone} placeholder="Phone Number" onChange={(e)=> onFormUpdate('phone', e.target.value)}/>
                                </Col>
                                <Col sm={6} className="px-1">
                                    <textarea row="6" value={formDetails.message} placeholder="Message" onChange={(e)=> onFormUpdate('message', e.target.value)}></textarea>
                                    <button type="submit"><span>{buttonText}</span></button>
                                </Col>
                                {
                                    status.message &&
                                    <Col>
                                        <p className={status.success ===false ? "danger":"success"}>{status.message}</p>
                                    </Col>
                                }
                            </Row>
                        </form>
                    </Col>
                </Row>
            </Container>
        </section>
    )
}