import * as React from "react";
import { Link, useStaticQuery, graphql } from 'gatsby';

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
  siteTitle
} from "./layout.module.css";

const Layout = ({ pageTitle, children }) => {
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
      <nav className={header}>
        <ul className={navLinks}>
          <li className={navLinkItem}>
            <Link to="/" className={navLinkText}>
              Home
            </Link>
          </li>
          <li>
            <Link to="/about" className={navLinkText}>
              About
            </Link>
          </li>
          <li>
            <Link to="/contact" className={navLinkText}>
              Contact
            </Link>
          </li>
          <li>
            <Link to="/blog" className={navLinkText}>
              Blog
            </Link>
          </li>
          <li>
            <Link to="/testimonial" className={navLinkText}>
              Testimonial
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
export { footer, footerContent, footerLink };
export default Layout;
