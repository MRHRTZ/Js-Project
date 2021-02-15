const fbdl = require("fbdl-core");
const fs = require("fs");
 
fbdl.getInfo("https://www.facebook.com/111683913906599/posts/195671178841205/")
    .then(res => {
        console.log(res)
    });
