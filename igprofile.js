const InstaDP = require('instadp');
 
(async() => {
     const insta = new InstaDP();
     const stories = await insta.getProfilePicture('jokowi')
     console.log(stories)
})();