import { Style } from "hono/css";
import { jsxRenderer } from "hono/jsx-renderer";
import { Script } from "honox/server";
import styles from "../style.css?url";
import { html } from "hono/html";

export default jsxRenderer(({ children, title, ogImage }) => {
  const hostUrl = import.meta.env.PROD
    ? "https://blog.geejuku.tokyo/"
    : "http://localhost:5173/";
  const ogImgTitle = title ? encodeURIComponent(title) : "";
  const ogTitle = title
    ? title + " | ぎーじゅく@渋谷、新宿を拠点としたギークハウス"
    : "ぎーじゅく@渋谷、新宿を拠点としたギークハウス";
  ogImage = ogImage ? ogImage : hostUrl + "api/ogimg?title=" + ogImgTitle;
  return (
    <html lang="jp">
      <head>
        {import.meta.env.PROD ? <GoogleAnalytics /> : null}
        <meta charset="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta property="og:title" content={ogTitle} />
        <meta property="og:image" content={ogImage} />
        <meta
          property="og:site_name"
          content="ぎーじゅく@渋谷、新宿を拠点としたギークハウス"
        />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:image" content={ogImage} />

        <title>{ogTitle}</title>

        <link rel="icon" href="/static/favicon.jpg" type="image/jpeg" />
        <link
          href="https://fonts.googleapis.com/css?family=Open+Sans:300italic,400italic,600italic,700italic,800italic,400,300,600,700,800"
          rel="stylesheet"
          type="text/css"
        />
        <link
          href="https://fonts.googleapis.com/css?family=Merriweather:400,300,300italic,400italic,700,700italic,900,900italic"
          rel="stylesheet"
          type="text/css"
        />
        <link
          rel="stylesheet"
          href="https://maxcdn.bootstrapcdn.com/font-awesome/4.4.0/css/font-awesome.min.css"
        />

        <link href={styles} rel="stylesheet" />
        <Script src="/app/client.ts" async />
        <Style />
      </head>
      <body>{children}</body>
    </html>
  );
});

const GoogleAnalytics = () => {
  return (
    <>
      {html`
        <script
          async
          src="https://www.googletagmanager.com/gtag/js?id=G-7W7F0X6LN5"
        />
        <script>
          window.dataLayer = window.dataLayer || [];
          function gtag() {
            dataLayer.push(arguments);
          }
          gtag("js", new Date());

          gtag("config", "G-7W7F0X6LN5");
        </script>
      `}
    </>
  );
};
