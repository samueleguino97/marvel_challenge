import Document, { Html, Head, Main, NextScript } from "next/document";

class MyDocument extends Document {
  static async getInitialProps(ctx) {
    const initialProps = await Document.getInitialProps(ctx);
    return { ...initialProps };
  }

  render() {
    return (
      <Html lang="en-US">
        <Head>
          <meta charSet="utf-8" />
          <meta http-equiv="X-UA-Compatible" content="IE=edge" />

          <meta
            name="description"
            content="An app to search and filter your favorite marvel resources"
          />
          <meta name="keywords" content="marvel,challenge,search" />
          <link rel="manifest" href="/manifest.json" />
          <link
            href="/logo-black.png"
            rel="icon"
            type="image/png"
            sizes="16x16"
          />
          <link
            href="/logo-black.png"
            rel="icon"
            type="image/png"
            sizes="32x32"
          />
          <link rel="apple-touch-icon" href="/logo-black.png"></link>
          <meta name="theme-color" content="#317EFB" />
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
