'use strinct'

const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const Comment = require('./model/comments');

const app = express();
const router = express.Router();

const port = process.env.port || 3001;

mongoose.connect('mongodb://maxim:qvez21@ds239638.mlab.com:39638/mern-sample');

app.use(bodyParser.urlencoded({ extended: true}));
app.use(bodyParser.json());



//CORS with middleware
app.use((req, res, next) => {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Credentials', 'true');
    res.setHeader('Access-Control-Allow-Methods',
'GET,HEAD,OPTIONS,POST,PUT,DELETE');
    res.setHeader('Access-Control-Allow-Headers', 
    'Access-Control-Allow-Headers, Origin,Accept, X-Requested-With, Content-Type, Access-Control-Request-Method, Access-Control-Request-Headers');

    res.setHeader('Cache-Control', 'no-cache');
    next();
});

router.get('/', (req, res) => {
    res.json({ message: 'API Initialized!'});
});

router.route('/comment')
.get((req, res) => {
    Comment.find((err, comments) => {
        if (err) 
           res.send(err);

           res.json(comments)
    });

})
.post((req, res) => {
    const comment = new Comment();

    comment.author = req.body.author;
    comment.text = req.body.text;

    comment.save((err) => {
        if (err) 
        res.send(err);
        res.json({ message: 'Comment successfully added!' });
    });
});

app.use('/api', router);



app.listen(port, () => {
    console.log('connected to port ' + port);
});