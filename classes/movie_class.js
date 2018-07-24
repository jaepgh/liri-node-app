var request = require('request');

function MovieClass() {
    this.getMovie = function (movieName) {
        var searchParameter = '';
        if (movieName) {
            //Search requested movie
            searchParameter = movieName;
        } else {
            //Search default Mr. Nobody
            searchParameter = 'Mr. Nobody'
        }
        var URL = "https://www.omdbapi.com/?apikey=trilogy&t=" + searchParameter;
        request(URL, function (error, response, body) {
            if (error) {
                //Log the error to the console
                console.log('Error: ' + error);
            } else {
                //Check for the correct status Code
                if (response.statusCode == 200) {
                    var result = JSON.parse(body);
                    if (result.Response === "True") {
                        console.log("\nTitle: " + result.Title +
                        "\nYear: " + result.Year +
                        "\nIMDB Rating: " + result.imdbRating +
                        "\nRotten Tomatoes: " + getRottenTomatoes(result.Ratings) +
                        "\nCountry: " + result.Country +
                        "\nLanguage: " + result.Language +
                        "\nPlot: " + result.Plot +
                        "\nActors: " + result.Actors + "\n");
                    } else {
                        console.log("\nMovie not found!\n");
                    }
                    
                } else {
                    console.log('Unable to retreive information!');
                }
            }
        });
    }
}

//This function will iterate over the ratings array provide for the OMDB API searching for the Rotten Tomatoes rating
function getRottenTomatoes(ratings){
    var result = 'Not avaliable';
    ratings.forEach(element => {
        if (element.Source === 'Rotten Tomatoes') {
            result = element.Value
        }
    });
    return result;
}

module.exports = MovieClass;