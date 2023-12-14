import './login.css';
import {useForm} from "react-hook-form";



function Login(){
    
        const{register,handleSubmit,formState:{errors}} = useForm()
        console.log(errors)
      
    return(
        <div className='login-form'>
            <div className='container'>
                <div className='row'>
                    <div className='login'>
                        <h1>Sign In</h1>
                        <form onSubmit={handleSubmit((data)=>{
                           console.log(data);
                         })}>

                        <div className='username'>
                            <input type="text" {...register("name",{required:"Name is required"})} placeholder="Enter Your Name"/>
                             {errors.name && <p>{errors.name.message}</p>}
                        </div>
                        <div className='password'>
                            <input type="password" {...register("psw",{required:"Password is required"})} placeholder="Enter Your Password"/>
                            {errors.psw && <p>{errors.psw.message}</p>}
                        </div>
                        <p>Forget Password?</p>
                        <div>
                            <button>Login</button>
                        </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>

    )
}

export default Login;