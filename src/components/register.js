import './register.css';
import {useForm} from "react-hook-form";

function Register(){
    const{register,handleSubmit,formState:{errors}} = useForm()

    return(
        <div className='register-form'>
            <div className='container'>
                <div className='row'>
                    <div className='register'>
                        <h1>Register</h1>
                        <form onSubmit={handleSubmit((data)=>{
                           console.log(data);
                         })}>

                        <div className='firstname'>
                            <label>Firstname  :  </label>
                            <input type="text" {...register("fname",{required:"Firstname is required"})} placeholder="Enter Your First Name"/>
                             {errors.fname && <span>{errors.fname.message}</span>}
                        </div>
                        <div className='lastname'>
                            <label>Lastname  :  </label>
                            <input type="text" {...register("lname",{required:"Lastname is required"})} placeholder="Enter Your Last Name"/>
                             {errors.lname && <span>{errors.lname.message}</span>}
                        </div>
                        <div className='date'>
                            <label>DOB   :     </label>
                            <input type="date" {...register("dob",{required:"Date Of Birth is required"})}/>
                             {errors.dob && <span>{errors.dob.message}</span>}
                        </div>
                        <div className='email'>
                            <label>Email    :      </label>
                            <input type="email" {...register("email",{required:"Email is required"})} placeholder="Enter Your Email"/>
                             {errors.email && <span>{errors.email.message}</span>}
                        </div>
                        <div className='phone'>
                            <label>phone :  </label>
                            <input type="tel" {...register("phn",{required:"Phone Number is required"})} placeholder="Enter Your Phone Number"/>
                             {errors.phn && <span>{errors.phn.message}</span>}
                        </div>
                        <div>
                            <button>Register</button>
                        </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>

    )
}

export default Register;