import { ImageResponse } from "../lib/workers-og";

export const createOGPImage = async (c) => {
  const title = c.req.query("title") || "ぎーじゅくBlog";

  const html = `
      <div style="display: flex; justify-content: center; align-items: center; width: 1200px; height: 630px; background-color: #fff; font-family: "Noto Sans JP"">
        <h1 style="font-size: 48px; color: #333; padding: 0 28px 0; display: flex;">${decodeURIComponent(
          title
        )}</h1>
        <div style="display: flex; justify-content: center; align-items: center; font-size: 36px; color: #333; position: absolute; bottom: 16px;">
          <img src="https://c6087cfa.geekhouse-shinjuku.pages.dev/static/assets/geejuku-logo.jpg" style="width: 100px;" alt="Logo">
          ぎーじゅく（ギークハウス新宿）
        </div>
      </div>
   `;
  // <img src="data:image/jpeg;base64,${imageData}" style="width: 100px;" alt="Logo">

  return new ImageResponse(html, {
    width: 1200,
    height: 630,
  });
};
