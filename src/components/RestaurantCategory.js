import ItemList from "./ItemList";

const RestaurantCategory = ({data, isOpen, setShowItemIndex}) => {

    return (
        <div className="w-6/12 bg-gray-50 mx-auto shadow-lg p-3 m-2 ">
            <div className="flex justify-between cursor-pointer" onClick={()=> setShowItemIndex()}>
                <span>{data.title} ({data.itemCards.length})</span>
                <span>{isOpen ? "↑" : "↓"}</span>
            </div>
            {isOpen && <ItemList items={data.itemCards}/>}
        </div>
    )
}

export default RestaurantCategory;