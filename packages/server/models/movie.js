const mongoose = require('mongoose')

const movieSchema = new mongoose.Schema({
    "Title": {
        type:String,
        required:true
    },
    "Rating": {
        type:Number,
        required:true
    },
    "TotalVotes": {
        type:Number,
    },
    "Genre":{
        type:Array,
        default : []
    },
    "MetaCritic":{
        type : Number,
        required : true
    },
    "Budget":{
        type : String
    },
    "Runtime":{
        type : String
    },
    "ExpertCall":{
        type : String
    }
});

mongoose.model('Movie', movieSchema)  //creates constructor function we can make use of it
