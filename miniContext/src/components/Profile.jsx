import React,{useContext} from "react";
import UserContext from "../context/UserContext.js";

function Profile(){

    const {user}= useContext(UserContext)
    if(!user) return <h2>please login</h2>

    return(

        <div>
            
            <h2>Hello, {user.username}!</h2>
        </div>
    )
}

export default Profile;