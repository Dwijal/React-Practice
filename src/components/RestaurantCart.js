import { CARD_IMG } from "../utils/constants";
import { Link } from "react-router-dom";
const RestaurantCard = (props) => {
  // console.log(props)
    const {food}=props

    const{data:{name,cuisines,costForTwo,cloudinaryImageId,sla:{deliveryTime}}}=food


  return (
    
    
    <div className="flex flex-col h-96 border border-black items-center justify-evenly max-w-80 max-h-96">
      <div className="w-80 flex justify-center">
        <img
          src={CARD_IMG+cloudinaryImageId}
          className="max-w-72"
        />
      </div>
      <div className="text-sm w-72 flex flex-col gap-y-2">
        <h4 className="font-bold text-lg">{name}</h4>
        <h4 className="font-semibold">{cuisines.map(item=>item+"   ")}</h4>
        <h4 className="font-semibold">{costForTwo/100}</h4>
        <h4 className="font-semibold">Avg Delivery Time  {deliveryTime}</h4>
      </div>
    </div>
    
  );
};

// console.log(RestaurantCard,"in res component")

export const enhancedRestaurantCard=(RestaurantCard)=>{

  return (props)=>{
   
    return (

      <div className="relative max-w-80 max-h-96">
        <span className="absolute top-6  bg-black text-white text-base rounded-lg">Promoted</span>
        {/* <RestaurantCard food={props}/> */}
        <RestaurantCard {...props}/>
      </div>
    )
  }
}


export default RestaurantCard