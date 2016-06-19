/*jslint node: true */
/*jshint esnext: true */

'use strict';

// require variables
var express = require('express');

// global variables 
var app = express();   
     
// create route for root of server
app.get('/', (req, res) => {
    res.send('<h1>Hello World</h1>');    
}); 
 
// setup frontend dev server using express
app.listen(3000, () => {
    console.log('The frontend server is running on port 3000');
});