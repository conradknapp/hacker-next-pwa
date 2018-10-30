import Head from "next/head";
import Link from "next/link";

const Layout = ({ title, description, children, showBackButton }) => (
  <div>
    <Head>
      <title>{title}</title>
      <meta name="description" content={description} />
    </Head>

    <div className="container">
      <nav>
        <Link href="/">
          <a>
            {showBackButton && <span className="back">&#x2B05;</span>}
            <span className="title">Hacker Next</span>
          </a>
        </Link>
      </nav>

      {children}
    </div>

    <style jsx>{`
      .container {
        max-width: 808px;
        margin: 0 auto;
        background: #f6f6ef;
      }
      nav {
        background: #f60;
        font-weight: bold;
      }
      nav a {
        color: #fff;
        text-decoration: none;
      }
      nav .back {
        display: inline-block;
        height: 1em;
        width: 1em;
        font-weight: 300;
        padding: 1em 0 1em 1em;
        text-align: center;
      }
      nav .title {
        color: #fff;
        display: inline-block;
        padding: 1em;
      }
    `}</style>

    <style jsx global>{`
      body {
        background: #fff;
        font-family: Verdana, Geneva, sans-serif;
      }
    `}</style>
  </div>
);

export default Layout;
