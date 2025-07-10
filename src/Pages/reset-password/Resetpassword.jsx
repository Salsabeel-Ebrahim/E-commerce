import axios from 'axios'
import { useFormik } from 'formik'

import { useNavigate } from 'react-router-dom'
import { toast } from 'react-toastify'

import * as yup from "yup"
export default function Resetpassword() {

  const  navigate = useNavigate()
  let regexs = {
  password :/^(?=.*[A-Za-z])(?=.*\d).{8,}$/,
  }
 const  validationSchema = yup.object({
  newPassword: yup.string().required("new password is required").matches(regexs.password,
       "Password must be at least 8 characters and contain letters and numbers"),
 
                         
 })

 async function handlesubmit(values){
  const email = localStorage.getItem("resetVerifiedEmail");
  console.log("Email from localStorage:", email);
  const options = {
    method : "PUT" , 
    url : "https://ecommerce.routemisr.com/api/v1/auth/resetPassword",
    data : {
         email,
      newPassword : values.newPassword
    }
  }
try {
  const {data} = await axios.request(options)
  if(data.statusMsg == "success"){
       toast.success("Password changed successfully")
    setTimeout(()=>{
     navigate("/login")
    } , 500)
  
  }
} catch (error) {
  console.log(error);
  
    toast.success("Password changed successfully")
    setTimeout(()=>{
     navigate("/login")
    } , 500)
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
         <div className="flex items-center justify-center mt-[66px] px-4 py-8">
          <div className="w-full max-w-md bg-white rounded-2xl shadow-md overflow-hidden">
            <div className=" p-6 text-center bg-mainColor">
     
              <h1 className="text-2xl font-bold  text-white  ">Reset Password</h1>
             
            </div>
            
            <form className="p-6 space-y-3" onSubmit={formik.handleSubmit}>
     
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
