import { jsxRenderer } from "hono/jsx-renderer";
import MainNav from "../../components/main-nav";
import Header from "../../components/header";
import { SideBar } from "../../components/sidebar";
import { css } from "hono/css";

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
export default jsxRenderer(({ children, Layout, frontmatter }) => {
  const _title = `${frontmatter?.title} | Blog Name`;

  return (
    <Layout title={_title} description={frontmatter?.description}>
      <div class={className}>
        <MainNav />
        <Header />
        <div class="container">
          <div id="inner-container">
            <div class="main px-6">
              <div class="markdown">{children}</div>
            </div>
            <div class="my-6 border-l border-gray-200"></div>
            <div class="sidebar px-4">
              <SideBar />
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
});
