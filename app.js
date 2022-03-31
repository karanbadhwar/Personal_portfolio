const express = require('express');
const app = express();

//Pug Engine
app.set('view engine', 'pug');

//static files
app.use('/static', express.static('public'));

// routes
const router = require('./routes/index');

//<-------This route is not letting me redirect or go to other routes
// app.use('/', (req,res) => {
//     res.redirect('/home');
// })

// <------This is not working if i Comment out '/' route
// app.use('/home', router);
app.use('/', router);




app.listen(3000, () => {
    console.log('App is Listening at port:3000!!');
})
