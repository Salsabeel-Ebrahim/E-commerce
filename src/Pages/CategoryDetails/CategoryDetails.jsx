import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import Loading from '../../components/Loading/Loading'
import Card from '../../components/Card/Card'

export default function CategoryDetails() {
const [relatedCategory , setRelatedCategory] =useState(null)
    const {id} = useParams()
    const navigate = useNavigate()

async function getRelatedCategories(){
       try{
    const { data } = await axios.get(`https://ecommerce.routemisr.com/api/v1/products?category[in]=${id}`)

    setRelatedCategory(data.data)

 }catch(error){
    console.log(error);
    
   }}
  

  useEffect(() => {
    getRelatedCategories()
  }, [id])


  return (
    <>
    {
  relatedCategory ? 
  relatedCategory.length === 0 ?
      ( navigate("/NotFound"))  : 
         ( <div className=" container py-8 grid grid-cols-1 md:grid-cols-3 
         lg:grid-cols-5 gap-4">
          {
             relatedCategory?.map((item)=>(
                              <Card productInfo={item} key={item._id}/>  )
            )
            }  </div>      )
            : <Loading/>
    }
    </>
  )
}
