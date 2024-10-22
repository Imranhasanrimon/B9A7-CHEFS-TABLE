
const recipy = ({ recipy, handleWanted }) => {
    const { recipe_name, recipe_image, ingredients, short_description, preparing_time, calories } = recipy;
    return (
        <div className="border rounded-lg p-3">
            <img className="w-full h-48 rounded-xl" src={recipe_image} alt="" />
            <h2 className="text-xl font-semibold my-2">{recipe_name}</h2>
            <p>{short_description}</p>
            <h2 className="text-lg font-semibold mt-3 mb-2">Ingredients: {ingredients.length}</h2>
            {
                ingredients.map((ingredient, i) => <li key={i}>{ingredient}</li>)
            }
            <div className="divider"></div>
            <div className="flex justify-between items-center">
                <p><i className="fa-regular fa-clock mr-2"></i>{preparing_time} minutes</p>
                <p><i className="fa-solid fa-fire-flame-curved mr-2"></i>{calories} calories</p>
            </div>
            <button onClick={() => handleWanted(recipy)} className="btn btn-accent btn-sm mt-3 rounded-full">Want to Cook</button>
        </div>
    );
};

export default recipy;