// import { faArrowLeft, faArrowRight } from '@fortawesome/free-solid-svg-icons'
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

 import axios from 'axios';
import { useFormik } from 'formik';
// import { Link, useNavigate } from 'react-router-dom';

import * as yup from "yup"
import { toast } from "react-toastify";
import { Navigate, useNavigate } from 'react-router-dom';

export default function VerifyCode() {
const navigate = useNavigate()
     const schema = yup.object({
            resetCode: yup.string().required("resetCode is required") })
async function verification(values){
    const options = {
        method : "POST",
        url : "https://ecommerce.routemisr.com/api/v1/auth/verifyResetCode" , 
        data : {
            resetCode : values.resetCode
        }
    }
try{
    const {data} = await axios.request(options)
    console.log(data)
       toast.success("Code verified successfully");
       localStorage.setItem("resetVerifiedEmail", values.email);
    navigate("/Resetpassword");

}catch(error){
    toast.error(error.response?.data?.message || "Invalid or expired code");
}  }

     const formik = useFormik({
initialValues : { 
resetCode : ""
 },
validationSchema : schema,
onSubmit : verification
            })
      
  return (
    <>
      <div className="min-h-[70vh] flex items-center justify-center p-4">
          <div className="w-full max-w-md bg-white rounded-2xl shadow-md overflow-hidden">
            <div className=" p-6 text-center bg-mainColor">
     
              <h1 className="text-2xl font-bold  text-white  ">Verification Code</h1>
             
            </div>
            
            <form className="p-6 space-y-3" onSubmit={formik.handleSubmit}>
      <input type="text" className='input w-full' value={formik.values.resetCode} placeholder='Enter your resetCode'
        onChange={formik.handleChange}  onBlur={formik.handleBlur} name='resetCode' />
        {
     formik.errors.resetCode && formik.touched.resetCode ? <p className="text-red-600">{formik.errors.resetCode}</p> : null
        }
      <div className="my-3 flex justify-center">   
       <button className='btn px-4 flex items-center gap-2'  type="submit">
        RESET</button>
       
       </div>  
            </form>
       </div>
        </div>
    
    </>
  )
}
