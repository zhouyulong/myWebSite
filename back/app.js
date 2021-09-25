'use strict'

const Koa = require('koa');
const koaLogger = require('koa-logger');
const koaRouter = require('koa-router');
const koaBodyParser = require('koa-bodyparser');
const router = koaRouter();
const user = require('./routes/userRouter');
const koaSwagger = require('koa2-swagger-ui');
const swagger = require('./routes/swagger');
const app = new Koa();

app.use(koaLogger()); // 控制台日志
app.use(koaBodyParser());



router.use('/v1.0/api/user', user.routes());
app.use(router.routes());

// 引入 swagger
app.use(swagger.routes(), swagger.allowedMethods())
app.use(koaSwagger.koaSwagger({
    routePrefix: '/swagger',
    swaggerOptions: {
        url: '/swagger.json'
    }
}))

app.listen(4000,()=>{
    console.log('starting on http://localhost:4000')
});
