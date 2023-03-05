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
app.use(express.urlencoded({ extended: true })); //
app.use(express.json()); //

// Middleware to reference files in public folder
app.use(express.static('./public')); //

//Routes
//require("./routes/apiRoutes")(app);
//require("./routes/htmlRoutes")(app);
app.use('/', htmlRoutes)
app.use('/api', apiRoutes)

app.listen(PORT, () => 
    console.info(`App listening at http://localhost:${PORT}`)
); //

//something about the routes is wrong. alter them