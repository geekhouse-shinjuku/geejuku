import pages from "@hono/vite-cloudflare-pages";
import mdx from "@mdx-js/rollup";
import honox from "honox/vite";
import client from "honox/vite/client";
import rehypeHighlight from "rehype-highlight";
import remarkFrontmatter from "remark-frontmatter";
import remarkMdxFrontmatter from "remark-mdx-frontmatter";
import { defineConfig } from "vite";
import ssg from "@hono/vite-ssg";
const entry = "./app/server.ts";

export default defineConfig(({ mode }) => {
  if (mode === "client") {
    return {
      plugins: [client()],
      build: {
        rollupOptions: {
          input: ["./app/style.css"],
          output: {
            assetFileNames: "app/[name].[ext]",
          },
        },
      },
    };
  } else {
    return {
      plugins: [
        ssg({ entry }),
        honox(),
        pages(),
        mdx({
          jsxImportSource: "hono/jsx",
          remarkPlugins: [remarkFrontmatter, remarkMdxFrontmatter],
          rehypePlugins: [rehypeHighlight],
        }),
      ],
      build: {
        assetsDir: "static",
        ssrEmitAssets: true,
      },
    };
  }
});
