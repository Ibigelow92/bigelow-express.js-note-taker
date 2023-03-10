//Dependencies
const express = require("express"); //
const path = require("path"); //
const fs = require("fs"); //
const util = require("util"); //
const uuid = require("uuid");
const htmlRoutes = require('./routes/htmlRoutes')
const apiRoutes = require('./routes/apiRoutes')

// Sets up server
const app = express(); //
const PORT = process.env.PORT || 3001; //

// Middleware to parse data
app.use(express.urlencoded({ extended: true }));
app.use(express.json()); 

// Middleware to reference files in public folder
app.use(express.static('./public')); //

//Routes
// /api/notes
app.use('/', htmlRoutes)
app.use('/api', apiRoutes)

// For typos, etc.
app.get("*", function(req, res) {
    console.log('in here')
        res.sendFile(path.join(__dirname, "../public/index.html"));
      });

app.listen(PORT, () => 
    console.info(`App listening at http://localhost:${PORT}`)
); 