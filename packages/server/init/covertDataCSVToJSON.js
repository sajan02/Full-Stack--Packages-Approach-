const CSVToJSON = require("csvtojson");
const FileSystem = require("fs");

CSVToJSON().fromFile("/home/nineleaps/Documents/Internal Project/challenge_server/init/IMDB - IMDB.csv").then(source => {
    var jsonContent = JSON.stringify(source);
    console.log(jsonContent);
    FileSystem.writeFile("/home/nineleaps/Documents/Internal Project/challenge_server/init/data.json", jsonContent, 'utf8', function (err) {
        if (err) {
            console.log("An error occured while writing JSON Object to File.");
            return console.log(err);
        }
        console.log("JSON file has been saved.");
    });
});