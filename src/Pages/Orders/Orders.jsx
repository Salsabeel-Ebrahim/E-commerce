import axios from 'axios';
import { useContext } from 'react';
import { TokenContext } from '../../Context/Token.context/Token.context';
import { jwtDecode} from 'jwt-decode';
import Loading from '../../components/Loading/Loading';
import OrderItem from '../../components/OrderItem/OrderItem';
import { useQuery } from '@tanstack/react-query';

export default function Orders() {
  const {token}= useContext(TokenContext)
    const {id}=   jwtDecode(token)
  
    
  async function getAllorders(){
       const options ={
        url:`https://ecommerce.routemisr.com/api/v1/orders/user/${id}`, 
        method :"GET" ,
    }
    try {
      return  await axios.request(options)
         
 } catch (error) {
        console.log(error);
        
    }
   }
   const {data , isLoading , isError}=useQuery({
    queryKey : ['orders'],
    queryFn :  getAllorders , 
    staleTime : 43200000,
    refetchOnMount:true  ,
    cacheTime: 86400000 
  })
  
  if(isLoading){
    return <Loading/>
   }
   if (isError) {
  return <p className="text-red-600 text-center mt-10">Something went wrong while fetching orders.</p>;
}
   
  return (
    <>
  {
      data.data.map((order , index)=>(
       <div className={`container pt-5 pb-8  md:border-2 border-mainColor my-10
        ${index === 0 ? 'mt-[85px]' : ''}`} key={order.id}>

        <div className="flex justify-between items-center">
      <div className="text-gray-600 text-base font-medium">
  <span className="text-gray-800 font-semibold">Order ID:</span> {order.id}
    </div>

     <div className="flex gap-4">
           <button className='btn bg-blue-600 hover:bg-blue-700'>
                {order.isDelivered == false ? "NOT DELIVERD" : "DELIVERD"} </button>
            <button className='btn bg-red-600 hover:bg-red-700'>
              {order.isPaid == false ? "NOT PAID" : "PAID"} </button>
        </div>
               </div>
 <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 my-4 gap-4">
  {order.cartItems?.map((item)=>(
          <OrderItem key={item.product.id}  productInfo={item} />
  ))}
 
  
 </div>
     
    </div>
    ))
  }

  </>
  )
}
