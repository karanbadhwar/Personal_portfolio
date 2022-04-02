const express = require('express');
const app = express();

//Pug Engine
app.set('view engine', 'pug');

//static files
app.use('/static', express.static('public'));

// routes
const router = require('./routes/index');

app.use('/', router);

app.get('/', (req,res) => {
         res.redirect('/home');
     })

app.use((req,res,next) =>{
    const err = new Error();
    err.status = 404;
    err.message= ['Lost Your Way Eh?', 'Sorry mate, This page does not exist, let us guide you the way back to Home Page!!']
    res.render('page-not-found', {err})
});

app.use((err,req,res,next) =>{
    res.status(err.status || 500);
    err.status = 500
    err.message = ['Server Error', 'We appologize for the inconvenience, We are working on it.']
    res.render('error', {err})
});

app.listen(3000, () => {
    console.log('App is Listening at port:3000!!');
})
