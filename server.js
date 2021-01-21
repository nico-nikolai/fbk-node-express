const express = require('express');
const morgan = require('morgan');
const storeRouter = require('./routes/storeRouter')

const hostname = 'localhost';
const port = 3001;

const app = express();
app.use(morgan('dev'));
app.use(express.json());

app.use('/store', storeRouter);

app.get('/store/:itemId', (req, res) => {
    res.end(`Will send details of the store item: ${req.params.itemId} to you`)
})

app.post('/store/:itemId', (req, res) => {
    res.statusCode = 403;
    res.end(`POST operation not supported on /store/${req.params.itemId}`)
})

app.put('/store/:itemId', (req, res) => {
    res.write(`Updating the store itme: ${req.params.itemId}\n`);
    res.end(`Will update the store item: ${req.body.name}
        with description: ${req.body.description}`)
})

app.delete('/store/:itemId', (req, res) => {
    res.end(`Deleting store item: ${req.params.itemId}`)
})

app.use(express.static(__dirname + '/public'));

app.use((req, res) => {
    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/html');
    res.end('<html><body><h1>This is an Express Server</h1></body></html>');
});

app.listen(port, hostname, () => {
    console.log(`Server running at http://${hostname}:${port}`)
})