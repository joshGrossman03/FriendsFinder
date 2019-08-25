// Dependencies

const express = require('express');
const app = express();

//Express App Setup and PORT assignment

const PORT = process.env.PORT || 3000;

//Express app data parsing;
app.use(express.urlencoded({extended:true}));
app.use(express.json());

// routing dependencies

require("./routing/apiRoutes.js")(app);
require("./routing/htmlRoutes.js")(app);





//Listen for the route requests
app.listen(PORT, ()=>{
    console.log("App listening on PORT" + PORT);
});
