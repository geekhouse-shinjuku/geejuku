import { css } from "hono/css";
import { createRoute } from "honox/factory";
import MainNav from "../components/main-nav";
import Header from "../components/header";
import Info from "../components/info";
import Detail from "../components/detail";
import GeejukuMap from "../components/geejuku-map";
import Footer from "../components/footer";
import { FC } from "hono/jsx";

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

const Posts: FC = () => {
  const posts = import.meta.glob<{
    frontmatter: { title: string; date: string; published: boolean };
  }>("./posts/*.mdx", { eager: true });
  const entries = Object.entries(posts).filter(
    ([_, module]) => module.frontmatter.published
  );

  return (
    <div class="mt-16">
      <ul class="mt-10">
        {entries.map(([id, module]) => (
          <li class="text-lg mt-2 md:mt-1">
            <span class="tabular-nums tnum">{module.frontmatter.date}: </span>
            <br class="block md:hidden" />
            <a
              class="text-blue-600 underline"
              href={`${id.replace(/\.mdx$/, "")}`}
            >
              {module.frontmatter.title}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
};
