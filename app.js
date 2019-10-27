const koa = require('koa')
const app = new koa()

app.use(async ctx => {
  ctx.body = 'this is ssr'
})

app.listen(8001);