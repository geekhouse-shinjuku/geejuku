import { css } from "hono/css";
import { createRoute } from "honox/factory";
import MainNav from "../components/main-nav";
import Header from "../components/header";
import Footer from "../components/footer";
import { FC } from "hono/jsx";
import { SideBar } from "../components/sidebar";

const className = css`
  #inner-container {
    display: grid;
    grid-template-columns: 720px 6px 320px;
    gap: 10px;
    margin: 0 auto;
  }

  /* スマートフォン向けのスタイル */
  @media screen and (max-width: 767px) {
    #inner-container {
      grid-template-columns: 1fr; /* 1列にスタック */
    }

    .border {
      display: none; /* ボーダーを非表示に */
    }

    .main,
    .sidebar {
      width: auto; /* 横幅いっぱいに広げる */
    }
  }
`;

export default createRoute((c) => {
  return c.render(
    <div class={className}>
      <MainNav />
      <Header />
      <div class="container">
        <div id="inner-container">
          <div class="main px-6">
            <div class="main-about">
              <h1 class="text-2xl font-bold pt-12 pb-2">
                ギークハウス新宿について
              </h1>
              <p>
                広いリビングと好立地を活かしてイベントが多いです。勉強会、もくもく会、食べ物イベントなど。交流が好きな人にオススメ
              </p>
            </div>
            <h2 class="pt-12 text-2xl font-bold">最新記事</h2>
            <Posts />
          </div>
          <div class="my-6 border-l border-gray-200"></div>
          <div class="sidebar px-4">
            <SideBar />
          </div>
        </div>
      </div>
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
    <ul class="mt-4">
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
  );
};
