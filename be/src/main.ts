import { Handler, Hono } from "hono";

const db = {
  count: 0,
};

const incrementCount: Handler = (c) => {
  db.count += 1;

  return c.status(201);
};

const getCount: Handler = (c) => {
  return c.json({ count: db.count });
};

const dbRoute = new Hono();

dbRoute.post("/increment", incrementCount);

dbRoute.get("/", getCount);

const app = new Hono({ strict: false });

app.route("/db", dbRoute);

Deno.serve({ port: 8000 }, app.fetch);
