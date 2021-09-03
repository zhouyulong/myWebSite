const Koa = require('koa')



const app = new Koa();

app.use((ctx, next)=> {
    ctx.response.body = '没啥事儿，测试一下';
})
app.listen(4000,()=>{
    console.log('starting on http://192.168.0.106:4000')
});
