const express = require('express');
const mongoose = require('mongoose');

const app = express();

app.use(express.json());

mongoose.connect("mongodb://localhost:27017/pokeapi", {useNewUrlParser:true}, () => {
    console.log("MongoBD is connected");
})

const pokemonSchema = new mongoose.Schema({
    name:String,
    type:String,
    imageUrl:String
})

//create model for collection the pokemons
const pokemonModel = new mongoose.model('pokemons', pokemonSchema);

//get all pokemons details
app.get("/pokemons", async (req, res) => {
    let data = await pokemonModel.find();

    res.send(data);
})

//get a single pokemon by it's id
app.get("/pokemon/:id", async (req, res) => {
    let id = req.params.id;
    let pokemondata = await pokemonModel.find({_id:id});

    res.send(pokemondata);
})

//find a single pokemon by it's type
app.get("/pokemon/type/:type", async (req, res) => {
    let type = req.params.type;
    let pokemondata = await pokemonModel.find({type:type});

    res.send(pokemondata);
})

//create new pokemon
app.post("/createpokemon", (req, res) => {
    let pokemon = req.body;

    let pokemonObj = new pokemonModel(pokemon);

    pokemonObj.save((err, data) => {
        if(err === null)
        {
            res.send({message:"Pokemon Created"});
        }
    });
})

//delete a single pokemon by it's id
app.delete("/deletepokemon/:id", (req, res) => {
    let id = req.params.id;

    pokemonModel.deleteOne({_id:id}, (err, data) => {
        if(err === null){
            res.send({message:"Deleted Pokemon"});
        }
    })
})

//update a single pokemon by it's id
app.put("/updatepokemon/:id", (req, res) => {
    let id = req.params.id;
    let updatedata = req.body;

    pokemonModel.updateOne({_id:id}, updatedata, (err, data) => {
        if(err === null)
        {
            res.send("Pokemon Updated");
        }
        
    })
})

app.listen(8000, () => {
    console.log("Server is running");
})

