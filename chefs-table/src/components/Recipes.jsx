import Recipy from './Recipy'
const Recipes = ({ recipes }) => {

    return (
        <div className="col-span-7  grid grid-cols-2 gap-4">
            {
                recipes.map(recipy => <Recipy key={recipes.id} recipy={recipy}></Recipy>)
            }
        </div>
    );
};

export default Recipes;
