const Router = require('koa-router')
const swaggerJSDoc = require('swagger-jsdoc')
const path = require('path')

const router = Router()

const swaggerDefinition = {
    info: {
        title: 'MyWebSite API',
        version: 'v1.0',
        description: 'MyWebSite api docs',
    },
    basePath: '/',
}

const options = {
    swaggerDefinition,
    apis: [path.join(__dirname, '*.js')], // 带有注解的 router 地址
}

const swaggerSpec = swaggerJSDoc(options)

router.get('/swagger.json', async (ctx) => {
    ctx.set('Content-Type', 'application/json');
    ctx.body = swaggerSpec;
})

module.exports = router

