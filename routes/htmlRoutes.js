const router = require("express").Router();
const path =  require('path')

// For notes page
// /notes
router.get("/notes", function(req, res) {
    res.sendFile(path.join(__dirname, "../public/notes.html"));
  });

module.exports = router;