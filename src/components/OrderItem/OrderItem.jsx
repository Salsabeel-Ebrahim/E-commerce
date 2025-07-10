import { Link } from "react-router-dom"

export default function OrderItem({productInfo}) {
    const {price , count , product} =  productInfo
    const {imageCover , category , title , id } =   product

  return (
   <div className='rounded-lg bg-white shadow-md hover:shadow-lg transition-shadow duration-300'>

  <div className="relative group overflow-hidden">
    <img src={imageCover} alt={title}  loading="lazy" className="w-full  transition-transform duration-500 group-hover:scale-105" />
  
</div>

 <div className="px-4 py-3 space-y-2">
    <Link to={`/ProductDetails/${id}`}>
      <h2 className="line-clamp-1 text-2xl font-semibold">{title}</h2>
   </Link>
   <h3 className=" text-base font-semibold text-green-600">{category.name}</h3>
    <h3 className=" text-base">{count}</h3>
   
    <div className="flex justify-between items-center">
      <span className="text-mainColor font-bold">{price} EGP</span>
      


    </div>
  </div>
</div>


  )
}
