const express = require('express')
const app = express()
const port = 8000
const redis = require("redis")
const client = redis.createClient()
const {
    promisify
} = require('util')

const getAsync = promisify(client.get).bind(client);
const setAsync = promisify(client.set).bind(client);

app.get('/jobs', async (req, res) => {
    const jobs = await getAsync('github')

    res.header("Access-Control-Allow-Origin", "http://localhost:3000");
    return res.send(jobs)
})

app.listen(port, () => {
    console.log(`Server running on port ${port}`)
})