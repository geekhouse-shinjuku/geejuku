// index.js
import { Hono } from "hono";
import { handle } from "hono/cloudflare-pages";
import { createOGPImage } from "./createOGPImage";

export const runtime = "edge";
const app = new Hono().basePath("/api");

app.get("/ogimg", createOGPImage);

export const GET = app.fetch;
export const POST = app.fetch;
export const onRequest = handle(app);
