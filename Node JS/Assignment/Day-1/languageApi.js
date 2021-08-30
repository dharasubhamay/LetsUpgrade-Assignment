const express = require('express');
const mongoose = require('mongoose');

//create express object
const app = express();

//usebility of json text
app.use(express.json());

//connect the database
mongoose.connect("mongodb://localhost:27017/languageapi", {useNewUrlParser:true}, () => {
    console.log("MongoDB is connected");
})

//make database schema
const languageSchema = new mongoose.Schema({
    name : String,
    founder : String,
    imageUrl : String
})

//create model for collection of languages
const languageModel = new mongoose.model('languages', languageSchema);

//get all languages 
app.get("/languages", async (req, res) => {
    let data = await languageModel.find();

    res.send(data);
})

//get a single language by it's id
app.get("/language/:id", async (req, res) => {
    let id = req.params.id;
    let language = await languageModel.find({_id:id});

    res.send(language);
})

//find a single language by it's name
app.get("/language/name/:name", async (req, res) => {
    let name = req.params.name;
    let languagedata = await languageModel.find({name:name});

    res.send(languagedata);
})

//create a language
app.post("/createlang", (req, res) => {
    let lang = req.body;
    console.log(lang);

    let langObj = new languageModel(lang);

    langObj.save((err, data) => {
        if(err == null)
        {
            res.send({message: "Language Created"});
        }
    });
})


app.listen(8000, () => {
    console.log("Server is running");
})

