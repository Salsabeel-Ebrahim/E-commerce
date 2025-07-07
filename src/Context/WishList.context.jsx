import axios from "axios";
import { createContext, useContext, useState } from "react";
import { TokenContext } from "./Token.context/Token.context";
import { toast } from "react-toastify";

export const WishlistContext = createContext(null)

export default function WishlistProvider({children}){

  const { token } = useContext(TokenContext);
  const [WishlistInfo , setWishlistInfo] = useState(null)
   async function addToWishlist(productId){
    const loading = toast.loading("loading")
       try {
        const options = {
            method: "POST", 
            url: "https://ecommerce.routemisr.com/api/v1/wishlist", 
            data : {
               productId  },
           
            headers: {
              token: token 
                           }
        }
        const {data} = await axios.request(options)
        if(data.status == "success")
             toast.success(data.message)
             getAllWishlist()
        
            } catch (error) {
        console.log(error);
   }finally{
    toast.dismiss(loading)
   }
        
    }
   async function getAllWishlist(){
     try {
        const options = {
            method: "GET", 
            url: "https://ecommerce.routemisr.com/api/v1/wishlist", 
           headers: {
              token
                           }
        }
        const {data} = await axios.request(options)
        
             setWishlistInfo(data) 
      
               if(data.status == "success")
             toast.success(data.message)
       
       
     
    } catch (error) {
        console.log(error);}
        
    }
   
   async function removeFromWishlist(id){
       const loading = toast.loading("loading")
     try {
        const options = {
            method: "DELETE", 
            url: `https://ecommerce.routemisr.com/api/v1/wishlist/${id}`, 
           headers: {
              token   }
        }
        const {data} = await axios.request(options)
         
       
          setWishlistInfo(currentWishlist => {
  const updatedData = currentWishlist.data.filter(item => item._id !== id);
  return {
    ...currentWishlist,
    count: updatedData.length,
    data: updatedData,
  };
});

          
 


           if(data.status == "success")
             toast.success(data.message)
                
         
        } catch (error) {
        console.log(error); } finally{
                 toast.dismiss(loading)  }
     
        
    }
    return <>
    <WishlistContext.Provider value={{addToWishlist , getAllWishlist , WishlistInfo , removeFromWishlist
       }}>
{children}
    </WishlistContext.Provider>
    
    </>
}