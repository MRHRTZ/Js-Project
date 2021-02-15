const request = require('requestretry');

request({
    url: 'https://www.instagram.com/?__a:1',
    json: true,
   
    fullResponse: true // (default) To resolve the promise with the full response or just the body
  })
  .then(function (response) {
      console.log(response)
    // response = The full response object or just the body
  })
  .catch(function(error) {
    // error = Any occurred error
  })