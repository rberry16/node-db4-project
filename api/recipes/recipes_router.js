const router = require('express').Router();

router.use('*', (req, res, next) => {
    res.json(`it's working! it's working!`);
})

module.exports = router;

