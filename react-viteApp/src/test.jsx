// function Test(){
//     return(
//         <h3>chai is ready</h3>
//     )
// }

// export default Test

import React,{useEffect,useState} from "react";

function Stopwatch(){
    const [count,setCount] = useState(0)

    useEffect(()=>{
        console.log("Adding new Interval")
        const timer = setInterval(()=>setCount(prevCount=>prevCount+1),1000)
        return ()=>{console.log("Removing old Interval")
            clearInterval(timer)
        }
     },[]
    )

     return(
         <div>
             <h1>Stopwatch</h1>
             <h2>{count}</h2>
           
         </div>
     )
}

export default Stopwatch;