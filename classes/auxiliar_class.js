var reader = require('fs');

function Auxiliars() {
    //Replace special caracters using regex
    this.replaceAll = function (search, find, replacement) {
        return search.replace(RegExp(find, 'g'), replacement);
    };

    //Save to log file the executed command and parameters.
    this.logToFile = function (command, parameter) {
        var fullCommand = (parameter ? (command + ", " + parameter) : command) + "\n"
        reader.appendFile('./log.txt', (getDateTime(new Date()) + "\t : " + fullCommand), function (err) {
            if (err) {
                console.log(err);
            }
        })
    }
}

//Get current date and time Formatted
getDateTime = function (date) {
    return "(" + date.getMonth() + "/" + date.getDate() + "/" + date.getFullYear() +
        "T" + date.getHours() + ":" + date.getMinutes() + ":" + date.getSeconds() + ")";
}

module.exports = Auxiliars;
