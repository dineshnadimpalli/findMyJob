const CronJob = require('cron').CronJob;
const fetchGithubJobs = require('./tasks/fetch-github')

/* The below cron pattern Runs every minute */
/* Check out the https://crontab.guru/ website for more cron job patterns */

new CronJob('* * * * *', fetchGithubJobs, null, true, 'America/Los_Angeles');