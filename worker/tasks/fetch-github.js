const fetch = require('node-fetch')
const redis = require("redis")
const client = redis.createClient()
const {
    promisify
} = require('util')

const getAsync = promisify(client.get).bind(client);
const setAsync = promisify(client.set).bind(client);


const baseUrl = 'https://jobs.github.com/positions.json'

async function fetchGithubJobs() {
    const allJobs = []
    console.log("------fetch github jobs called------")
    let resultCount = 1, page = 0
    while (resultCount > 0) {
        const res = await fetch(`${baseUrl}?page=${page}`)
        const jobs = await res.json()
        allJobs.push(...jobs)
        console.log("Fetched", jobs.length, "jobs")
        resultCount = jobs.length
        page++
    }
    console.log("allJobs length is ", allJobs.length)
    const success = await setAsync('github', JSON.stringify(allJobs))
    console.log(success)
}


module.exports = fetchGithubJobs