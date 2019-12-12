const mongooseService = require('../lib/mongoose');

async function getMovies(req, res) {
    let query = req.query;
    let result = [];
    try {
        if(query.query){
            result = await mongooseService.Movie.getModifieddata(query.query,query.sort)
        }
        else if (query.genre){
            result = await mongooseService.Movie.getFilteredData(query.genre,query.sort)
        }
        else {
            result = await mongooseService.Movie.getAllData('',query.sort)
        }
        res.status(200).send({
            message: "success",
            totalCount : result.length,
            response: result
        })
    }
    catch (error) {
        res.send(error);
    }
}

module.exports = {
    getMovies : getMovies
}
