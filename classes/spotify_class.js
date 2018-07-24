require("dotenv").config();
var myKey = require("../keys");

var Spotify = require('node-spotify-api');
var spotify = new Spotify(myKey.spotify);

var SpofityClass = function () {
    this.getTrack = function (trackName) {
        var searchParameter = '';
        if (trackName) {
            //Search requested track
            searchParameter = trackName;
        } else {
            //Search default Despacito by Luis Fonsi.
            searchParameter = 'Despacito'
        }  
        spotify.search({ type: 'track', query: searchParameter }, function (err, data) {
            if (err) {
                return console.log('Error occurred: ' + err);
            }
            //Validate if the search returned something or not
            if (data.tracks.items[0]) {
                console.log("\nSong's name: " + data.tracks.items[0].name +
                    "\nArtists: " + getArtist(data.tracks.items[0].artists) +
                    "\nAlbum: " + capitalizeFirstLetter(data.tracks.items[0].album.name) +
                    "\nLink: " + data.tracks.items[0].external_urls.spotify + "\n");
            } else {
                console.log("\nSong not found!\n");
            }
        });
    }
}

//This function search the provided array and return an string containing the artist names 
function getArtist(artistArray) {
    var result = '';

    if (artistArray.length > 0) {
        for (let index = 0; index < artistArray.length; index++) {
            if (artistArray.length === 1) {
                result = artistArray[index].name;
            } else {
                if (index === artistArray.length - 2) {
                    result += artistArray[index].name + ' & ';
                } else if(index === artistArray.length - 1) {
                    result += artistArray[index].name;
                } 
                else {
                    result += artistArray[index].name + ', ';
                }
            }
        }
    } else {
        result = 'Not avaliable';
    }
    return result;
}

//Capitalize the first letter of a provided word
function capitalizeFirstLetter(word) {
    return word.charAt(0).toUpperCase() + word.slice(1);
}

module.exports = SpofityClass;
