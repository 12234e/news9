import * as React from "react";
import { useState } from "react";
import { Link, useStaticQuery, graphql } from 'gatsby';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHome, faUser, faEnvelope, faBlog, faCommentDots, faBars } from '@fortawesome/free-solid-svg-icons'

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
  menuButton
} from "./layout.module.css";

const Layout = ({ pageTitle, children }) => {
  const [menuOpen, setMenuOpen] = useState(false);
  const data = useStaticQuery(graphql`
    query {
      site {
        siteMetadata {
          title
        }
      }
    }
  `)
  return (
    <div className={container}>
      <header className={siteTitle}>{data.site.siteMetadata.title}</header>
      <button className={menuButton} onClick={() => setMenuOpen(!menuOpen)}>
        <FontAwesomeIcon icon={faBars} />
      </button>
      <nav className={header} style={{ display: menuOpen ? 'block' : 'none' }}>
        <ul className={navLinks}>
          <li className={navLinkItem}>
            <Link to="/" className={navLinkText}>
              <FontAwesomeIcon icon={faHome} />
            </Link>
          </li>
          <li>
            <Link to="/about" className={navLinkText}>
              <FontAwesomeIcon icon={faUser} />
            </Link>
          </li>
          <li>
            <Link to="/contact" className={navLinkText}>
              <FontAwesomeIcon icon={faEnvelope} />
            </Link>
          </li>
          <li>
            <Link to="/blog" className={navLinkText}>
              <FontAwesomeIcon icon={faBlog} />
            </Link>
          </li>
          <li>
            <Link to="/testimonial" className={navLinkText}>
              <FontAwesomeIcon icon={faCommentDots} />
            </Link>
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
          <Link to="/" className={footerLink}>Go^ Back to Home</Link>
        </div>
      </footer>
    </div>
  );
};

export default Layout;
