const express = require('express');
const router = express.Router();


router.get('/artigos', (req,res)=> {
    res.render('articles/index')
});

module.exports = router;