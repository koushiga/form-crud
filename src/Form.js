// import React, { useState } from "react";
import {useForm} from "react-hook-form";

function Forminput(){
    
    const{register,handleSubmit,formState:{errors}} = useForm()
    console.log(errors)
   
return(
    <div>

        <form onSubmit={handleSubmit((data)=>{
            console.log(data);
        })}>
        <div>    
        <input type="text" {...register("name",{required:"Name is required"})} placeholder="Enter Your Name"/>
        {errors.name && <p>{errors.name.message}</p>}
        </div>
        <div>
        <input type="password" {...register("psw",{required:"Password is required"})} placeholder="Enter Your Password"/>
        {errors.psw && <p>{errors.psw.message}</p>} 
        </div>
        <input type="submit"/>   
        </form>
        </div>
)
}
export default Forminput;


 // const[change,setChange]=useState("");
    // const[submit,setSubmit]=useState("");

    // const handleChange = (e) =>{
    //     setChange(e.target.value);
    // }

    // const handleBtn = (e) =>{
    //     e.preventDefault();
    //     setSubmit(change);
    // }


// {/* <h2>{change}</h2>
        // <h2>{submit}</h2>
        // <form>
        //     <input type="text" placeholder="enter the name" onChange={handleChange}/>
        //     <button onClick={handleBtn}>Submit</button>
        // </form> */}