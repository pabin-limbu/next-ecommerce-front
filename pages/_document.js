import { Html, Head, Main, NextScript } from "next/document";

import { Helmet } from "react-helmet";
export default function Document() {
  return (
    <Html lang="en">
      <Head />
      <Helmet>
        <meta charSet="utf-8" />
        <title>My Title</title>
        <link
          rel="canonical"
          href="https://fonts.googleapis.com/css2?family=Poppins:wght@400;500;700&display=swap"
        />
      </Helmet>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
