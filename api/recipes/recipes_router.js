const router = require('express').Router();
const Rec = require('./recipes_model');

router.get('/:recipe_id', (req, res, next) => {
    Rec.getByRecipeID(req.params.recipe_id)
        .then(result => {
            res.status(200).json(result);
        })
        .catch(next);
});

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

