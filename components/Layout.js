import Head from "next/head";
import Link from "next/link";

const Layout = ({ title, description, children, showBackButton }) => (
  <div>
    <Head>
      <title>{title}</title>
      <meta name="description" content={description} />
      <meta
        lang="en-US"
        name="viewport"
        content="width=device-width, initial-scale=1.0"
      />

      <link rel="manifest" href="/static/manifest.webmanifest" />

      <meta name="theme-color" content="#ff6600" />
      <link rel="shortcut icon" href="/static/icons/icon-512x512.png" />
      <link rel="apple-touch-icon" href="/static/icons/icon-512x512.png" />
      <meta name="apple-mobile-web-app-title" content="HackerNext" />
      <meta name="apple-mobile-web-app-status-bar-style" content="default" />
      <meta name="apple-mobile-web-app-capable" content="yes" />
      <meta name="mobile-web-app-capable" content="yes" />
    </Head>

    <div className="container">
      <nav>
        <Link href="/">
          <a>
            {showBackButton && <span className="back">&lt;</span>}
            <span className="title">Hacker News</span>
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
