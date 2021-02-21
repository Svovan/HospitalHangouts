const mongoose = require('mongoose')

const router = require('express').Router();
let User = require('../models/user.model');

router.route('/signup').post((req, res) => {
    //grab username, create new User
    const username = req.body.username;
    const password = req.body.password;
    const info = req.body.info;
    const newUser = new User({username, password, info});
    //save to database then respond with status
    newUser.save()
        .then(() => res.status(200).json('User added!'))
        .catch(err => res.status(409).json('Error: ' + err))
});

router.route('/login').post((req, res) => {
    data = {
        username: req.body.username,
        password: req.body.password
    }
    User.findOne(data)
        .then(user => res.status(200).json(user))
        .catch(err => res.status(401).json("Bad credentials. Error: " + err))
});

router.route('/update').post((req, res) => {
    data = {
        username: req.body.username,
        info: req.body.info
    }
    console.log(data);
    User.findOneAndUpdate({username: req.body.username}, {info: req.body.info}, { new: true})
        .then(user => {
            console.log(user);
            res.status(200).json(user);
            })
        .catch(err => res.status(400).json("Can't update. Error: " + err))
});

module.exports = router;