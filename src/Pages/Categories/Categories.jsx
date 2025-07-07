import axios from 'axios'
import React, { useEffect, useState } from 'react'
import Loading from '../../components/Loading/Loading'
import Card from '../../components/Card/Card'
import { Navigate, useNavigate } from 'react-router-dom'


export default function Categories() {
    const [categories ,setCategories] = useState(null)
    const navigate = useNavigate()
 async   function getCategories(){

        const options = {
            method:"GET",
         
            url :  "https://ecommerce.routemisr.com/api/v1/categories" , 
        }
        const {data} = await axios.request(options)
   
        setCategories(data.data)
    }

    useEffect(()=>{
        getCategories()
    }, [])
  return (
   
   
   <>
   <div className="container mb-8 ">
 

  <div className="flex justify-center items-center py-4">
  <h2 className="relative font-bold text-lg text-mainColor text-center mb-8">
     Categories
    <span className="absolute left-1/2 transform -translate-x-1/2 bottom-0 w-24 h-[2px] bg-mainColor opacity-50"></span>
    <span className="absolute left-1/2 transform -translate-x-1/2 bottom-[-6px] w-16 h-[2px] bg-mainColor opacity-50"></span>
  </h2>
</div>

{ categories ?  
<div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">
{ categories.map(
    (category)=>    
    <div key={category._id}  
    onClick={()=>{
      navigate(`/Categories/${category._id}`)
    }}
    className='rounded-lg bg-white shadow-sm hover:shadow-lg transition-shadow duration-300'>
      <div className="relative group overflow-hidden">
        <img src={category.image}  loading="lazy" alt={category.name} className="w-full h-60  transition-transform duration-500 group-hover:scale-105" />
    </div>

       <div className="px-4 py-3 space-y-2">
          <h2 className=" text-xl font-semibold text-center  hover:text-mainColor transition-all duration-200">{category.name}</h2>
         
        </div>
   
    </div>
    
    )

 }
</div>  : <Loading/> }

 </div>
    </>
  )
}
