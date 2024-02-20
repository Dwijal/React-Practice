import Categories from "./Categories"
import {useState} from "react"

const Menu =({data,showItem,setShowIndex})=>{

   
    const {card:{card}}=data
   
    // console.log(setShowIndex,"from menu component")
 
    function openCard(){

    setShowIndex()
  

    }
    


    return (
        <div className="mt-2 ">
             
        <div className="bg-orange-50 w-6/12 m-auto cursor-pointer" onClick={openCard} >
            
            <div className="text-3xl flex justify-between items-center">
          
            <h1 className="p-4">{card.title}</h1>
            <span className="pr-8">⮯</span>
            </div>
            <div className="flex justify-center">
                {showItem && <Categories   data={card}/>}
            </div>
        </div>
        </div>
    )
}

export default Menu