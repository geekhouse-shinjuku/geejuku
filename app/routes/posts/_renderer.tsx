import { jsxRenderer } from "hono/jsx-renderer";
import MainNav from "../../islands/main-nav";
import Header from "../../components/header";
import { SideBar } from "../../components/sidebar";
import Footer from "../../components/footer";
import HeaderSp from "../../components/header-sp";

export default jsxRenderer(({ children, Layout, frontmatter }) => {
  const _title = `${frontmatter?.title} | Blog Name`;

  return (
    <Layout title={_title} description={frontmatter?.description}>
      <MainNav />
      <div class="pt-14">
        <div class="hidden md:block">
          <Header />
        </div>
        <div class="block md:hidden">
          <HeaderSp />
        </div>
        <div class="container mx-auto">
          <div class="inner-container">
            <div class="main px-6 py-12">
              <div class="text-zinc-500">{frontmatter?.date} </div>
              <div class="markdown">{children}</div>
            </div>
            <div class="my-6 border-l border-zinc-200"></div>
            <div class="sidebar px-4">
              <SideBar />
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </Layout>
  );
});
