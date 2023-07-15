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
        setRecipeComponents(res.data.meals[0]);
      });
  }, [params]);

  const IngredientsMeasurements = () => {
    const copy = JSON.parse(JSON.stringify(recipeComponents));
    console.log(copy);
    const result = {};
    for (const key in copy) {
      const ingredientNumber = key.replace("strIngredient", "");
      const measureKey = "strMeasure" + ingredientNumber;
      result[(copy[key] = copy[measureKey])];
    }
    console.log(result);
    return JSON.stringify(result);
  };

  return (
    <div>
      <div
        key={recipeComponents?.idMeal}
        className="flex flex-col items-center w-screen h-screen relative "
      >
        {" "}
        <img
          className="object-cover h-full w-full opacity-1 absolute z-[-2]"
          src={recipeComponents?.strMealThumb}
          alt=""
        />
        <div className="bg-black h-full w-full absolute opacity-80 z-[-1]"></div>
        <div className="h-full w-full flex flex-col items-center p-5">
          <div className="w-[30vw] h-[30vh] border-2 m-5 border-white p-2 overflow-hidden rounded-xl">
            <img
              className="object-cover h-full w-full rounded-lg"
              src={recipeComponents?.strMealThumb}
              alt=""
            />
          </div>
          <div className="text-white text-3xl">{recipeComponents?.strMeal}</div>
          <div className="flex justify-start text-white text-2xl mt-5 ml-5 w-full">
            Ingredients Required
          </div>
        </div>
      </div>
      {IngredientsMeasurements()}
    </div>
  );
};

export default RecipePage;
