'use strict'

const Koa = require('koa');
const koaLogger = require('koa-logger');
const koaRouter = require('koa-router');
const koaBodyParser = require('koa-bodyparser');
const router = koaRouter();
const user = require('./routes/userRouter');
const app = new Koa();

app.use(koaLogger()); // 控制台日志
app.use(koaBodyParser());



router.use('/v1/api/user', user.routes());
app.use(router.routes());


app.listen(4000,()=>{
    console.log('starting on http://localhost:4000')
});
