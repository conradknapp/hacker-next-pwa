import Document, { Head, Main, NextScript } from "next/document";

export default class MyDocument extends Document {
  render() {
    return (
      <html lang="en-US">
        <Head>
          <meta
            name="viewport"
            content="width=device-width, initial-scale=1.0"
          />

          <link rel="manifest" href="/static/manifest.webmanifest" />

          <meta name="theme-color" content="#f60" />
          <link rel="shortcut icon" href="/static/icons/icon-512x512.png" />
          <link rel="apple-touch-icon" href="/static/icons/icon-512x512.png" />
          <meta name="apple-mobile-web-app-title" content="HackerNext" />
          <meta
            name="apple-mobile-web-app-status-bar-style"
            content="default"
          />
          <meta name="apple-mobile-web-app-capable" content="yes" />
          <meta name="mobile-web-app-capable" content="yes" />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </html>
    );
  }
}
