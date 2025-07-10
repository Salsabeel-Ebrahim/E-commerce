import { faArrowLeft, faArrowRight } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import axios from 'axios';
import { useFormik } from 'formik';
import { Link, useNavigate } from 'react-router-dom';
import * as yup from "yup"
import { toast } from "react-toastify";
export default function Forgotpassword() {
 
  const  navigate = useNavigate()
  let regexs = {
   email : /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/ }

 const schema = yup.object({
        email: yup.string().email().required("email is required")
            .matches(regexs.email , "please enter valid email address") })

async function handleSubmit(values) {
    const loading =  toast.loading("loading...")
  const options = {
   
  method: "POST",
    url: "https://ecommerce.routemisr.com/api/v1/auth/forgotPasswords",
    data: {
      email: values.email
    }
  };

  try {
  const { data } = await axios.request(options);
if (data.statusMsg === "success") {
 toast.success(data.message);
 localStorage.setItem("resetVerifiedEmail", values.email);

  setTimeout(() => {
    navigate("/VerifyCode");
  }, 1500);
}
} catch (error) {
   console.log("Error:", error.response?.data?.message || error.message);
  toast.error(error.response?.data?.message || "Something went wrong");
  }
    finally{
     toast.dismiss(loading)
    
     }
}
 const formik = useFormik({
    initialValues : {
      email: "" },
validationSchema : schema,
onSubmit : handleSubmit
  })

return (<>

   <div className=" flex items-center justify-center  mt-[66px] px-4 py-6">
      <div className="w-full max-w-md bg-white rounded-2xl shadow-md overflow-hidden">
        <div className=" p-6 text-center bg-indigo-600">
 
          <h1 className="text-2xl font-bold  text-white  ">Forgot your password?</h1>
         
        </div>
        
        <form className="p-6 space-y-3" onSubmit={formik.handleSubmit}>
      
    <p className='text-center'>Your password will be reset by email</p>
    <input type="email" className='input w-full' value={formik.values.email} placeholder='Enter your email'
    onChange={formik.handleChange}  onBlur={formik.handleBlur} name='email'
    />
    {
 formik.errors.email && formik.touched.email ? <p className="text-red-600">{formik.errors.email}</p> : null
    }
  <div className="my-3 flex justify-between">   
    <button className='btn px-4 flex items-center gap-2'  type="button"
    onClick={() => navigate("/login")}>
        <FontAwesomeIcon icon={faArrowLeft} /> <span>back</span></button>
    <button className='btn px-4 flex items-center gap-2' type='submit'> 
        <span>next</span>
        <FontAwesomeIcon icon={faArrowRight} />   </button>
   </div> 
        </form>
        
        <div className="bg-gray-50 px-6 py-4 text-center">
          <p className="text-xs text-gray-500">
            Need help? <span  className="text-indigo-600 hover:text-indigo-500">Contact support</span>
          </p>
        </div>
      </div>
    </div>
    </>
  )
}



