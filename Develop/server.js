//Dependencies
const express = require("express"); //
const path = require("path"); //
const fs = require("fs"); //
const util = require("util"); //

// Sets up server
const app = express(); //
const PORT = process.env.PORT || 3001; //

// Middleware to parse data
app.use(express.urlencoded({ extended: true })); //
app.use(express.json()); //

// Middleware to reference files in public directory
app.use(express.static('./develop/public')); //

//Routes
require("./develop/routes/apiRoutes")(app);
require("./develop/routes/htmlRoutes")(app);

app.listen(PORT, () => 
    console.info(`App listening at http://localhost:${PORT}`)
); //
