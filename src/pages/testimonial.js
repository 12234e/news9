import * as React from "react";
import Layout from "../components/layout";
import { StaticImage } from "gatsby-plugin-image";
import Seo from "../components/seo";
import "./testimonial.css"

const TestimonialPage = () => {
  return (
    <Layout pageTitle="Testimonial">
      <div className="testimonial-page">
        <h1>My Projects</h1>
        <div data-sal="slide-up" data-sal-duration="1000" data-sal-delay="300">
          <h2>Project 1</h2>
          <StaticImage
            className="my-image"
            alt="Project 1 image"
            src="../images/web.jpeg"
            width={300}
            height={200}
          />
          <p>
            As a web developer, I have experience building responsive websites
            with modern design. This project showcases my ability to create
            visually appealing and functional websites.
          </p>
        </div>
        <div data-sal="slide-up" data-sal-duration="1000" data-sal-delay="300">
          <h2>Project 2</h2>
          <StaticImage
            className="my-image"
            alt="Project 2 image"
            src="../images/web1.jpeg"
            width={300}
            height={200}
          />
          <p>
            In this project, I developed a custom application to solve a specific
            problem. My experience with various coding languages and frameworks
            allowed me to create a solution that met the needs of the client.
          </p>
        </div>
        <div data-sal="slide-up" data-sal-duration="1000" data-sal-delay="300">
          <h2>Project 3</h2>
          <StaticImage
            className="my-image"
            alt="Project 3 image"
            src="../images/web2.jpeg"
            width={300}
            height={200}
          />
          <p>
            This project involved integrating various technologies to create a
            seamless user experience. My knowledge of APIs and other tools allowed
            me to create a smooth and intuitive interface for users.
          </p>
        </div>
        <div data-sal="slide-up" data-sal-duration="1000" data-sal-delay="300">
          <h2>Project 4</h2>
          <StaticImage
            className="my-image"
            alt="Project 4 image"
            src="../images/web3.jpeg"
            width={300}
            height={200}
          />
          <p>
            In this project, I used my skills in front-end development to create
            an engaging and interactive website. My knowledge of HTML, CSS, and
            JavaScript allowed me to build a site that was both visually appealing
            and easy to use.
          </p>
        </div>
        <div data-sal="slide-up" data-sal-duration="1000" data-sal-delay="300">
          <h2>Project 5</h2>
          <StaticImage
            className="my-image"
            alt="Project 5 image"
            src="../images/web4.jpeg"
            width={300}
            height={200}
          />
          <p>
            This project involved building a complex web application with multiple
            features and functionalities. My experience with back-end development
            and database management allowed me to create a robust and scalable
            solution.
          </p>
        </div>
      </div>
    </Layout>
  );
};
export const Head = () => <Seo title="Testimonial page" />;

export default TestimonialPage;
