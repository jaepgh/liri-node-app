
var reader = require('fs');
var Movie = require('./classes/movie_class');
var Spotify = require('./classes/spotify_class');
var Twitter = require('./classes/twiter_class');
var Auxiliars = require('./classes/auxiliar_class');

var movieObj = new Movie();
var spotifyObj = new Spotify();
var twitterObj = new Twitter();
var auxiliar = new Auxiliars();

var command = process.argv[2];
var parameter = process.argv.slice(3).join(command === "spotify-this-song" ? ' ' : '+');

function executeCommand(command, parameter) {
    switch (command) {
        case "my-tweets":
            twitterObj.getTweets(20);
            break;

        case "spotify-this-song":
            spotifyObj.getTrack(parameter);
            break;

        case "movie-this":
            movieObj.getMovie(parameter);
            break;

        case "do-what-it-says":
            reader.readFile('./random.txt', 'utf8', function (err, data) {
                if (err) {
                    return console.log(err);
                } else {
                    var randomCommand = auxiliar.replaceAll(data, '"', '').split(",");
                    executeCommand(randomCommand[0], randomCommand[1])
                }
            });
            break;

        default:
            //Invalid option
            console.log("Incorrect entry liri doesn't support this command!\nPlease try again.");
            break;
    }
}
//Execute user command
executeCommand(command, parameter);
auxiliar.logToFile(command, parameter);