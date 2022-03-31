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
    res.render('project', {projectId});
});
module.exports = router;