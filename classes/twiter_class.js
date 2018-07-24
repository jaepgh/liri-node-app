require("dotenv").config();
var myKey = require("../keys");

var Twitter = require('twitter');
var client = new Twitter(myKey.twitter);


var TwitterClass = function () {
    this.getTweets = function (number) {
        client.get('statuses/user_timeline', { screen_name: 'jaesquivelp', count: number }, function (error, tweets, response) {
            if (error) {
                //Log the error to the console
                console.log('Error: ' + error);
            } else {
                tweets.forEach(element => {
                    console.log("\n" + element.text);
                });
            }
        });
    }
}

module.exports = TwitterClass;