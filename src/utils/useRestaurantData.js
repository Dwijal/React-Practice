import { useEffect,useState } from "react";
import resList from "./mockData"
// import { MENU_API } from "./constants";
const useRestaurantData=(resId)=>{
  
    const [apiData,setApiData]= useState(null)
  

    useEffect(()=>{

        fetchData()
        console.log("Inside useEffect")
    },[])

   
    const fetchData= async ()=>{
        console.log("Inside fetchData ")
      
            const data = await fetch("https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=21.1702401&lng=72.83106070000001&&submitAction=ENTER&restaurantId="+resId)
            let jsonData= await data.json()
            setApiData(jsonData)
            // console.log("-------",jsonData)
           
        
    }
    if(apiData!==null)console.log(apiData,"From compoonent")
    return apiData;
}


export default useRestaurantData