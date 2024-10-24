import Recipes from "./Recipes";
import { useEffect, useState } from "react";
import Sidebar from "./Sidebar";

const Main = () => {
    const [recipes, setRecipes] = useState([]);
    useEffect(() => {
        fetch('food.json')
            .then(res => res.json())
            .then(data => setRecipes(data))
    }, []);

    const [wanted, setWanted] = useState([]);

    const handleWanted = (recipy) => {
        const isExist = wanted.find(item => item.recipe_id === recipy.recipe_id);
        if (!isExist) {
            const newRecipy = [...wanted, recipy];
            setWanted(newRecipy);
        } else {
            alert('This recipy has been added')
        }
    }


    return (
        <div className="py-24">
            {/* heading  */}
            <div className="text-center max-w-2xl mx-auto">
                <h3 className="text-4xl font-semibold">Our Recipes</h3>
                <p className="mt-6 mb-10">Lorem ipsum dolor sit amet consectetur. Proin et feugiat senectus vulputate netus pharetra rhoncus. Eget urna volutpat curabitur elementum mauris aenean neque. </p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-12 gap-4">
                <Recipes handleWanted={handleWanted} recipes={recipes}></Recipes>
                <Sidebar setWanted={setWanted} wanted={wanted}></Sidebar>
            </div>

        </div>
    );
};

export default Main;