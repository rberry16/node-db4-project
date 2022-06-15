const router = require('express').Router();
const Rec = require('./recipes_model');

router.use('*', async (req, res) => {
    const th = await Rec.get();
    res.json(th);
})

router.use((err, req, res, next) => {//eslint-disable-line
    res.status(500).json({
        customMessage: `houston we have a problem`,
        message: err.message,
        stack: err.stack
    })
})

module.exports = router;

