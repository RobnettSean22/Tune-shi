const express = require('express')
const app = express()
const port = 2222
const data = require('./data.json')

app.get('/api/data', (req, res, next) => {
    res.status(200).send(data)
})

app.listen(port, () => {console.log(`Im listening on ${port}`)})