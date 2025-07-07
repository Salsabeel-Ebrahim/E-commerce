import { Link } from 'react-router-dom';
import amazonlogo from '../../assets/images/amazon-pay-C6yg0mFR.png'
import Americanlogo from '../../assets/images/American-Express-Color-BA04NtD8.png'
import paypallogo from '../../assets/images/paypal-f_p-vrjl.png'
import mastercard from '../../assets/images/mastercard-DpLisAk5.webp'
 import applelogo from '../../assets/images/get-apple-store-9A-0RbJo.png'
 import googlelogo from '../../assets/images/get-google-play-BORhnNzJ.png'

export default function Footer() {
  return (
    <>
 <footer className='bg-[#f3f4f6]   w-full py-10'>
  <div className="container space-y-4">
    <div className="">
<h3 className='text-xl font-semibold'>Get the freshcart app</h3>
<p className='text-slate-400 '>We’ll send you a download link on your phone</p>
    </div>

<div className="flex gap-5 justify-between items-center  mx-auto ">
    <input type="text" className='input '  placeholder="Enter your phone number" />
    <button className=''>
        <Link className="uppercase btn">share app link</Link></button>
</div>
     <div className="payment flex items-center  justify-between
      pt-4 mt-4 grid grid-cols-1 md:grid-cols-2 gap-4  ">
        <div className="flex items-center gap-4 space-x-2">
            <h3 className=' mb-1.5 text-lg font-semibold text-center md:text-left '>payment partners</h3>
              <img src={amazonlogo} alt="amazonlogo"  className='w-[80px]  ' />
              <img src={Americanlogo} alt="Americanlogo"  className='w-[80px]  ' />
             <img src={mastercard} alt="mastercard"  className='w-[80px]  ' />
              <img src={paypallogo} alt="paypallogo"  className='w-[80px]  ' />
            
      </div>

        <div className="flex items-center gap-4 space-x-2">
 <h3 className=' mb-1.5 text-lg font-semibold text-center md:text-left '>Get deliveries with freshcart</h3>
             <div className="flex items-center gap-1">
                 <img src={applelogo} alt="applelogo"  className='w-[90px]  ' />
              <img src={googlelogo} alt="googlelogo"  className='w-[100px]  ' />
             </div>
             
        </div>
     </div>
            </div>
        </footer>
    
    </>
  )
}
