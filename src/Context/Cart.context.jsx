import axios from "axios";
import { createContext, useContext, useState } from "react";
import { TokenContext } from "./Token.context/Token.context";
import { toast } from "react-toastify";

export const CartContext = createContext(null)

export default function CartProvider({children}){

  const { token } = useContext(TokenContext);
  const [cartInfo , setCartInfo] = useState(null)
   async function addToCart(productId){
    const loading = toast.loading("loading")
       try {
        const options = {
            method: "POST", 
            url: "https://ecommerce.routemisr.com/api/v1/cart", 
            data : {
               productId  },
           
            headers: {
              token: token 
                           }
        }
        const {data} = await axios.request(options)
        if(data.status == "success")
             toast.success(data.message)
             getAllCart()
        
            } catch (error) {
        console.log(error);
   }finally{
    toast.dismiss(loading)
   }
        
    }
   async function getAllCart(){
     try {
        const options = {
            method: "GET", 
            url: "https://ecommerce.routemisr.com/api/v1/cart", 
           headers: {
              token
                           }
        }
        const {data} = await axios.request(options)
       setCartInfo(data)
               if(data.status == "success")
             toast.success(data.message)
       
       
     
    } catch (error) {
        console.log(error);}
        
    }
   async function removeFromCart(id){
       const loading = toast.loading("loading")
     try {
        const options = {
            method: "DELETE", 
            url: `https://ecommerce.routemisr.com/api/v1/cart/${id}`, 
           headers: {
              token   }
        }
        const {data} = await axios.request(options)
         
          setCartInfo(data) 
           if(data.status == "success")
             toast.success(data.message)

         
        } catch (error) {
        console.log(error); } finally{
                 toast.dismiss(loading)  }
     
        
    }
   async function clearCart(){
     
     try {
        const options = {
            method: "DELETE", 
            url: `https://ecommerce.routemisr.com/api/v1/cart`, 
           headers: {
              token   }
        }
        const {data} = await axios.request(options)
       console.log(data);
       
            setCartInfo({
              numOfCartItems : 0
            })
      } catch (error) {
        console.log(error); } 
     
        
    }
   async function updateCart(productId , count){
     
     try {
        const options = {
            method: "PUT", 
            url: `https://ecommerce.routemisr.com/api/v1/cart/${productId}`, 
          data:{
               count
          },
          
            headers: {
              token   }
        }
        const {data} = await axios.request(options)
        console.log("updateCart" , data);
          setCartInfo(data)
      } catch (error) {
        console.log(error); } 
     
        
    }
    return <>
    <CartContext.Provider value={{addToCart , getAllCart , cartInfo , removeFromCart
       , clearCart , updateCart}}>
{children}
    </CartContext.Provider>
    
    </>
}