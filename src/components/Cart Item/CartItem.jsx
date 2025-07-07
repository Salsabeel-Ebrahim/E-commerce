import { faMinus, faPlus, faStar, faXmark } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useContext } from 'react';
import { CartContext } from '../../Context/Cart.context';

export default function CartItem({itemInfo}) {
 const {removeFromCart ,  updateCart} =  useContext(CartContext)
  const { count , price ,product  } = itemInfo


  const{ title , ratingsAverage , imageCover , id , category } = product
  return (
    <div className="flex flex-col md:flex-row flex-wrap gap-6 items-center md:justify-between bg-gray-100 my-4 p-6 rounded-lg relative shadow-md">

      
      <FontAwesomeIcon 
        icon={faXmark}  onClick={()=>{removeFromCart(id)}}
        className="absolute top-3 right-3 text-gray-500 hover:text-red-600 cursor-pointer text-xl" 
      />

     
      <div className="rounded-lg border-[2px] overflow-hidden border-mainColor w-32 h-32">
        <img src={imageCover} alt={title}  loading="lazy" className="w-full h-full object-cover" />
      </div>

      <div className="flex flex-col gap-1 text-gray-800 text-center md:text-start">
      <h2 className="text-lg font-semibold">{title }</h2>
      <span className="text-sm">Price: <span className="font-medium">{price} L.E</span></span>
        <span className="text-sm text-yellow-500 flex items-center gap-1 justify-center md:justify-start">
          Rating: {ratingsAverage}
          <FontAwesomeIcon icon={faStar} className='text-xs' /> 
        </span>
        <h3 className="text-sm">
        {category.name} | <span className='text-mainColor font-medium'>Available</span>
        </h3>
      </div>

      <div className="flex items-center gap-3">
        <FontAwesomeIcon icon={faPlus} 
        onClick={()=>{updateCart(id , count+1)}}
        className='w-8 h-8 bg-mainColor rounded-md text-white p-2 cursor-pointer hover:bg-mainColor/90' />
        <span className='text-lg font-medium'>{count}</span>
        <FontAwesomeIcon
        onClick={()=>{updateCart(id , count-1)}}
        icon={faMinus} className='w-8 h-8 bg-mainColor rounded-md text-white p-2 cursor-pointer hover:bg-mainColor/90' />
      </div>

      <div className="text-center">
        <h2 className="text-sm text-gray-600">Total Price</h2>
        <span className='text-mainColor text-lg font-semibold'>{price} L.E</span>
      </div>
    </div>
  )
}

