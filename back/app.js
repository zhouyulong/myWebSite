'use strict'

const Koa = require('koa');
const koaLogger = require('koa-logger');
const koaRouter = require('koa-router');
const koaBodyParser = require('koa-bodyparser');
const router = koaRouter();
const app = new Koa();

app.use(koaLogger()); // 控制台日志
app.use(koaBodyParser());



app.use((ctx, next) => {
    console.log('----------------\n', ctx.request.body);
    next();
})

router.get('/',(ctx, next) => {
    // console.log(ctx.request);
    ctx.body = 'hi here'
});
app.use(router.routes());
app.use((ctx, next)=> {
    ctx.response.body = '没啥事儿，测试一下';
})





// app.use()

app.listen(4000,()=>{
    console.log('starting on http://localhost:4000')
});
