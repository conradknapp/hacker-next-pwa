import Head from "next/head";
import Link from "next/link";

const Layout = ({ title, description, children, backButton }) => (
  <div>
    <Head>
      <title>{title}</title>
      <meta name="description" content={description} />
    </Head>

    <div className="container">
      <nav>
        <Link href="/">
          <a>
            {backButton && <span className="back-button">&#x2B05;</span>}
            <span className="main-title">Hacker Next</span>
          </a>
        </Link>
      </nav>

      {children}
    </div>

    <style jsx>{`
      .container {
        max-width: 800px;
        margin: 0 auto;
        background: #f6f6ef;
      }
      nav {
        background: #f60;
        padding: 1em;
      }
      nav > * {
        display: inline-block;
        color: black;
      }
      nav a {
        text-decoration: none;
      }
      nav .main-title {
        font-weight: bold;
      }
      nav .back-button {
        font-size: 0.9rem;
        padding-right: 1em;
      }
    `}</style>

    <style jsx global>{`
      body {
        background: white;
        font-family: Verdana, Geneva, sans-serif;
      }
    `}</style>
  </div>
);

export default Layout;
