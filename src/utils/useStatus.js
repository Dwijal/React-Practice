import { useEffect, useState } from "react"




const useStatus =()=>{

const [valueBoolean,setvalueBoolean]= useState(true)

useEffect(()=>{
    window.addEventListener("offline",(e)=>{
        setvalueBoolean(false)})
    
    window.addEventListener("online",(e)=>{
        setvalueBoolean(true)})
    
},[])


  return valueBoolean  

}

export default useStatus