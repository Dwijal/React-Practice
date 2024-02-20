import { useEffect, useState } from "react"
import { CARD_IMG } from "../utils/constants"
import { useDispatch } from "react-redux"
import { addObj } from "../Slices/cart"
import { ALT_IMG } from "../utils/constants"

const Categories=(props)=>{
    const {data:{itemCards}}=props
    // console.log(itemCards,"From categories.")

   const cartUseDispatch= useDispatch() 

  const addToCart=(res)=>{
    cartUseDispatch(addObj(res))
  }
    
    return (

        <div className="w-full">

          {
            itemCards.map((res)=>(
                <div className="flex justify-between items-center border border-b-lime-950 m-2" >
                    <div className="cat-w ">
                    <h1 className="text-2xl p-2 m-2">{res.card.info.name}</h1>
                    <h1 className="pl-4  text-xl">{res.card.info.description}</h1>
                    <h1 className="pl-4 pt-2 text-xl font-medium">Rs. - {res.card.info.price?(res.card.info.price)/100:(res.card.info.defaultPrice)/100}</h1>
                    </div>
                    <div className="max-w-48 min-w-44 min-h-24 border border-black relative">
                    <img  className="max-w-48" src={res.card.info.imageId?CARD_IMG+res.card.info.imageId:ALT_IMG}/>
                    <button className="absolute top-20   left-14 bg-orange-400 w-20 size-8 text-xl"
                    onClick={()=>addToCart(res)}>ADD</button>
                    </div>
                </div>
                
            ))
          }
        </div>
    )

}

export const displayCart=(Categories)=>{

  return (props)=>{

    // return (
    //   // <Categories {props}/>
    // )
  }
}

export default Categories