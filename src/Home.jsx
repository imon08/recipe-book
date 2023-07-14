import { useEffect, useState } from "react";
import axios from "axios";
import CategoryCard from "./CategoryCard";

const Home = () => {
  const [category, setCategory] = useState([]);

  useEffect(() => {
    axios
      .get(`https://www.themealdb.com/api/json/v1/1/categories.php`)
      .then((res) => {
        setCategory(res.data.categories);
      });
  }, []);

  return (
    <div>
      <div>
        <img
          src="https://c4.wallpaperflare.com/wallpaper/758/841/284/spoon-food-spices-pepper-wallpaper-thumb.jpg"
          alt=""
          className="w-full h-[30vh] object-cover"
        />
      </div>
      <div className="flex justify-center text-center text-5xl p-3 font-semibold text-orange-900">
        Choose a category to explore recipe
      </div>
      <div className="flex flex-wrap justify-around">
        {category.map((item) => {
          return (
            <CategoryCard
              key={item.idCategory}
              category={item.strCategory}
              description={item.strCategoryDescription}
              imageUrl={item.strCategoryThumb}
            />
          );
        })}
      </div>
    </div>
  );
};

export default Home;
