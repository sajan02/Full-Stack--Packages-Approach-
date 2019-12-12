const mongoose = require('mongoose');
const MovieModel = mongoose.model('Movie');

class Movie {

    static async getModifieddata(query,sort=-1){
        console.log(query);
        
        try {
            let result = await MovieModel.find({ExpertCall : query}).sort({"Rating":sort});
            return result;
        }
        catch (error) {
            throw error
        }
    }

    static async getAnalysiedData(query,sort=-1) {
        try {
            let result;
            switch(query){
                case 'best':
                    result = await MovieModel.find({ $and: [ { Rating: { $lte: 8.8 } }, { Rating: { $gte: 8.5 } } ] }).sort({"Rating":sort});
                    break;
                case 'average':
                    result = await MovieModel.find({ $and: [ { Rating: { $lte: 8.6 } }, { Rating: { $gte: 8.1 } } ] }).sort({"Rating":sort});
                    break;
                case 'worst':
                    result = await MovieModel.find({ $and: [ { Rating: { $lte: 8 } }, { Rating: { $gte: 7.5 } } ] }).sort({"Rating":sort});
                    break;
                default:
                    result = await MovieModel.find().sort({"Rating":sort});
            }
            return result;
        }
        catch (error) {
            throw error
        }
    }
    
    static async getFilteredData(query,sort=-1){
        console.log(query);
        
        let arr = [];
        if(Array.isArray(query)){
            query.forEach(el => {
                arr.push({ Genre : el })
            });
        }
        else{
            arr = [{Genre : query}]
        }
        try {
            let result = await MovieModel.find({ $or: arr}).sort({"Rating":sort})
            return result;
        }
        catch (error) {
            throw error
        }
    }

    static async getAllData(query,sort=-1){
        try {
            let result = await MovieModel.find().sort({"Rating":sort})
            return result;
        }
        catch (error) {
            throw error
        }
    }
    // static async getMoviesOnSearch(query) {
    //     try {
    //         return await movieService.getSearchMovieList(query)
    //             .then(data => data)
    //             .catch(error => { throw error })
    //     }
    //     catch (error) {
    //         throw error
    //     }
    // }
}
module.exports = {
   Movie : Movie
}
