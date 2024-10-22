import Recipy from './Recipy'
const Recipes = ({ recipes, handleWanted }) => {

    return (
        <div className="lg:col-span-7  grid sm:grid-cols-2 gap-4">
            {
                recipes.map((recipy, i) => <Recipy handleWanted={handleWanted} key={i} recipy={recipy}></Recipy>)
            }
        </div>
    );
};

export default Recipes;
