import { css } from "hono/css";
import { createRoute } from "honox/factory";
import MainNav from "../islands/onboarding/main-nav";
import Header from "../islands/onboarding/header";
import Info from "../islands/onboarding/info";
import Detail from "../islands/onboarding/detail";
import GeejukuMap from "../islands/onboarding/geejuku-map";
import Footer from "../islands/onboarding/footer";

const className = css`
  font-family: sans-serif;
`;

export default createRoute((c) => {
  return c.render(
    <div class={className}>
      <MainNav />
      <Header />
      <Info />
      <Detail />
      <GeejukuMap />
      <Footer />
    </div>,
    { title: "ぎーじゅく@渋谷、新宿を拠点としたギークハウス" }
  );
});
