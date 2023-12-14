import React, { useEffect, useState } from "react";

function Form(){
    const [msg,setmsg]=useState("Intial Message");
    const [count,setCount]=useState(0);
    

    function handeClick(){
        setmsg("message changed");
    }

    useEffect(()=>{
        console.log("it is uppdated"); 
    })

    return(
        <div>
            <h1>Count is :{count}</h1>
            <button onClick={()=>{setCount(count+1)}}>Increment</button>
            <button onClick={handeClick}>change</button>
            <p>{msg}</p>
        </div>
    )
}

export default Form;