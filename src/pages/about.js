import * as React from 'react'
import Layout from '../components/layout'
import Seo from '../components/seo'
import "./about.css"

const AboutPage = () => {
  return (
    <Layout pageTitle="About Us">
      <div className="about-page">
        <h1>About Us</h1>
        <div className="scroll">
          <h2>Our Mission</h2>
          <p>
            Our mission is to provide accurate and up-to-date news and information to our readers. We strive to deliver high-quality journalism that informs, educates, and engages our audience.
          </p>
        </div>
        <div className="scroll">
          <h2>Our Team</h2>
          <p>
            Our team consists of experienced journalists, editors, and web developers who are passionate about delivering the best possible experience to our readers. We work tirelessly to bring you the latest news and analysis from around the world.
          </p>
        </div>
        <div className="scroll">
          <h2>Our Services</h2>
          <p>
            In addition to our news coverage, we also offer web development services. Our team of skilled developers can create custom websites and applications that meet your specific needs. We use the latest technologies and best practices to deliver high-quality and reliable solutions.
          </p>
        </div>
        <div className="scroll">
          <h2>Our Commitment</h2>
          <p>
            We are committed to providing high-quality services to our clients. Our team of experienced professionals is dedicated to delivering exceptional results on time and within budget. We strive to exceed our clients' expectations and build long-lasting relationships with them.
          </p>
        </div>
        <div className="scroll">
          <h2>Contact Us</h2>
          <p>
            If you're looking for a reliable news source or need help with web development, look no further than our agency. Contact us today to learn more about our services and how we can help you achieve your goals.
          </p>
        </div>
      </div>

      {/* Add this script block to create an Intersection Observer */}
      <script
        dangerouslySetInnerHTML={{
          __html: `
            // Create an Intersection Observer
            const observer = new IntersectionObserver(entries => {
              entries.forEach(entry => {
                // If the element is in view, add the .scroll class to it
                if (entry.isIntersecting) {
                  entry.target.classList.add('scroll');
                }
              });
            });

            // Observe all elements with the .scroll class
            document.querySelectorAll('.scroll').forEach(el => observer.observe(el));
          `,
        }}
      />
    </Layout>
  )
}

export const Head = () => (
  <Seo
    title="About Me"
    description="Stay up-to-date with the latest headlines and breaking news from News9Main. Our top stories cover current events from around the world."
  />
);

export default AboutPage;
