import axios from 'axios'
import Loading from '../../components/Loading/Loading'
import { useNavigate } from 'react-router-dom'
import { useQuery } from '@tanstack/react-query'

export default function Brands() {
 
  const navigate = useNavigate()

  async function getBrands() {
    return await axios.get("https://ecommerce.routemisr.com/api/v1/brands")
   
  }
   const {data , isLoading}=useQuery({
    queryKey : ['Brands'],
    queryFn :  getBrands , 
    staleTime : 43200000,
    refetchOnMount:true  ,
     cacheTime: 86400000 
  })
  if(isLoading){
    return <Loading/>
   }
   
 
  return (
    <>
     <div className="container mb-8 pt-[77px]">
     <div className="flex justify-center items-center ">
  <h2 className="relative font-bold text-lg text-mainColor text-center mb-8">
    All Brands
    <span className="absolute left-1/2 transform -translate-x-1/2 bottom-0 w-24 h-[2px] bg-mainColor opacity-50"></span>
    <span className="absolute left-1/2 transform -translate-x-1/2 bottom-[-6px] w-16 h-[2px] bg-mainColor opacity-50"></span>
  </h2>
</div>

    
          <div className="container grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-6 ">
            {
              data.data.data.map((brand) => (
                <div key={brand._id}
          onClick={() => navigate(`/Brands/${brand._id}`)}

                className="rounded-xl  p-4 shadow-md hover:shadow-lg transition-shadow duration-300 text-center cursor-pointer">
                  <div className="overflow-hidden mb-4">
                    <img  loading="lazy"
                      src={brand.image}
                      alt={brand.name}
                      className="w-full h-24 object-contain transition-transform duration-300 hover:scale-105"
                    />
                  </div>
                  <h2 className="text-white font-semibold text-lg">{brand.name}</h2>
                </div>
              ))
            }
          </div>
        
       </div>
    </>
  )
}
