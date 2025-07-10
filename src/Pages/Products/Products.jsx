import axios from 'axios'
import Loading from '../../components/Loading/Loading'
import Card from '../../components/Card/Card'
import { useQuery } from '@tanstack/react-query'

export default function Products() {
  
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
    <div className='container pt-[77px] mb-8 '>

  <div className="flex justify-center items-center  mb-2">
  <h2 className="relative font-bold text-lg text-mainColor text-center mb-4">
     Products
    <span className="absolute left-1/2 transform -translate-x-1/2 bottom-0 w-24 h-[2px] bg-mainColor opacity-50"></span>
    <span className="absolute left-1/2 transform -translate-x-1/2 bottom-[-6px] w-16 h-[2px] bg-mainColor opacity-50"></span>
  </h2>
</div>

  
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6 ">
     
     {
      data.data.data.map((product)=>  <Card productInfo={product} key={product.id}
    /> )
    
     }
    
       </div>  
     
       
    </div>
  )
}