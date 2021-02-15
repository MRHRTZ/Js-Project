const get = require('got')

function getUser(username) {
    return new Promise((resolve, reject) => {
        get.get('https://www.instagram.com/' + username + '/?__a=1').then(a => {
            const user = JSON.parse(a.body).graphql.user
            // console.log(user.biography)
            resolve({
                // link: URL.replace('/?__a=1', ''),
                id: user.id,
                biography: user.biography,
                subscribersCount: user.edge_followed_by.count,
                subscribtions: user.edge_follow.count,
                fullName: user.full_name,
                highlightCount: user.highlight_reel_count,
                isBusinessAccount: user.is_business_account,
                isRecentUser: user.is_joined_recently,
                accountCategory: user.business_category_name,
                linkedFacebookPage: user.connected_fb_page,
                isPrivate: user.is_private,
                isVerified: user.is_verified,
                profilePic: user.profile_pic_url,
                profilePicHD: user.profile_pic_url_hd,
                username: user.username,
                postsCount: user.edge_owner_to_timeline_media.count,
                posts: user.edge_owner_to_timeline_media.edges.map(edge => {
                    let hasCaption = edge.node.edge_media_to_caption.edges[0];
                    return {
                    id: edge.node.id,
                    shortCode: edge.node.shortcode,
                    url: `https://www.instagram.com/p/${edge.node.shortcode}/`,
                    dimensions: edge.node.dimensions,
                    imageUrl: edge.node.display_url,
                    isVideo: edge.node.is_video,
                    caption: hasCaption ? hasCaption.node.text : '',
                    commentsCount: edge.node.edge_media_to_comment.count,
                    commentsDisabled: edge.node.comments_disabled,
                    timestamp: edge.node.taken_at_timestamp,
                    likesCount: edge.node.edge_liked_by.count,
                    location: edge.node.location,
                    children: edge.node.edge_sidecar_to_children ? edge.node.edge_sidecar_to_children.edges.map(edge => {
                        return {
                        id: edge.node.id,
                        shortCode: edge.node.shortcode,
                        dimensions: edge.node.dimensions,
                        imageUrl: edge.node.display_url,
                        isVideo: edge.node.is_video,
                            }
                        }) : []
                    }
                }) || []
            });
        })
    })
}

let arrBln = ["Januari","Februaru","Maret","April","Mei","Juni","Juli","Agustus","September","Oktober","November","Desember"]
let a = new Date(1606475029 * 1000)
const jam = a.getHours()
const menit = a.getMinutes()
const bulan = a.getMonth()
const tanggal = a.getDate()
const tahun = a.getFullYear()
console.log(jam, menit, arrBln[bulan - 1], tanggal, tahun)
getUser('mariaeka_').then((a) => console.log(a))


