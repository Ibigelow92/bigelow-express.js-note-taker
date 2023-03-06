const router = require("express").Router();
let noteData = require('../db/db.json');
const uuid = require("uuid");

//app.get('/api/pets', (req, res) => res.json(petData));

// Should get saved notes and joins them in db.json
router.get("/api/notes", function(req, res) {
    res.json(noteData);
});

// Should add new notes to db.json
router.post("/api/notes", function(req, res) {
    const newNote = req.body;
    noteData.push(newNote);
    // Assigns incremented ID of each new note
    noteData.forEach((note,index) => {
        note.id = index +1;
    });
    console.log(newNote);
    res.json(newNote);
});

// Deletes notes
router.delete("/api/notes/:id", function(req,res) {
    const deleteNote = noteData.filter( note => note.id != req.params.id);
    noteData = deleteNote;
    console.log(deleteNote);
    res.send("Note deleted.");
});    

module.exports = router;