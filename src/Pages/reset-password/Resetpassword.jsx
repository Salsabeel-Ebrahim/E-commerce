import axios from 'axios'
import { useFormik } from 'formik'

import { useNavigate } from 'react-router-dom'
import { toast } from 'react-toastify'

import * as yup from "yup"
export default function Resetpassword() {

  const  navigate = useNavigate()
  let regexs = {
  password :/^(?=.*[A-Za-z])(?=.*\d).{8,}$/,
    email : /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/ ,
   }
 const  validationSchema = yup.object({
   email: yup.string().email().required("email is required")
              .matches(regexs.email , "please enter valid email address") ,
   
     newPassword: yup.string().required("new password is required").matches(regexs.password,
       "Password must be at least 8 characters and contain letters and numbers"),
 
                         
 })

 async function handlesubmit(values){
  // const email = localStorage.getItem("resetVerifiedEmail");
  const options = {
    method : "PUT" , 
    url : "https://ecommerce.routemisr.com/api/v1/auth/resetPassword",
    data : {
        //  email,
      newPassword : values.newPassword
    }
  }
try {
  const {data} = await axios.request(options)
  if(data.statusMsg == "success"){
       toast.success("Password changed successfully")
    setTimeout(()=>{
     navigate("/login")
    } , 1000)
  
  }
} catch (error) {
  toast.error(error.response?.data?.message )
}


 }


  const formik = useFormik({
    initialValues : {
       email: "",
       newPassword : ""
    } , 
    validationSchema: validationSchema,
    onSubmit : handlesubmit
  })
  return (
    <>
         <div className="min-h-[70vh] flex items-center justify-center p-4">
          <div className="w-full max-w-md bg-white rounded-2xl shadow-md overflow-hidden">
            <div className=" p-6 text-center bg-mainColor">
     
              <h1 className="text-2xl font-bold  text-white  ">Reset Password</h1>
             
            </div>
            
            <form className="p-6 space-y-3" onSubmit={formik.handleSubmit}>
     
      <input type="email" className='input w-full' value={formik.values.email} placeholder='Enter your email'
        onChange={formik.handleChange}  onBlur={formik.handleBlur} name='email' />
        {
     formik.errors.email && formik.touched.email ? <p className="text-red-600">{formik.errors.email}</p> : null
        }
      <input type="password" className='input w-full' value={formik.values.newPassword} placeholder='Enter your new Password'
        onChange={formik.handleChange}  onBlur={formik.handleBlur} name='newPassword' />
        {
     formik.errors.newPassword && formik.touched.newPassword ? <p className="text-red-600">{formik.errors.newPassword}</p> : null
        }
      <div className="my-3 flex justify-center">   
       <button className='btn px-4 flex items-center gap-2'  type="submit">
        SEND</button>
       
       </div>  
            </form>
       </div>
        </div>
    
    </>
  )
}
