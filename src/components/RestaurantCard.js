import { useContext } from "react";
import UserContext from "../utils/UserContext";

const RestaurantCard = (props) => {
  const { resData } = props;
  const {
    name,
    cuisines,
    avgRating,
    costForTwo,
    sla: { slaString },
  } = resData;
const {user} = useContext(UserContext);

  return (
    <div className="m-4 p-4 w-[250px] h-auto rounded-lg bg-gray-100 hover:bg-gray-300">
      <img
        className="rounded-lg"
        alt="res-logo"
        src="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/RX_THUMBNAIL/IMAGES/VENDOR/2025/8/1/40543929-19e3-4c0b-b205-f4164853ff38_979485%20(1).jpg"
      />
      <h3 className="font-bold py-2 text-xl">{name}</h3>
      <h4>{cuisines}</h4>
      <h4>{avgRating + " stars"}</h4>
      <h4>{costForTwo}</h4>
      <h4>{slaString}</h4>
      <h4>{user}</h4>
    </div>
  );
};

export const withPromotedLabel = (RestaurantCard) => {
  return (props) => {
    return (
      <div>
        <div>Promoted</div>
        <RestaurantCard {...props} />
      </div>
    );
  };
};

export default RestaurantCard;
