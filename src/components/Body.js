import RestaurantCard,{withPromotedLabel} from "./RestaurantCard";
import { useState , useEffect, useContext} from "react";
import Shimmer from "./Shimmer";
import {Link} from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";
import { RESTAURANT_API } from "../utils/constants";
import UserContext from "../utils/UserContext";

const Body = () => {

  const [res, setRes] = useState([]);
  const [filteredRes, setFilteredRes] = useState([]);
  const [searchText, setSearchText] = useState("");
  const onlineStatus = useOnlineStatus();
  const {user,setUserName} = useContext(UserContext);

  const PromotedrestaurantCard = withPromotedLabel(RestaurantCard);
  
  useEffect(() => {
      fetchRestaurants();
  }, [])

  async function fetchRestaurants () {
    const res = await fetch(RESTAURANT_API);

    const json = await res.json();
    setRes(json.data.data.cards[1].card.card.gridElements.infoWithStyle.restaurants);
    setFilteredRes(json.data.data.cards[1].card.card.gridElements.infoWithStyle.restaurants);
  }

  if(onlineStatus == false) return <h1>OOPS! Looks like youre offline</h1>;

  return res.length === 0 ? (<Shimmer />) : (
    <div className="body">
      <div className="flex">
        <div className="search">
            <input type="text" 
            className="border border-solid border-black rounded-sm" 
            value={searchText} 
            onChange={(e) => setSearchText(e.target.value)} />
            <button className="px-4 py-1 bg-green-100 m-4 rounded-md" onClick={() => {
                const searchedRes = res.filter((restaurant) => {
                    return restaurant.info.name.toLowerCase().includes(searchText.toLowerCase());
                })
                setFilteredRes(searchedRes);
            } }> Search</button>
        </div>
        <button className="px-4 bg-gray-100 m-4 rounded-md" onClick={() => {
            const filteredList = res.filter((data) => data.info.avgRating > 4.4);
            setRes(filteredList);
        }}>
          Top rated restaurants
        </button>
        <div className="flex items-center">
          <label>Username </label>
          <input value={user} className="border border-black" type="text" onChange={(e) => setUserName(e.target.value)}/>
        </div>
      </div>
      <div className="flex flex-wrap">
        {filteredRes.map((restaurant) => (
          <Link key={restaurant.info.id} to={"/restaurant/"+restaurant.info.id}>
            {restaurant.info.promoted ? 
            <PromotedrestaurantCard resData={restaurant.info}/> : 
            <RestaurantCard resData={restaurant.info} />}
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Body;
