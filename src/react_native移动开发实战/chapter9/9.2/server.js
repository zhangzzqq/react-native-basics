let http = require('http')
let items = []

http.createServer(function(req, res) {
    res.setHeader('Access-Control-Allow-Origin', '*')
    res.setHeader('Access-Control-Allow-Headers', 'Content-Type')
    res.setHeader('Content-Type', 'application/json')

    switch (req.method) {
        case 'OPTIONS':
            res.statusCode = 200;
            res.end();
            break;

        case 'GET':
            console.log('server get...')
            let data = JSON.stringify(items);
            res.write(data);
            res.end();
            break;
        case 'POST':
            console.log('server post...')
            let item = '';
            req.on('data', function (chunk) {
                item += chunk
            });
            req.on('end', function () {
                item = JSON.parse(item);
                items.push(item.item);
                let data = JSON.stringify(items);
                res.write(data);
                res.end()
            });
            break
    }
}).listen(8000);

console.log('http server is start...');
