const http = require('http');

const server = http.createServer((req,res)=>{
    if(req.url === '/'){
        res.write("hello from the home");
        res.end()
    }
    if(req.url === '/about'){
        res.write("hello from the About page")
        res.end()
    }
    else{
        res.end(
            `<h1>opps!!</h1>
            <a href="/">home</a>`
        );
    }
})
server.listen(5000)