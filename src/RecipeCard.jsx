import { Link } from "react-router-dom";

const RecipeCard = ({ categoryName, meal, imageUrl }) => {
  return (
    <Link to={`/category/${categoryName}/${meal}`}>
      <div className="p-4 m-2 w-[30vh] border-2 flex flex-col items-center rounded-lg">
        <div>
          <img className="h-20 w-30 object-content" src={imageUrl} alt="" />
        </div>
        <div className="">
          <p className="font-bold text-center p-2">{meal}</p>
        </div>
      </div>
    </Link>
  );
};

export default RecipeCard;
