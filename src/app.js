import { Hono } from "hono";
import router from "./routes/web";
import { serveStatic } from "hono/bun";

const app = new Hono();

// static file (CSS)
app.use("/css/*", serveStatic({ root: "./src/public" }));

// routes
app.route("/", router);

// middleware untuk set currentPath
app.use("*", async (c, next) => {
  c.set("currentPath", c.req.path);
  await next();
});

export default {
  port: 3000,
  fetch: app.fetch,
};