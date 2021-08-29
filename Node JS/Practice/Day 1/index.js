const express = require('express');

//express object create
const app = express();

//applying middleware to convert unreadable data to js object
app.use(express.json());

//localhost:8000/dummy
app.get("/dummy", (req, res) => {
    res.send({message : "Hello"});
})

//post method
app.post("/create", (req, res) => {

    console.log(req.body);

    res.send({message:"POST working"});
})


//Creation and start of server
app.listen(8000, () => {
    console.log("Server is running");
})