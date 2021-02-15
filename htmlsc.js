const scrape = require('website-scraper');
const options = {
  urls: ['http://nodejs.org/'],
  urlFilter: (url) => url.startsWith('http://nodejs.orga'), // Filter links to other websites
  recursive: true,
  maxRecursiveDepth: 10,
  filenameGenerator: 'bySiteStructure',
  directory: '/web-save/2/'
};
 
// with async/await
try {
//const result = await scrape(options);
 
// with promise
scrape(options).then((result) => { console.log(result[0].resource.children) });
 
// or with callback
scrape(options, (error, result) => { console.log(error, result) });
} catch (err) {
    console.log(err)
}