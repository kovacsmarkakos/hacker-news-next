import Document, { Html, Head, Main, NextScript } from 'next/document';

class MyDocument extends Document {
  render() {
    return (
      <Html lang="en">
        <Head>
          <meta
            name="description"
            content="Hacker News Next is a news reader app, built with Next.js. Fetches data from the Hacker News API, with server-side rendering."
          />
          <link rel="icon" href="/favicon.ico" />

          <link
            rel="apple-touch-icon"
            sizes="180x180"
            href="/public/icons/apple-touch-icon.png"
          />
          <link
            rel="icon"
            type="image/png"
            sizes="32x32"
            href="/public/icons/favicon-32x32.png"
          />
          <link
            rel="icon"
            type="image/png"
            sizes="16x16"
            href="/public/icons/favicon-16x16.png"
          />
          <link rel="manifest" href="/public/icons/site.webmanifest" />
          <link rel="shortcut icon" href="/public/icons/favicon.ico" />
          <meta name="msapplication-TileColor" content="#212121" />
          <meta
            name="msapplication-config"
            content="/public/icons/browserconfig.xml"
          />
          <meta name="theme-color" content="#ffffff" />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

export default MyDocument;
