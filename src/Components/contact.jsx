import { useState } from "react";
import emailjs from "emailjs-com";
import { Row,Col } from "reactstrap";

function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    emailjs
      .sendForm(
        "service_m25f3tt",
        "template_w6a97fp",
        e.target,
        "B72Q7UK9dWmb_YJJJ"
      )
      .then(() => {
        alert("Message sent successfully!");
        setFormData({ name: "", email: "", message: "" });
      })
      .catch(() => {
        alert("Failed to send message, please try again.");
      });
  };

  return (
    <div className="header">
      <div className="left">
        <Col className="mb-5">
        <Row>
          <h1>Lets Connect,</h1>
        </Row>
        <Row>
          <h5>
            Whether you have a question, a project idea, or just want to say
            hello. Feel free to drop me a message and I Will get back to you as
            soon as possible.
          </h5>
        </Row>
        </Col>
      </div>
      <div className="right ">
        <form onSubmit={handleSubmit} className="mr-5 p-5 form">
          <h5 className="align-items-center">Contact Me</h5>

          <div className="form-group">
            <label htmlFor="name">Name</label>
            <input
              type="text"
              className="form-control"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="email">Email</label>
            <input
              type="email"
              className="form-control"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="message">Message</label>
            <textarea
              className="form-control"
              id="message"
              name="message"
              rows="5"
              value={formData.message}
              onChange={handleChange}
              required
            ></textarea>
          </div>
          <button type="submit" className="btn btn-primary">
            Send
          </button>
        </form>
      </div>
    </div>
  );
}

export default Contact;
