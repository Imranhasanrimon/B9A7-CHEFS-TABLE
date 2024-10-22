import { useState } from "react";

const Sidebar = ({ wanted, setWanted }) => {

    const [cooked, setCooked] = useState([]);

    const handlePreparing = (want) => {

        const cooking = wanted.filter(item => item.recipe_id !== want.recipe_id);
        setWanted(cooking);

        const newCooked = [...cooked, want];
        setCooked(newCooked)
    }


    return (
        <div className="border lg:col-span-5  rounded-lg">
            <div className="py-6">
                <h3 className=" text-center  text-2xl font-medium">Want to cook: {wanted.length}</h3>
                <div className="divider w-2/3 mx-auto mt-0"></div>

                <div className="overflow-x-auto">
                    <table className="table">
                        {/* head */}
                        <thead>
                            <tr>
                                <th>Id</th>
                                <th>Name</th>
                                <th>Time</th>
                                <th>Calories</th>
                                <th></th>
                            </tr>
                        </thead>
                        <tbody>
                            {/* row 1 */}
                            {
                                wanted.map(want => <tr key={want.recipe_id} className="bg-base-200 text-xs">
                                    <th>{want.recipe_id}</th>
                                    <td>{want.recipe_name}</td>
                                    <td>{want.preparing_time} minutes</td>
                                    <td>{want.calories} calories</td>
                                    <td><button onClick={() => handlePreparing(want)} className="btn btn-accent btn-xs mt-3 rounded-full">Preparing</button></td>
                                </tr>)
                            }

                        </tbody>
                    </table>
                </div>


                {/* Currently Cooking */}
                <h3 className=" text-center  text-2xl font-medium mt-5">Currently Cooking: {cooked.length}</h3>
                <div className="divider w-2/3 mx-auto mt-0"></div>

                <div className="overflow-x-auto">
                    <table className="table">
                        {/* head */}
                        <thead>
                            <tr>
                                <th>Id</th>
                                <th>Name</th>
                                <th>Time</th>
                                <th>Calories</th>
                            </tr>
                        </thead>
                        <tbody className="">
                            {/* row 1 */}
                            {
                                cooked.map(cook => <tr key={cook.recipe_id} className=" bg-base-200 text-xs">
                                    <th>{cook.recipe_id}</th>
                                    <td>{cook.recipe_name}</td>
                                    <td>{cook.preparing_time} minutes</td>
                                    <td>{cook.calories} calories</td>
                                </tr>)
                            }

                            <tr>
                                <th></th>
                                <th></th>
                                <th>Total Time: <br /> {
                                    cooked.reduce((acc, num) => acc + num.preparing_time, 0)
                                } minutes</th>
                                <th>Total Calories: <br /> {
                                    cooked.reduce((acc, num) => acc + num.calories, 0)
                                } calories</th>
                            </tr>

                        </tbody>
                    </table>
                </div>




            </div>
        </div>
    );
};

export default Sidebar;