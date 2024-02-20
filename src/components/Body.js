import { useState, useEffect, useContext } from "react";
import resList from "../utils/mockData"
import RestaurantCard from "./RestaurantCart";
import Shimmer from "./Shimmer";
import { Link } from "react-router-dom";
import useBodyData from "../utils/useBodyData";
import useStatus from "../utils/useStatus"
import { enhancedRestaurantCard } from "./RestaurantCart";
import UserContext from "../utils/UserContext";

  //search Logic  



const Body = () => {
    console.log("After render body component")

    let [valueSearch,setValueSearch]=useState("")
    const [listOfRes,setListOfRes] =useState([])
    const[newList,setNewList]=useState([])

    let {loggedInStatus,setUserName}= useContext(UserContext)

  
    useEffect(()=>{
      console.log("above fetchData")

        fetchData()
    },[])
  
  const fetchData= async ()=>{
  let json
   // let data= await fetch("https://www.swiggy.com/mapi/homepage/getCards?lat=19.1842299&lng=72.94531839999999")
   setTimeout(()=>{
     json=resList
     setListOfRes(json)
     setNewList(json)
   },500)   
  
  }
 

  //calling enhancedRestaurant Card

  const PromotedCard= enhancedRestaurantCard(RestaurantCard)
   
  const status = useStatus()

  if(status===false) return <h1>You are offline</h1>

   if(listOfRes.length===0){
     return ( <Shimmer/>)
    }  

   
    
    
    
    return (
      <div className="">
        <div className="filter">
            <button className="bg-orange-200 w-32 rounded-sm text-lg relative top-9 left-8" onClick={()=>{
            
                const filteredList=listOfRes.filter(
                    (e)=> e.data.sla.deliveryTime<20
                    );
                 setNewList(filteredList)   
                // console.log(resList)
            }} >Filter Cards</button>
        </div>



        <div className="ml-72 mt-1">
            <input className="text-xl p-4 w-60 h-6 border border-orange-200"
            type="text"
            value={valueSearch}
            onChange={(e)=>{
                // console.log("yes")
                setValueSearch(e.target.value)
            }}
            />
            <button className="bg-orange-200 w-32 rounded-sm text-lg ml-4 " onClick={()=>{
              
              const data= listOfRes.filter((ele)=>{
                return ele.data.name.includes(valueSearch)
              })
              
              setNewList(data)

            }}>Search</button>

            <input className="border border-orange-200 ml-8 text-xl w-60" 
            type="text"
            value={loggedInStatus}
            onChange={(e)=>setUserName(e.target.value)}  />
        </div>
    


        <div className="flex gap-10 flex-wrap mt-16 ml-2">
            {console.log(newList)}
  
          {
              newList.map((restaurant)=>(
                // console.log(restaurant)
                <Link to={"/restaurants/"+restaurant.data.id} key={restaurant.data.id}>
                  {
                    restaurant.data.promoted?<PromotedCard food={restaurant}/>:
                    <RestaurantCard   food={restaurant} />
                  }
                 
                </Link>
              ))
              
              
          }
          {console.log("After render 2")}
      
        </div>
      </div>
    );
  };


export default Body


// 