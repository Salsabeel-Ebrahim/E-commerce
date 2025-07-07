import axios from 'axios'
import React, { useEffect, useState } from 'react'
import Loading from '../../components/Loading/Loading'
import { useNavigate } from 'react-router-dom'

export default function Brands() {
  const [brands, setBrands] = useState(null)
  const navigate = useNavigate()

  async function getBrands() {
    const { data } = await axios.get("https://ecommerce.routemisr.com/api/v1/brands")
    setBrands(data.data)
  }

  useEffect(() => {
    getBrands()
  }, [])

  return (
    <>
     <div className="container mb-8">
     <div className="flex justify-center items-center py-4">
  <h2 className="relative font-bold text-lg text-mainColor text-center mb-8">
    All Brands
    <span className="absolute left-1/2 transform -translate-x-1/2 bottom-0 w-24 h-[2px] bg-mainColor opacity-50"></span>
    <span className="absolute left-1/2 transform -translate-x-1/2 bottom-[-6px] w-16 h-[2px] bg-mainColor opacity-50"></span>
  </h2>
</div>

      {
        brands ? (
          <div className="container grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-6 ">
            {
              brands.map((brand) => (
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
        ) : <Loading />
      } </div>
    </>
  )
}
