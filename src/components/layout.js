import * as React from "react";
import { useState, useEffect } from "react";
import { useStaticQuery, graphql } from "gatsby";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faHome,
  faUser,
  faEnvelope,
  faBlog,
  faBars,
} from "@fortawesome/free-solid-svg-icons";
import AniLink from "gatsby-plugin-transition-link/AniLink";
import { TransitionPortal } from "gatsby-plugin-transition-link";
import {
  container,
  heading,
  navLinks,
  navLinkItem,
  navLinkText,
  header,
  footer,
  footerContent,
  footerLink,
  siteTitle,
  menuButton,
} from "./layout.module.css";

const Layout = ({ pageTitle, children }) => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setIsLoading(false);
  }, []);

  const data = useStaticQuery(graphql`
    query {
      site {
        siteMetadata {
          title
        }
      }
    }
  `);
  return (
    <div className={container}>
      <TransitionPortal>
        {isLoading ? (
          <div
            style={{
              position: "fixed",
              background: "black",
              top: 0,
              left: 0,
              right: 0,
              bottom: 0,
              zIndex: 10,
            }}
          />
        ) : null}
      </TransitionPortal>
      <header className={siteTitle}>{data.site.siteMetadata.title}</header>
      <button className={menuButton} onClick={() => setMenuOpen(!menuOpen)}>
        <FontAwesomeIcon icon={faBars} />
      </button>
      <nav className={header} style={{ display: menuOpen ? "block" : "none" }}>
        <ul className={navLinks}>
          <li className={navLinkItem}>
            <AniLink paintDrip to="/" className={navLinkText} duration={1}>
              <FontAwesomeIcon icon={faHome} />
            </AniLink>
          </li>
          <li>
            <AniLink paintDrip to="/about" className={navLinkText} duration={1}>
              <FontAwesomeIcon icon={faUser} />
            </AniLink>
          </li>
          <li>
            <AniLink
              paintDrip
              to="/contact"
              className={navLinkText}
              duration={1}
            >
              <FontAwesomeIcon icon={faEnvelope} />
            </AniLink>
          </li>
          <li>
            <AniLink paintDrip to="/blog" className={navLinkText} duration={1}>
              <FontAwesomeIcon icon={faBlog} />
            </AniLink>
          </li>
        </ul>
      </nav>
      <main style={{ flex: 1 }}>
        <h1 className={heading}>{pageTitle}</h1>
        {children}
      </main>
      <footer className={footer}>
        <div className={footerContent}>
          <p>Email: contact@example.com</p>
          <p>Phone: +1-234-567-8901</p>
          <AniLink paintDrip to="/" className={footerLink} duration={1}>
            Go^ Back to Home
          </AniLink>
        </div>
      </footer>
    </div>
  );
};

export default Layout;
