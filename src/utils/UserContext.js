import { createContext } from "react";


const UserContext=createContext({
    loggedInStatus:"DefaultUser"
})


export default UserContext