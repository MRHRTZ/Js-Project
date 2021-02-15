const express = require('express')
const app = express()
const insta = require('ig-headless-driver')
const PORT = process.env.PORT || 7000;

app.use('/igstalk', (req, res) => {
    
    const username = req.query.username

    insta.getUser(username.replace('@',''))
    .then((profil) => {
        const user = profil.user.username
        const bio = profil.user.biography
        const following = profil.user.edge_follow.count
        const followers = profil.user.edge_followed_by.count
        const pic = profil.user.profile_pic_url_hd

        let post = []
        profil.post.forEach(posting => {
            let video_url = []
            video_url.push(posting.node.video_url)
            post.push({
                type: posting.node.__typename,
                shortcode: posting.node.shortcode,
                dimensi: posting.node.dimensions,
                caption: posting.node.accessibility_caption,
                upload_time: new Date(Number(posting.node.taken_at_timestamp) * 1000),
                url: posting.node.display_url,
                vid: video_url
            })
        })
        res.send({
            username: user,
            bio: bio,
            following: following,
            followers: followers,
            profile_pic: pic,
            post: post
        })
    }).catch((e) => {
        console.error('Profiles Not Found!')
        console.log(e)
    })
})

app.listen(PORT, () => {
    console.log("RUNNING ON PORT : " + PORT)
})