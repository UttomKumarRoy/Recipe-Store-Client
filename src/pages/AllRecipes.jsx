import { useEffect, useState } from "react";
import RecipeCard from "./RecipeCard";
import axios from "axios";

const AllRecipes = () => {
    const [recipes, setRescipes] = useState([]);


    useEffect(() => {
        async function fetchData(){

            const data= await axios.get('http://localhost:3000/recipes')
            if (data?.status === 200) {
                setRescipes(data?.data);
              }
        }
        fetchData()
    })
    return (
          <div className="flex justify-center items-center min-h-screen bg-gray-100">
            <div className="flex flex-wrap justify-center"> 
            {recipes?.map((recipe) => (
            <RecipeCard key={recipe?.id} recipe={recipe} />
          ))}
        </div>
        </div>
    );
};

export default AllRecipes;