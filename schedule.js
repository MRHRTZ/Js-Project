const cron = require('node-cron')
 
//             ┌────────────── second (optional)
//             │ ┌──────────── minute
//             │ │ ┌────────── hour
//             │ │ │ ┌──────── day of month
//             │ │ │ │ ┌────── month
//             │ │ │ │ │ ┌──── day of week
//             │ │ │ │ │ │
//             │ │ │ │ │ │
//             * * * * * *
cron.schedule('0 0 * * * *', () => {
  console.log('running every one hour on minute 0');
});