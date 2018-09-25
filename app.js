const Koa = require('koa')
const app = new Koa()
const server = require('http').createServer(app.callback())
const io = require('socket.io')(server)
io.on('connection', function() {
    /* … */
    console.log('服务器已经连接！')
})
app.use(async ctx => {
    ctx.body = 'Hello World'
})

server.listen(3000, function() {
    console.log('listening on *:3000')
})
