
const fs = require('fs');
const http = require('http');
const url = require('url');

//Read Data

const data = fs.readFileSync(`${__dirname}/data/products.json`, "utf-8");
const products = JSON.parse(data);

//Create server

const hostname = 'localhost';
const port = '9999';
const server = http.createServer((req, res)=>{
    const {query, pathname} = url.parse(req.url, true);
    console.log('path is:', pathname);
    console.log("query", query.id);
    //console.log('query', query);
    switch(pathname){
        case '/':
            res.writeHead(200,{
                'Content-Type': "text/html"
            });
            res.end("<h1>Welcome to NodeJs</h1>");
            break;
        case '/api/products':
            res.writeHead(200, {
                "Content-type": "application/json"
            })
            res.end(data)
            break;
        case '/api/product':
            res.writeHead(200, {
                'Content-Type': 'application/json'
            });
            res.end(JSON.stringify(products[query.id]))
            break;
        default:
            res.writeHead(404, {
                "Content-Type": 'text/html',
                "my-header": "I like Node"
            })
            res.end("<h1>Page not found</h1>")
    }
});
server.listen( port, hostname =>{
    console.log(`Server is listening on ${port}`)
})
