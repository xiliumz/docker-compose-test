import { Handler, Hono } from "hono";
import { cors } from "hono/cors";

const db = {
  count: 0,
};

const incrementCount: Handler = (c) => {
  db.count += 1;

  return c.body(null, 204);
};

const getCount: Handler = (c) => {
  return c.json({ count: db.count });
};

const dbRoute = new Hono();

dbRoute.post("/increment", incrementCount);

dbRoute.get("/", getCount);

/** Main app */
const app = new Hono({ strict: false });

app.use("*", cors());

app.route("/db", dbRoute);

Deno.serve({ port: 8000 }, app.fetch);
