const express = require('express');

const storeRouter = express.Router();

storeRouter.route('/')
.all((req, res, next) => {
    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/plain');
    next();
})
.get((req, res) => {
    res.end('Will send all the store items to you');
})
.post((req, res) => {
    res.end(`Will add the store items: ${req.body.name} with description: ${req.body.description}`);
})
.put((req, res) => {
    res.statusCode = 403;
    res.end('PUT operation not supported on /store');
})
.delete((req, res) => {
    res.end('Deleting all store items')
});

module.exports = storeRouter;