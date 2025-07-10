import Lottie from "lottie-react";
import animation from '../../assets/animations/Animation - 1750652251278 (1)';

export default function NotFound() {
  return (
    <>
<div className=" relative container flex flex-col justify-center items-center min-h-90">
 <Lottie animationData={animation} loop={true}  style={{ width: "100%", height: "400px" }} />
   
<p className="absolute bottom-[84px] text-base text-center md:text-lg">Oops!  the page you are looking for does not exist</p>

</div>
   
    </>
    
  )
}
