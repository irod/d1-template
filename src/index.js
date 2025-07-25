import { renderHtml } from "./renderHtml";

// export default {
//   async fetch(request, env) {
//     const stmt = env.DB.prepare("SELECT * FROM comments LIMIT 3");
//     const { results } = await stmt.all();

//     return new Response(renderHtml(JSON.stringify(results, null, 2)), {
//       headers: {
//         "content-type": "text/html",
//       },
//     });
//   },
// } satisfies ExportedHandler<Env>;


import { Hono } from 'hono'
// import { renderer } from './renderer'

const app = new Hono()

// app.use(renderer)

app.get('/', async (c) => {
  const stmt = c.env.DB.prepare("SELECT * FROM user LIMIT 1");
    const { results } = await stmt.all();

    // return new Response(renderHtml(JSON.stringify(results, null, 2)), {
    //   headers: {
    //     "content-type": "text/html",
    //   },
    // });
  return c.text('Hello Cloudflare Workers irod!'+JSON.stringify(results, null, 2))
})

export default app
