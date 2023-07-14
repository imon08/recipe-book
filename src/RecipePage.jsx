import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const RecipePage = () => {
  const [recipeComponents, setRecipeComponents] = useState([]);
  const params = useParams();
  useEffect(() => {
    axios
      .get(
        `https://www.themealdb.com/api/json/v1/1/search.php?s=${params.mealName}`
      )
      .then((res) => {
        setRecipeComponents(res.data.meals);
      });
  }, [params]);
  console.log(params);
  return (
    <div>
      {recipeComponents?.map((item) => {
        return (
          <div
            key={item.idMeal}
            className="flex flex-col items-center m-5 w-screen h-screen"
          >
            <div className="w-[20vw] h-[20vh] border-2 p-2">
              <img className="image-contain" src={item.strMealThumb} alt="" />
            </div>
            <div className="border-2">{item.strMeal}</div>
            <div>Ingredients Required</div>
          </div>
        );
      })}
    </div>
  );
};

export default RecipePage;
