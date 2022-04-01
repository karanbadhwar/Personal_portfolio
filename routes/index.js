const express = require('express');
const router = express.Router();

const {projects} = require('../data.json');


router.use('/home', (req,res,next) => {
    res.render('index', {projects});

});
//Static Files

router.use('/about', (req,res,next) => {
    res.render('about');
});

router.use('/projects/:id', (req,res,next) => {
    const id = req.params.id;
    const projectId = projects[id];
    if(projectId){
        res.render('project', {projectId});
    }else {
        const err = new Error();
        err.status = 404;
        err.message= ['Lost Your Way Eh?', 'Sorry mate, This page does not exist, let us guide you the way back to Home Page!!']
        res.status(err.status);
        res.render('page-not-found', {err})
    }
});
module.exports = router;