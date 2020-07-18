const express = require('express');

// database access using knex
const knex = require('../data/db-config.js');

const router = express.Router();

// router.get('/', (req, res) => {
//     // 
//     knex('posts')
//     .then(posts => {
//         res.json(posts);
//     })
//     .catch( err => {
//         console.log(err);
//         res.json(500).json({message: 'problem with db', error:err})
//     });
// });

router.get('/',  async (req, res, next) =>{

    try {
        const posts = await knex('posts');
        console.log(posts)
        res.json(posts);
    } catch (err) {
         console.log(err);
         res.json(500).json({ message: "problem with db", error: err });
    }
})

router.get('/:id', async (req, res) => {
    try {
        const id = req.params;
        const posts = await knex('posts').where(id);
        res.json(posts)
    } catch (err) {
         console.log(err);
         res.json(500).json({ message: "problem with db", error: err });
    }

});

router.post('/', (req, res) => {

});

router.put('/:id', (req, res) => {

});

router.delete('/:id', (req, res) => {

});

module.exports = router;