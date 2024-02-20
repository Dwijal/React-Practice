import UserClass from "./UserClass"
import React from "react"
import { lazy } from "react"
import UserContext from "../utils/UserContext"
// const About=()=>{
 
//     return (
//         <div className="about-div">
//             <h1>I am from About Page</h1>
//             <UserClass/>
//         </div>
//     )

// }



class About extends React.Component{
    
    constructor(props){
        super(props)
        console.log("Parent constructor called")

        this.state={
            data:{name:"Dwjal"}
        }
    }
    
    componentDidUpdate(){
        console.log("I am from component Did update")
    }

    componentWillUnmount(){
        console.log("I am from component will unmount")
    }

   async componentDidMount(){
        const data= await fetch("https://api.github.com/users/dwijal")
        const jsonData= await data.json()
        console.log(jsonData)
        this.setState({
            data:jsonData
        })
        // console.log(data)
        console.log("Parent compoonent did mount method called")
    }

    render(){
        const {login,avatar_url}=this.state.data  
        console.log("Parent render method called")

        return (
            <div className="flex flex-col items-center gap-y-10 text-xl">
            <h1>I am from About Page</h1>
            <h2>Name: {login}</h2>
            <img className="w-3/12" src={avatar_url}/>
            {/* <UserClass/> */}

            <UserContext.Consumer>
                {(data)=><h1>{data.loggedInStatus}</h1>}
            </UserContext.Consumer>
        </div>
    )
}
}
export default About