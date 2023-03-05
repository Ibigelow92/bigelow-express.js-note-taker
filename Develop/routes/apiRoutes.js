const router = require("express").Router();
const noteData = require('../db/db.json');

//app.get('/api/pets', (req, res) => res.json(petData));

// Should get saved notes and joins them in db.json
router.get("/notes", (req, res) => res.json(noteData)

    //Do I make an array and push notes into it?
);

// Should add new notes to db.json
//router.post("/api/notes", (req, res) 
    // ??
//);

// Deletes notes
//router.delete("/api/notes/:id", (req, res) 
   //??
   //How do I select which note to delete? And how does the :id come into play?
//)

module.exports = router;