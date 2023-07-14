import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import RecipeCard from "./RecipeCard";

const CategoryPage = () => {
  const params = useParams();
  const [recipe, setRecipe] = useState([]);

  useEffect(() => {
    axios
      .get(
        `https://www.themealdb.com/api/json/v1/1/filter.php?c=${params.categoryName}`
      )
      .then((res) => {
        setRecipe(res.data.meals);
      });
  }, [params]);
  return (
    <div>
      <div className="flex justify-center m-3 text-3xl font-bold">{params.categoryName} Recipes</div>
      <div className="flex flex-wrap justify-around">
        {recipe?.map((item) => {
          return (
            <RecipeCard
              key={item.idMeal}
              categoryName={params.categoryName}
              meal={item.strMeal}
              imageUrl={item.strMealThumb}
            />
          );
        })}
      </div>
    </div>
  );
};

export default CategoryPage;
