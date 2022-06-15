const db = require('../../data/db-config');

const getByRecipeID = async (recipe_id) => {
    const recipeRows = await db('recipes as r')
        .leftJoin('steps as s', 'r.recipe_id', 's.recipe_id')
        .leftJoin('step_ingredients as si', 'si.step_id', 's.step_id')
        .leftJoin('ingredients as i', 'si.ingredient_id', 'i.ingredient_id')
        .where('r.recipe_id', recipe_id)
    

    const steps = []
    const ingredients = []

    await recipeRows.forEach(rec => {
        if (typeof rec.ingredient_id === 'number') {
            ingredients.push({
                ingredient_id: rec.ingredient_id,
                ingredient_name: rec.ingredient_name,
                quantity: rec.quantity
            })
        }
    })

    await recipeRows.forEach(rec => {
        if (typeof rec.step_id === 'number') {
            steps.push({
                step_id: rec.step_id,
                step_number: rec.step_number,
                step_text: rec.step_text,
                ingredients: [ingredients]
            })
        } 
    })

    

    return {
        recipe_id: recipeRows[0].recipe_id,
        recipe_name: recipeRows[0].recipe_name,
        steps: steps
    };
}


module.exports = {
    // get,
    getByRecipeID
};