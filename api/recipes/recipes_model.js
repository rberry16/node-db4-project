const get = () => {
    return 'this is where the fun begins!'
}

const getByRecipeID = (recipe_Id) => {
    return Promise.resolve(`cool recipe with id of ${recipe_Id}`);
}


module.exports = {
    get,
    getByRecipeID
};