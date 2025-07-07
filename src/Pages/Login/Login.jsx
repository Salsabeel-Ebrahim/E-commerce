import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
 import { faCircleUser, faEye } from '@fortawesome/free-regular-svg-icons';
import * as yup from "yup"
import { useFormik } from 'formik';
import Lottie from 'lottie-react';
import animation from '../../assets/animations/Animation - 1750835381416 (1).json'
import axios from 'axios';
import { useNavigate, Link } from 'react-router-dom';
import { toast } from 'react-toastify';
import { useContext, useState } from 'react';
import { faSpinner } from '@fortawesome/free-solid-svg-icons';
import { TokenContext } from '../../Context/Token.context/Token.context';
export default function Login() {
 let {setToken} = useContext(TokenContext)
  const [loading , setLoading] = useState(false)
  const [passtype , setPasstype] = useState(true)
  const  navigate = useNavigate()
  let regexs = {
  password :/^(?=.*[A-Za-z])(?=.*\d).{8,}$/,
    email : /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/ ,
   }

 const schema = yup.object({
email: yup.string().email().required("email is required")
.matches(regexs.email , "please enter valid email address") ,

password: yup.string()
  .required("password is required")
  .matches(regexs.password, "Password must be at least 8 characters, including a number and a capital letter"),


})
async function submit(values){
 const loadingError =  toast.loading("loading...")
  setLoading(true)
  const options = {
    method : "POST" ,
    url : "https://ecommerce.routemisr.com/api/v1/auth/signin",
    data : {
            email: values.email   ,
          password: values.password  }  } 

      try{
       
     const {data} = await axios.request(options) 
     localStorage.setItem("token" , data.token)
   setToken(data.token)
  toast.success("logged in successfully")
     
     if(data.message === "success"){
     setTimeout(()=>{
  navigate("/")
      } , 800) } 
     }catch(error){
         console.log("Login failed:", error.response?.data?.message || error.message);
    toast.error((error.response?.data?.message || "Something went wrong"));
     }
     finally{
     toast.dismiss(loadingError)
      setLoading(false)
     }
   



 }
  const formik = useFormik({
    initialValues : {
      email: "",
      password : ""
    },
validationSchema : schema,
onSubmit : submit
  })

  return (
    <>
 <div className="Login min-h-screen py-10  flex justify-center items-center">
 <div className="container gap-5 grid lg:grid-cols-2 lg:gap-12">
 <div className="relative  flex flex-col justify-center items-center min-h-90">
 <Lottie animationData={animation} loop={true}  style={{ width: "90%", height: "23rem" }} />
</div>


  <form className=" flex flex-col justify-center space-y-3" onSubmit={formik.handleSubmit} >
         <div className="flex gap-2 justify-center items-center">
<h2 className='text-2xl font-semibold'>Login</h2>
  <FontAwesomeIcon icon={faCircleUser} className="text-2xl hover:translate-y-[-4px]  duration-300 transition-transform text-mainColor" />
      </div>   
<div className="my-2">
 <input type="email" className='input w-full ' value={formik.values.email}
  onChange={formik.handleChange} onBlur={formik.handleBlur} name='email' placeholder="Enter your email" />
{
  formik.errors.email && formik.touched.email ?  <p className='text-red-500 pl-1 mt-2'>{formik.errors.email}</p> : ""
}

 </div>
     
 <div className="my-2 relative min-h-[80px]">
 <input type={passtype? "password" : "text" } className='input w-full ' value={formik.values.password}
  onChange={formik.handleChange} onBlur={formik.handleBlur} name='password' 
  placeholder="Enter your password" />
     {
  formik.errors.password && formik.touched.password ?  <p className='text-red-500 mb-4 pl-1 mt-2'>{formik.errors.password}</p> : ""
}
<FontAwesomeIcon icon={faEye}  className='absolute top-[13%] -translate-y-[13%] right-4 cursor-pointer'
 onClick={()=>{ setPasstype(!passtype)}}/>
  </div>
<Link to="/Forgotpassword" className='text-blue-600 underline'>Forgot your password?</Link>
<div className="my-2">
  <button type='submit' disabled={loading} className='btn w-full font-semibold'>
{ loading   ? <FontAwesomeIcon icon={faSpinner} /> : "Login" }
   </button>
  </div> 
   
  </form>
</div>
 </div>
    </>
  )
}


