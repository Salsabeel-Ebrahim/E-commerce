import { faFacebook, faGoogle } from "@fortawesome/free-brands-svg-icons";
import { faShieldHalved, faStar, faTruckFast } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSpinner } from "@fortawesome/free-solid-svg-icons";
import * as yup from "yup"
import { useFormik } from 'formik';
import review from '../../assets/images/review-author.png'
import axios from "axios";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";
import { useState } from "react";

export default function Signup() {
  const navigate = useNavigate()
 
 const [loading, setLoading ] = useState(false)
let regexs = {
        name: /^[A-Za-z\s]{2,50}$/ ,
       password :/^(?=.*[A-Za-z])(?=.*\d).{8,}$/,
        email : /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/ ,
        phone : /^(\+2)?01[0125][0-9]{8}$/ }
    
      const schema = yup.object({
      name : yup.string()
      .required("name is required").matches(regexs.name ,"Please enter a valid name (letters and spaces only)"),
      email : yup.string().email()
      .required("email is required").matches(regexs.email , "please enter valid email address") , 
      password: yup.string()
      .required("password is required").matches(regexs.password ,"Password must be at least 8 characters long and include at least one letter and one number") ,
      repassword: yup.string()
      .required("confirming password is required").oneOf([yup.ref("password")], "Passwords must match") ,
      phone : yup.string()
      .required("Phone number is required")
      .matches(regexs.phone, "Please enter a valid Egyptian phone number")
    })
    async function handleSubmit(values){
       const loadingError = toast.loading("loading...")
setLoading(true)
      try{
    const options = {
     method: "POST" ,
     url : "https://ecommerce.routemisr.com/api/v1/auth/signup" ,
     data : {
        name: values.name,
        email:values.email,
        password:values.password,
        rePassword:values.repassword,
        phone:values.phone   } }
        const {data} = await axios.request(options)

      if(data.message === "success"){
        toast.success("Your account has been created")
        setTimeout(()=>{
navigate("/login")
        } , 1000)
      }  }
    catch(error){
 
      toast.error(error.response.data.message)
      console.log(error.response.data);
    }finally{

      toast.dismiss(loadingError)}
      setLoading(false)
  
  }

    const formik = useFormik({
    initialValues: {
      name: "",
      email: "",
      password: "",
      repassword: "",
      phone: ""
    },
    validationSchema : schema , 
    onSubmit :handleSubmit
    })
  
  
  return (
    <>
      <main className="pt-[90px] pb-10">
        <div className="container grid lg:grid-cols-2 lg:gap-12  ">
          <div className="left-side space-y-6 ">
            <div className="welcome-message ">
              <h2 className="text-4xl font-bold"> 
                welcome to <span className="text-mainColor">FreshCart</span>
              </h2>
              <p className="text-xl mt-2">
                Join thousands of happy customers who enjoy fresh groceries
                delivered right to their doorstep
              </p>
            </div>
            <div className="features">
              <ul className="*:flex *:items-center *:gap-3 space-y-4">
<li className="">
  <div className=" icon size-6 text-[14px]  rounded-full bg-green-200 p-2 md:text-xl md:p-[21px] flex justify-center items-center text-green-600">
    <FontAwesomeIcon className="" icon={faStar} />
  </div>
  <div className="content">
 <div className="flex gap-3">
   
    <h3 className="font-semibold">Premium Quality</h3>
   
  </div>
    <p className="text-gray-600">Premium quality sourced directly to you</p>
  </div>
</li>

<li className="">
   <div className="icon size-6 text-[14px] rounded-full bg-green-200 p-2  md:text-xl md:p-[21px] flex justify-center items-center text-green-600">
    <FontAwesomeIcon className="" icon={faTruckFast} />
  </div>
  <div className="content">
    <h3 className="font-semibold">Fast Delivery</h3> 
    <p className="text-gray-600">Same day delivery available in most areas</p>
  </div>
</li>

<li className="">
     <div className="icon size-6 text-[14px] rounded-full bg-green-200 p-2 md:text-xl md:p-[21px] flex justify-center items-center text-green-600">
    <FontAwesomeIcon className="" icon={faShieldHalved} />
  </div>
 
  <div className="content">
 <h3 className="font-semibold">Secure Shopping</h3>
  <p className="text-gray-600">Your data and payments are completely secure</p>
  </div>
</li>
   </ul>
            </div>

            <div className="review py-4 rounded-xl shadow-md mb-8 md:mb-0 px-5 sm:px-4">
      <div className="flex gap-3 items-center mb-3">
      <img src={review} alt="sarah johson image" className="size-6 rounded-full" />
        <div>
            <h3>Sarah Johnson</h3>
            <div className="icons flex gap-1 text-yellow-400">    
                  <FontAwesomeIcon icon={faStar} />
                  <FontAwesomeIcon icon={faStar} />
                  <FontAwesomeIcon icon={faStar} />
                  <FontAwesomeIcon icon={faStar} />
                  <FontAwesomeIcon icon={faStar} /></div>
                  </div>   </div>

                <blockquote className="text-gray-700 italic">
                    <p>"FreshCart has completely changed how I shop for groceries. The quality is amazing and delivery is always on time!"</p>
                </blockquote>
            </div>
          </div>
          

          <div className="rigth-side space-y-4 px-6 py-2.5  rounded-xl shadow-md ">
          <div className="text-center">  
            <h2 className="text-3xl font-semibold">Create Your Account</h2>
            <p className="mt-1">Start your journey with today</p></div>
            <div className="flex  justify-center gap-4 text-center *:flex *:gap-3 *:items-center *:hover:bg-gray-100 transition-all duration-200">
<button className=" btn bg-transparent border border-gray-400/40 shadow-none text-black"><FontAwesomeIcon icon={faGoogle} className="text-red-600" />
<span>Google</span>
</button>
<button className=" btn bg-transparent border border-gray-400/40 shadow-none text-black"><FontAwesomeIcon icon={faFacebook} className="text-blue-600" />
<span>Facebook</span>
</button>
            </div>
          <div className="w-full h-0.25 relative bg-gray-400/30">
            <span className="absolute px-3 bg-white top-1/2 left-1/2 -translate-1/2">or</span></div>

        <form className="container *:py-2" onSubmit={formik.handleSubmit}>
<div>
     <input type="text" className='input w-full' value={formik.values.name} name="name"
  onChange={formik.handleChange} onBlur={formik.handleBlur}placeholder="Enter your name" />
{
  formik.errors.name && formik.touched.name ?  <p className='text-red-500 pl-1 mt-2'>{formik.errors.name}</p> : ""
}
    </div>
<div>
 <input type="email" className='input w-full ' value={formik.values.email}
  onChange={formik.handleChange} onBlur={formik.handleBlur} name='email' placeholder="Enter your email" />
{
  formik.errors.email && formik.touched.email ?  <p className='text-red-500 pl-1 mt-2'>{formik.errors.email}</p> : ""
}


 </div>
     
 <div className="relative">
 <input type="password" className='input w-full' value={formik.values.password} name="password"
  onChange={formik.handleChange} onBlur={formik.handleBlur} placeholder="Enter your password" />
  {
  formik.errors.password && formik.touched.password ?  <p className='text-red-500 pl-1 mt-2'>{formik.errors.password}</p> : ""
}
</div>
     
 <div>
 <input type="password" className='input w-full ' value={formik.values.repassword} name="repassword"
  onChange={formik.handleChange} onBlur={formik.handleBlur} placeholder="Confirm password" />
{
  formik.errors.repassword && formik.touched.repassword ?  <p className='text-red-500 pl-1 mt-2'>{formik.errors.repassword}</p> : ""
}
   </div>
     
 <div>
 <input type="tel" className='input w-full ' value={formik.values.phone} name="phone"
  onChange={formik.handleChange} onBlur={formik.handleBlur} placeholder="Enter your phone number" />
  
  {
  formik.errors.phone && formik.touched.phone ?  <p className='text-red-500 pl-1 mt-2'>{formik.errors.phone}</p> : ""
}
  </div>
  <div className="">
     <button type="submit"  disabled={loading} className='btn w-full font-semibold'>
      { loading ? <FontAwesomeIcon icon={faSpinner}/>  : "SIGN UP"  } </button>
     
   
   </div>
    </form>
   


          </div>
        </div>
      </main>
    </>
  );
}

