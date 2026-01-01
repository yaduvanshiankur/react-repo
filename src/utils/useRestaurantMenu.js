import { MENU_API } from "./constants";
import { useEffect, useState } from "react";

const useRestaurantMenu = (resId) => {

    const [resInfo, setResInfo] = useState(null);
    
    useEffect(() => {
        fetchMenu();
    },[])

    const fetchMenu = async () => {
        const fetchMenu = await fetch(MENU_API + resId);
        const json = await fetchMenu.json();
        setResInfo(json?.data);
    }

    return resInfo;
}

export default useRestaurantMenu;