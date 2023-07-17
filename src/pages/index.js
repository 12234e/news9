import * as React from "react";
import Layout from "../components/layout";
import { StaticImage } from "gatsby-plugin-image";
import Seo from "../components/seo";
import "./index.css";

const IndexPage = () => {
  return (
    <Layout pageTitle="Home Page">
      <p>I'm making this by following the Gatsby Tutorial.</p>
      <div className="container">
        <section>
          <h1>Section 1</h1>
          <div>
            <p>This is some content within a div element.</p>
          </div>
        </section>
        <section>
          <h1>Section 2</h1>
          <div>
            <p>This is some content within a div element.</p>
          </div>
        </section>
        <section>
          <h1>Section 3</h1>
          <div>
            <p>This is some content within a div element.</p>
          </div>
        </section>
        <section>
          <h1>Section 4</h1>
          <div>
            <p>This is some content within a div element.</p>
          </div>
        </section>
        <section>
          <h1>Section 5</h1>
          <div>
            <p>This is some content within a div element.</p>
          </div>
        </section>
      </div>
      <StaticImage
        className="my-image"
        alt="Clifford, a reddish-brown pitbull, posing on a couch and looking stoically at the camera"
        src="../images/dog.jpg"
        width={300}
        height={200}
      />
    </Layout>
  );
};
export const Head = () => (
  <Seo
    title="Home Page"
    description="Stay up-to-date with the latest headlines and breaking news from News9Main. Our top stories cover current events from around the world."
  />
);

export default IndexPage;
