const express = require("express");
let app = express();
const fs = require('fs');

app.get("/:id", function (req, res) {
let donutID = req.params.id;
fs.readFile('./db.json', "utf-8", (error, data) => {
        console.log(data);
        if (error) throw error;
        obj = JSON.parse(data);
for  (i = 0; i < obj.length; i++)
 { 
    if(obj[i].id==donutID)
    {
        res.json(obj[i]);
    }
}
});
});

app.get("/", function (req, res) {
    fs.readFile('./db.json', "utf-8", (error, data) => {
        console.log(data);
        if (error) throw error;
        obj = JSON.parse(data);
         res.json(obj);
    });
});


app.listen(4040, () => {
    console.log("We've now got a server!");
    console.log("Your routes will be running on http://localhost:8080");
});