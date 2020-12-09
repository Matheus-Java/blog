const express = require('express');
const router = express.Router();

router.get('/categorias', (req,res)=> {
    res.send("Nova rotas")
});

module.exports = router;