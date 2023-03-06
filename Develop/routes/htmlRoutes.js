const router = require("express").Router();
const path =  require('path')

// For index (home) page 
router.get("/", function(req, res) {
    res.sendFile(path.join(__dirname, "../public/index.html"));
  });

// For notes page
router.get("/notes", function(req, res) {
    res.sendFile(path.join(__dirname, "../public/notes.html"));
  });

// For typos, etc.
router.get("*", function(req, res) {
    res.sendFile(path.join(__dirname, "../public/index.html"));
  });

module.exports = router;