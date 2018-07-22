require("dotenv").config();

var myKeys = require("./keys");

var spotify = new Spotify(keys.spotify);
var twitter = new Twitter(keys.twitter);

var command = process.argv[2];
var parameter = process.argv.slice(3);


switch (command) {
    case "my-tweets":
        //show last 20 tweets 

        //Save to log file the executed command
        
        break;

    case "spotify-this-song":
        //Based on a song it will return the Artist, song's name, preview link of the song from Spotify and the album that the song is from
        //Default value is "The Sign" by Ace of Base.

        //Save to log file the executed command
        
        break;

    case "movie-this":
        //Based on a movie name it will return Title, Year, IMDB Rating, Rotten Tomatoes Rating, Country, Language, Plot and Actors
        //Default value Mr. Nobody.

        //Save to log file the executed command
        
        break;

    case "do-what-it-says":
        //Using the fs Node package 

        //Save to log file the executed command

        break;

    default:
        //Invalid option
        console.log("Incorrect entry liri doesn't support this command!\nPlease try again.");
        break;
}