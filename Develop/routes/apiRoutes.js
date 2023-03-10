const router = require("express").Router();
const uuid = require("uuid");
const fs = require('fs')
const path = require('path')
let noteData = require("../db/db");
const dbPath = path.join(__dirname, "../db/db.json");

//app.get('/api/pets', (req, res) => res.json(petData));

// Should get saved notes and add them in db.json
// Apparently, I can't even do this
router.get("/notes", function (req, res) {
    fs.readFile(dbPath, "utf8", (err, data) => {
        if (err) {
            throw err;
        }
        res.json(JSON.parse(data));
    });
});

// Should add new notes to db.json
//! The problem might be here
//Problem is here
//Sending HTML instead of JSON
router.post("/notes", function (req, res) {
    const newNote = req.body;
    noteData.push(newNote);
    //noteData is a copy of the file contents
    //need a readToFile and writeToFile
    //read the data with fs.readFile
    //parse the data
    //do fs.writefile
    //res.json the output
    
    fs.readFile(dbPath, "utf8", (err, data) => {
        if (err) {
            throw err;
        }
        const db = JSON.parse(data); // convert string to json array of objects

     
        // newnote = { title: asdasd, note: nasdasd, id : 1}
        newNote.id = db.length + 1;
        db.push(newNote);
        // db = [ { title: asdasd, note: nasdasd, id : 1}]
        fs.writeFile(dbPath, JSON.stringify(db, null, 2), (err) => {
            if (err) {
                throw err;
            }
            console.info("Successfully saved new note");
        })
    });
    res.json(newNote);
});

//Deletes notes
router.delete("/notes/:id", function(req,res) {
    const deleteNote = noteData.filter( note => note.id != req.params.id);
    noteData = deleteNote;
    console.log("Note successfully deleted");
    res.send("Note successfully deleted");
}); 

module.exports = router;