import useRestaurantMenu from "../utils/useRestaurantmenu";
import Shimmer from "./Shimmer";
import { useParams } from "react-router-dom";
import RestaurantCategory from "./RestaurantCategory";
import { useState } from "react";

const RestaurantMenu = () => {
  const [showItemIndex, setShowItemIndex] = useState(0);

  const { id } = useParams();
  const resData = useRestaurantMenu(id);

  if (resData == null) return <Shimmer />;

  const { name, costForTwoMessage } = resData?.cards[2]?.card?.card?.info || {};

  const categories =
    resData?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards.filter(
      (c) =>
        c?.card?.card?.["@type"] ===
        "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory"
    );

  return (
    <div className="text-center">
      <h1 className="font-bold my-8 text-2xl">{name}</h1>
      <p className="font-bold text-lg">{costForTwoMessage}</p>
      {categories.map((c, index) => (
        <RestaurantCategory
          key={c?.card?.card?.title}
          data={c?.card?.card}
          isOpen={index === showItemIndex ? true : false}
          setShowItemIndex={() => setShowItemIndex(index)}
        />
      ))}
    </div>
  );
};

export default RestaurantMenu;
