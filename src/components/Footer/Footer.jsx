import { Link } from 'react-router-dom';
import Americanlogo from '../../assets/images/American-Express-Color-BA04NtD8.png'
import paypallogo from '../../assets/images/paypal-f_p-vrjl.png'
import mastercard from '../../assets/images/mastercard-DpLisAk5.webp'
 import applelogo from '../../assets/images/get-apple-store-9A-0RbJo.png'
 import googlelogo from '../../assets/images/get-google-play-BORhnNzJ.png'

export default function Footer() {
  return (
    <>
  <footer className='bg-[#f3f4f6] w-full py-10'>
  <div className="container px-4 space-y-6">
    <div>
      <h3 className='text-xl font-semibold'>Get the freshcart app</h3>
      <p className='text-slate-400'>We’ll send you a download link on your phone</p>
    </div>

   
    <div className="flex flex-col sm:flex-row gap-3 sm:gap-5 justify-between items-center mx-auto">
  <input
    type="text"
    className="input w-full sm:w-[300px]"
    placeholder="Enter your phone number"
  />
  <button className="w-full sm:w-fit">
    <Link className="uppercase btn w-full sm:w-fit text-center block">share app link</Link>
  </button>
</div>


    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pt-4 mt-4">
      <div className="flex flex-col md:flex-row md:items-center gap-4">
        <h3 className='text-lg font-semibold'>Payment partners</h3>
        <div className="flex flex-wrap gap-2">
        <img src={Americanlogo} alt="American Express" className='w-[70px] sm:w-[80px]' />
          <img src={mastercard} alt="Mastercard" className='w-[70px] sm:w-[80px]' />
          <img src={paypallogo} alt="Paypal" className='w-[70px] sm:w-[80px]' />
        </div>
      </div>

      <div className="flex flex-col md:flex-row md:items-center gap-4">
        <h3 className='text-lg font-semibold'>Get deliveries with freshcart</h3>
        <div className="flex items-center gap-2">
          <img src={applelogo} alt="App Store" className='w-[80px] sm:w-[90px]' />
          <img src={googlelogo} alt="Google Play" className='w-[90px] sm:w-[100px]' />
        </div>
      </div>
    </div>
  </div>
</footer>

    </>
  )
}
