import axios from "axios";
import Card from "../../components/Card/Card";
import CategorySlider from "../../components/CategorySlider/CategorySlider";
import MainSlider from "../../components/MainSlider/MainSlider";


import Loading from "../../components/Loading/Loading";
import { useQuery } from "@tanstack/react-query";

export default function Home() {

 async function getAllProducts(){
  
const options ={
  method: "GET" , 
  url : "https://ecommerce.routemisr.com/api/v1/products"
}
return  await axios.request(options)

 }
 const {data , isLoading } = useQuery({
  queryKey : ['Products'],
  queryFn : getAllProducts ,
  staleTime : 43200000,
  refetchOnMount:true,
   cacheTime: 86400000 

 })

 if(isLoading){
  return <Loading/>
 }


  return (
     <>
    <section className=' pb-8 min-h-screen  '>
    <MainSlider/>

<div className="container  my-4">
   <CategorySlider/>
</div>
 
<div className="container grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6 ">
 
 {
  data.data.data.map((product)=>  <Card productInfo={product} key={product.id}/> )

 }

   </div>  
 
   
  
  
    </section>
 


   </>
  )
}








