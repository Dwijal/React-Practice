import { useEffect, useState } from "react"
import Shimmer from "./Shimmer"
import { useParams } from "react-router-dom"
import useRestaurantData from "../utils/useRestaurantData"
import Menu from "./Menu"

const Restaurant=()=>{
 const {resId}=useParams() 

 let apiData= useRestaurantData(resId)   
 const [showIndex,setShowIndex]= useState(null)

 let isVisible=false

 if(apiData===null || apiData===undefined) return <Shimmer/>

const {name}=apiData?.data?.cards[0].card.card.info
 const {cards}=apiData?.data?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR

 const filterCards=cards.filter((res)=>{
        return res?.card?.card?.["@type"]==="type.googleapis.com/swiggy.presentation.food.v2.ItemCategory"
    })

    // console.log(apiData)


    return (
        <div className="mt-12">
            <h1 className="w-3/12 text-center m-auto mb-12 text-4xl ">
                Welcome to {name}</h1>
          {
              filterCards.map((res,index)=>(
               
                
                 <Menu 
                    key={res.card.card.title}
                    showItem={index===showIndex && true} 
                    data={res} 
                    setShowIndex={()=>setShowIndex(index)}
                    />
                
    ))
                }
       
        </div>
    )
}
// .cardGroupMap.REGULAR.cards[1].card.card.itemCards

export default Restaurant

// console.log(res.card.card?.title)

/*const [apiData,setApiData]=useState(null)
useEffect(()=>{
    fetchData()
},[])

const {resId}=useParams()    
console.log(resId)

const fetchData= async()=>{

setTimeout(()=>{
    setApiData(resList)
    console.log(resList)
},1000)
}   */




