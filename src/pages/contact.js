import * as React from "react";
import Layout from "../components/layout";
import Seo from "../components/seo";
import emailjs from "@emailjs/browser";
import { useRef, useState } from "react";
import { StaticImage } from "gatsby-plugin-image";
import { useSpring, animated } from "react-spring";
import "./contact.css";

const ContactPage = () => {
  const form = useRef();
  const [showAnimation, setShowAnimation] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const imageStyles = useSpring({
    from: { transform: "translateX(-100%)" },
    to: { transform: "translateX(0)" },
  });

  const formStyles = useSpring({
    from: { transform: "translateX(100%)" },
    to: { transform: "translateX(0)" },
  });

  const slideInStyles = useSpring({
    from: { transform: 'translateX(100%)' },
    to: { transform: 'translateX(0)' },
  });

  const sendEmail = (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    emailjs
      .sendForm(
        "service_2vica6h",
        "template_zjckmze",
        form.current,
        "U7Cf1FnwQaGRoLZ6U"
      )
      .then(
        (result) => {
          console.log(result.text);
          setShowAnimation(true);
          setIsSubmitting(false);
        },
        (error) => {
          console.log(error.text);
          setIsSubmitting(false);
        }
      );
  };
  return (
    <Layout pageTitle="Contact Us">
      <div className="contact-container">
        <animated.div className="contact-image" style={imageStyles}>
          <StaticImage
            alt="contact"
            src="../images/news9.jpg"
            width={300}
            height={200}
            style={{
              boxShadow: "0px 0px 10px 5px rgba(0, 0, 0, 0.2)",
              borderRadius: "10px",
            }}
          />
        </animated.div>
        <animated.div className="contact-form" style={formStyles}>
          <p>
            Welcome to my website! I'm so glad you're here. If you have any
            questions or comments, please don't hesitate to reach out using
            <br />
            the contact form below. I'd love to hear from you!
            <br />
            remember don't upload any file more then 50kb otherwise the file
            Cannot send to our database.
          </p>
          <form ref={form} onSubmit={sendEmail} enctype="multipart/form-data">
            <input
              type="text"
              name="user_name"
              id="user_name"
              placeholder="Name"
            />
            <input
              type="email"
              name="user_email"
              id="user_email"
              placeholder="Email"
            />
            <textarea
              name="message"
              id="message"
              placeholder="Message"
            ></textarea>
            <input type="file" name="my_file" id="my_file" />
            <input type="submit" value="Send" />
          </form>
        </animated.div>
      </div>
      {isSubmitting && (
        <div className="loading-animation">
          <p>Sending...</p>
        </div>
      )}
      {showAnimation && (
        <animated.div style={slideInStyles}>
          <div className="success-message">
            <p>Your message has been sent successfully✅</p>
          </div>
        </animated.div>
      )}
    </Layout>
  );
};

export const Head = () => (
  <Seo
    title="Contact page"
    description="Stay up-to-date with the latest headlines and breaking news from News9Main. Our top stories cover current events from around the world."
  />
);

export default ContactPage;
