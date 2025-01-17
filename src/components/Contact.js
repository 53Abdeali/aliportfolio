import { useState } from "react";
import { Container, Row, Col } from "react-bootstrap";
import "react-animations";
import TrackVisibility from "react-on-screen";
import axios from "axios";

export const Contact = () => {
  const details = {
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    message: "",
  };

  const [formDetails, setFormDetails] = useState(details);
  const [buttonText, setButtonText] = useState("Send");
  const [errors, setErrors] = useState({});

  const onFormUpdate = (category, value) => {
    setFormDetails({
      ...formDetails,
      [category]: value,
    });
  };

  const validateForm = () => {
    let tempErrors = {};
    if (!formDetails.firstName)
      tempErrors.firstName = "First Name is Required!";
    if (!formDetails.lastName) tempErrors.lastName = "Last Name is Required!";
    if (!formDetails.email) tempErrors.email = "Email is Required!";
    if (!formDetails.phone) tempErrors.phone = "Phone Number is Required!";
    if (!formDetails.message) tempErrors.message = "Please enter your message!";

    setErrors(tempErrors);
    return Object.keys(tempErrors).length === 0;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!validateForm()) {
      return;
    } else {
      try {
        await axios.post("https://aliportfolio.onrender.com/api/contact", formDetails);
        setButtonText("Sending...");
        alert("Message Sent Successfully!");
        setFormDetails({
          firstName: "",
          lastName: "",
          email: "",
          phone: "",
          message: "",
        });
      } catch (err) {
        console.log("Error sending message!", err);
        alert("Error sending message");
      }
    }
  };

  return (
    <section className="contact" id="connect">
      <Container>
        <Row className="align-items-center">
          <Col md={6}>
            {/* <TrackVisibility>
              {({ isVisible }) => (
                <img
                  className={
                    isVisible ? "animate__animated animate__zoomIn" : ""
                  }
                  src={contact}
                  alt="Contact Us"
                />
              )} */}
            {/* </TrackVisibility> */}
          </Col>
          <Col md={6}>
            <TrackVisibility>
              {({ isVisible }) => (
                <div
                  className={
                    isVisible ? "animate__animated animate__fadeIn" : ""
                  }
                >
                  <h2>Get in Touch</h2>
                  <form onSubmit={handleSubmit} action="">
                    <Row>
                      <Col sm={6} className="px-1">
                        <input
                          type="text"
                          value={formDetails.firstName}
                          placeholder="First Name"
                          onChange={(e) =>
                            onFormUpdate("firstName", e.target.value)
                          }
                        />
                        {errors.firstName && <p className="error">{errors.firstName}</p>} 
                      </Col>
                      <Col sm={6} className="px-1">
                        <input
                          type="text"
                          value={formDetails.lastName}
                          placeholder="Last Name"
                          onChange={(e) =>
                            onFormUpdate("lastName", e.target.value)
                          }
                        />
                        {errors.lastName && <p className="error">{errors.lastName}</p>}
                      </Col>
                      <Col sm={6} className="px-1">
                        <input
                          type="email"
                          value={formDetails.email}
                          placeholder="Email Address"
                          onChange={(e) =>
                            onFormUpdate("email", e.target.value)
                          }
                        />
                        {errors.email && <p className="error">{errors.email}</p>}
                      </Col>
                      <Col sm={6} className="px-1">
                        <input
                          type="tel"
                          value={formDetails.phone}
                          placeholder="Phone Number"
                          onChange={(e) =>
                            onFormUpdate("phone", e.target.value)
                          }
                        />
                        {errors.phone && <p className="error">{errors.phone}</p>}
                      </Col>
                      <Col sm={6} className="px-1">
                        <textarea
                          row="6"
                          value={formDetails.message}
                          placeholder="Message"
                          onChange={(e) =>
                            onFormUpdate("message", e.target.value)
                          }
                        >{errors.message && <p className="error">{errors.message}</p>}</textarea>
                        <button type="submit">
                          <span>{buttonText}</span>
                        </button>
                      </Col>
                      {/* {status.message && (
                        <Col>
                          <p
                            className={
                              status.success === false ? "danger" : "success"
                            }
                          >
                            {status.message}
                          </p>
                        </Col>
                      )} */}
                    </Row>
                  </form>
                </div>
              )}
            </TrackVisibility>
          </Col>
        </Row>
      </Container>
    </section>
  );
};
