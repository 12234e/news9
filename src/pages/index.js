import * as React from "react";
import Layout from "../components/layout";
import { StaticImage } from "gatsby-plugin-image";
import Seo from "../components/seo";
import { Link } from "gatsby";
import "./index.css";

const IndexPage = () => {
  return (
    <Layout pageTitle="Home Page">
      <div className="index-page">
        <p className="intro">
          Welcome to our blog! We're excited to share our thoughts and ideas
          with you on a variety of topics, from lifestyle and food to
          international news and events. Take a look around and let us know what
          you think.
        </p>

        <div className="container">
          <section className="lifestyle-section">
            <h1>
              <Link to="/blog/another-post/">Lifestyle</Link>
            </h1>
            <div>
              <p>
                Discover the latest trends and tips on living your best life.
                From fashion and beauty to health and wellness, our Lifestyle
                blog has it all.
              </p>
              <StaticImage
                className="my-image"
                alt="Clifford, a reddish-brown pitbull, posing on a couch and looking stoically at the camera"
                src="../images/dog.jpg"
                width={300}
                height={200}
              />
            </div>
          </section>
          <section className="food-section">
            <h1>
              <Link to="/blog/my-first-post/">Food related</Link>
            </h1>
            <div>
              <p>
                Satisfy your cravings with our delicious recipes and foodie
                adventures. Explore new flavors and cuisines with our Food
                related blog.
              </p>
              <StaticImage
                className="my-image"
                alt="Clifford, a reddish-brown pitbull, posing on a couch and looking stoically at the camera"
                src="../images/dog.jpg"
                width={300}
                height={200}
              />
            </div>
          </section>
          <section className="international-section">
            <h1>
              <Link to="/blog/new-post/">International</Link>
            </h1>
            <div>
              <p>
                Stay up-to-date with the latest news and events from around the
                world. Our International blog covers politics, culture, and
                more.
              </p>
              <StaticImage
                className="my-image"
                alt="Clifford, a reddish-brown pitbull, posing on a couch and looking stoically at the camera"
                src="../images/dog.jpg"
                width={300}
                height={200}
              />
            </div>
          </section>
          <section className="saudi-arabia-section">
            <h1>
              <Link to="/blog/yet-another-post/">Saudi Arabia</Link>
            </h1>
            <div>
              <p>
                Get the inside scoop on what's happening in Saudi Arabia. From
                local news and events to travel and culture, our Saudi Arabia
                blog has you covered.
              </p>
              <StaticImage
                className="my-image"
                alt="Clifford, a reddish-brown pitbull, posing on a couch and looking stoically at the camera"
                src="../images/dog.jpg"
                width={300}
                height={200}
              />
            </div>
          </section>
          <section className="games-section">
            <h1>
              <Link to="/blog/games/">Games</Link>
            </h1>
            <div>
              <p>
                Get your game on with our Games blog. From reviews and previews
                to tips and tricks, we've got everything you need to level up
                your gaming experience.
              </p>
              <StaticImage
                className="my-image"
                alt="Clifford, a reddish-brown pitbull, posing on a couch and looking stoically at the camera"
                src="../images/dog.jpg"
                width={300}
                height={200}
              />
            </div>
          </section>
        </div>
      </div>
    </Layout>
  );
};

export const Head = () => (
  <Seo
    title="News9Main - Latest Headlines and Breaking News"
    description="Stay up-to-date with the latest headlines and breaking news from News9Main. Our top stories cover current events from around the world, including politics, culture, lifestyle, food, and more."
  />
);

export default IndexPage;
