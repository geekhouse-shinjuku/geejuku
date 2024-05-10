import { createRoute } from "honox/factory";
import MainNav from "../islands/main-nav";
import Header from "../components/header";
import Footer from "../components/footer";
import { FC } from "hono/jsx";
import { SideBar } from "../components/sidebar";

export default createRoute((c) => {
  return c.render(
    <div>
      <MainNav />
      <div class="pt-14">
        <Header />
        <div class="container mx-auto">
          <div class="inner-container">
            <div class="main px-6">
              <div class="main-about">
                <h1 class="text-2xl font-bold pt-12 pb-2">
                  ギークハウス新宿について
                </h1>
                <p>
                  広いリビングと好立地を活かしてイベントが多いです。勉強会、もくもく会、食べ物イベントなど。交流が好きな人にオススメ
                </p>
              </div>
              <h2 class="pt-12 text-2xl font-bold">ブログ記事</h2>
              <Posts />
            </div>
            <div class="my-6 border-l border-gray-200"></div>
            <div class="sidebar px-4">
              <SideBar />
            </div>
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
  }>("./posts/*/*.mdx", { eager: true });
  const entries = Object.entries(posts).filter(
    ([_, module]) => module.frontmatter.published
  );

  return (
    <ul class="mt-4">
      {entries.map(([id, module]) => (
        <li class="text-lg mt-2 md:mt-1">
          <span class="text-zinc-900">{module.frontmatter.date}: </span>
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
