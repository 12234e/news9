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
        <section>
          <h1>Section 6</h1>
          <div>
            <p>This is some content within a div element.</p>
          </div>
        </section>
        <section>
          <h1>Section 7</h1>
          <div>
            <p>This is some content within a div element.</p>
          </div>
        </section>
        <section>
          <h1>Section 8</h1>
          <div>
            <p>This is some content within a div element.</p>
          </div>
        </section>
        <section>
          <h1>Section 9</h1>
          <div>
            <p>This is some content within a div element.</p>
          </div>
        </section>
        <section>
          <h1>Section 10</h1>
          <div>
            <p>This is some content within a div element.</p>
          </div>
        </section>
      </div>
      <StaticImage
        alt="Clifford, a reddish-brown pitbull, posing on a couch and looking stoically at the camera"
        src="../images/dog.jpg"
        width={300}
        height={200}
      />
    </Layout>
  );
};
export const Head = () => <Seo title="Home Page" />;
export default IndexPage;
