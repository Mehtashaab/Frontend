import React from "react";

const UserCard = ({data})=>{
    return(
        <div className="user-card">
            <img className="user-img"/>
            <h2>{data.name.first}</h2>
            <p>{data.phone}</p>
            <p>{data.location.city},{data.location.state}</p>
        </div>
    )
}

export default UserCard;