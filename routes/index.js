const express = require('express');
const router = express.Router();

/* GET home page */
router.get('/', (req, res, next) => {
    res.render('index');
});

router.get('/api/data', (req, res, next) => {
    const data = [7, 25, 20, 12, 32, 45, 10, 3, 6, 100]
    res.status(200).json(data)
})
module.exports = router;