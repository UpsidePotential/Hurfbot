require('dotenv').config()
const {TwitterClient} = require('twitter-api-client')
const imageSearch = require('image-search-google');
const gis = require('g-i-s');
const download = require('image-downloader');
const fs = require('fs');

const { TwitterApi } = require('twitter-api-v2');

// const twitterClient = new TwitterClient({
//     apiKey: process.env.TWITTER_API_KEY,
//     apiSecret: process.env.TWITTER_API_SECRET,
//     accessToken: process.env.TWITTER_ACCESS_TOKEN,
//     accessTokenSecret: process.env.TWITTER_ACCESS_TOKEN_SECRET
// })

// Instanciate with desired auth type (here's Bearer v2 auth)
// const twitterClient = new TwitterApi({
//     apiKey: process.env.TWITTER_API_KEY,
//     apiSecret: process.env.TWITTER_API_SECRET,
//     accessToken: process.env.TWITTER_ACCESS_TOKEN,
//     accessTokenSecret: process.env.TWITTER_ACCESS_TOKEN_SECRET
//   });

const twitterClient = new TwitterApi(process.env.TWITTER_BEAR);



function downloadImage(url, filepath) {
    return download.image({
       url,
       dest: filepath 
    });
}
 
function processCats(error, results) {
    if (error) {
      console.log(error);
      return;
    }
    else {
        // const catImage = results[Math.floor(Math.random() * results.length)];
        // downloadImage(catImage.url, './images/cat.jpg');
        // twitterClient.v1.uploadMedia('./images/cat.jpg').then( ()=> {
        //     console.log('done');
        // })
        // .catch(e => {
        //     console.log(e);
        // })
        twitterClient.v1.tweet('CAT');
    }
  }

async function main() {
    //const data = await twitterClient.trends.trendsAvailable();
   // console.log(data);

   gis('cats', processCats);
}

(async () => {
    try {
        var text = await main();
        console.log(text);


    } catch (e) {
        // Deal with the fact the chain failed
        console.log(e);
    }
})();


// twitterClient.tweets.statusesUpdate({
//     status: tweet
// }).then (response => {
//     console.log("Tweeted!", response)
// }).catch(err => {
//     console.error(err)
// })
