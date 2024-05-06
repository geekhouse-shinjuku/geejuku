import { createRoute } from "honox/factory";
import MainNav from "../islands/main-nav";
import Header from "../components/header";
import Info from "../components/info";
import Detail from "../components/detail";
import GeejukuMap from "../components/geejuku-map";
import Footer from "../components/footer";
import { FC } from "hono/jsx";

export default createRoute((c) => {
  return c.render(
    <div>
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
