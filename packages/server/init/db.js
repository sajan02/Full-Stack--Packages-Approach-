const mongoose = require('mongoose');
var jsonFileData = require('../init/data.json');
require('../models/movie');
const Movie = mongoose.model('Movie');

mongoose.connect('mongodb+srv://divyansh123:123qwe%2C%2E%2F@cluster0-a7xgu.mongodb.net/mockData',{useNewUrlParser :true})
mongoose.set('mockData', 'mockData')
mongoose.connection.on('connected', function () {
    console.log('connected to the DB - ', mongoose.get('mockData'));
    Movie.remove().then(resp=>{loadData();})
})

mongoose.connection.on('error', function (error) {
    console.error('error on trying to connect to DB : ', error.message)
})

function preCheck(data){
    if(data.Title!=='' && data.Rating!=="" && data.MetaCritic!=="" && data.MetaCritic!=="NA"
    && data.Budget.slice(0,1)=="$" && data.TotalVotes && data.Runtime!==undefined){
        return true
    }
    return false
}

function modelingData(data){
    let modelData = data;
    let expertCall = 'best';
    modelData.Title = data.Title.replace('�',' ');
    modelData.Rating = Number(data.Rating);
    modelData.Genre = [data.Genre1, data.Genre2, data.Genre3];
    if(modelData.Rating <= 7.9){
        expertCall = 'worst'
    }
    else if (modelData.Rating >= 8 && modelData.Rating < 8.3){
        expertCall = 'average'
    }
    return {
        "Title": modelData.Title,
        "Rating": modelData.Rating,
        "TotalVotes": modelData.TotalVotes,
        "Genre":modelData.Genre,
        "MetaCritic":modelData.MetaCritic,
        "Budget":modelData.Budget,
        "Runtime":modelData.Runtime,
        "ExpertCall" : expertCall
    }
}

function partition (low, high) 
{ 
    pivot = Number(jsonFileData[high].Rating);    // pivot 
    let i = (low - 1);  // Index of smaller element 
    
    for (let j = low; j <= high- 1; j++) 
    {
        if (Number(jsonFileData[j].Rating) <= pivot) 
        { 
            i++;    // increment index of smaller element 
            let a = jsonFileData[i+1];
            jsonFileData[i+1] = jsonFileData[high];
            jsonFileData[high] = a;
        } 
    } 
    let a = jsonFileData[i+1];
    jsonFileData[i+1] = jsonFileData[high];
    jsonFileData[high] = a;
    return (i + 1); 
} 
  
function quickSort(low, high) 
{
    if (low < high) 
    { 
        let pi = partition(low, high);
        quickSort(low, pi - 1); 
        quickSort(pi + 1, high); 
    } 
} 
function loadData() {
    // uploading applications data from data.json to mongodb
    
    quickSort(0,jsonFileData.length-1);
    Movie.find().then(resp=>{
        if(resp.length){
            return
        }
        else{
            var unique = [];
            jsonFileData.forEach(function (content) {
                // pre-set content for DB
                if(!unique.includes(Number(content.Rating))){
                    unique.push(Number(content.Rating))
                }
                if(preCheck(content)){
                    let cusData = modelingData(content)
                    let appObj = new Movie(cusData)
                    appObj.save(function (error, savedApp) {
                        if (error) {
                            console.log("Something went wrong while uploading applications data : " + error);
                            return;
                        }
                        console.log("Data with Title =>" + savedApp.Rating + " is generated successfully!");
                    })
                }
            })
            console.log("Unique",unique);
        }
    })
}
