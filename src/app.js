import React, { useEffect } from "react";
import ReactDOM from "react-dom/client";
import Header from "./components/Header"
import Body from "./components/Body"
// import resList from "./utils/con"
import { createBrowserRouter, RouterProvider,Outlet } from "react-router-dom";
import About from "./components/About"
import Error from "./components/Error"
import Restaurant from "./components/Restaurant";
import { lazy,Suspense } from "react";
import useStatus from "./utils/useStatus";
import { useState } from "react";
// import Contact from "./components/Contact";
import UserContext from "./utils/UserContext";
import { Provider } from "react-redux";
import store from "./Store/store"


const Contact= lazy(()=>import("./components/Contact"))

const App = () => {

  const [userName,setUserName]=useState(null)

  useEffect(()=>{
//apicall 
const data= {
  name:"Dwijal"
}
setUserName(data.name)
  },[])


  return (
    // <UserContext.Provider value={{loggedInStatus:userName,setUserName}}>
    <Provider store={store}>
    <div id="appContainer">
      <Header />
     
      <Outlet/>
      
    </div>
    </Provider>
    // {/* </UserContext.Provider> */}
  );
};

let appRouter= createBrowserRouter([
  {
    path:"/",
    element:<App/>,
    errorElement:<Error/>,
    children:[ 
      {
      path:"/about",
      element:<About/>
    },
    {
      path:"/body",
      element:<Body/>
    },
    {
      path:"/restaurants/:resId",
      element:<Restaurant/>
    },
  
    {
      path:"/contact",
      element:<Suspense fallback={<h1>Loading....</h1>}><Contact/></Suspense>
    }
  
  ]
  }
 ])



const root = ReactDOM.createRoot(document.querySelector(".root"));

root.render(<RouterProvider router={appRouter}/>);



