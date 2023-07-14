import { Link } from "react-router-dom";

const CategoryCard = ({ category, description, imageUrl }) => {
  return (
    <Link to={`/category/${category}`}>
      <div className="p-4 m-2 w-[30vh] border-2 flex flex-col items-center">
        <div>
          <img className="h-20 w-30 object-content" src={imageUrl} alt="" />
        </div>
        <div className="">
          <p className="font-bold text-center p-2">{category}</p>
          <p className="text-center">
            {description.length > 200
              ? `${description.substring(0, 200)}...`
              : description}
          </p>
        </div>
      </div>
    </Link>
  );
};

export default CategoryCard;
