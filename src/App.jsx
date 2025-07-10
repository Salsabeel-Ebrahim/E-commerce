import 'react-toastify/dist/ReactToastify.css';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Home from './Pages/Home/Home';
import Login from './Pages/Login/Login';
import Signup from './Pages/Signup/Signup';
import NotFound from './Pages/NotFound/NotFound';
import MainLayout from './layout/MainLayout';
import { ToastContainer } from 'react-toastify';
import Forgotpassword from './Pages/Forgotpassword/Forgotpassword';
import VerifyCode from './Pages/VerifyCode/VerifyCode';
import Resetpassword from './Pages/reset-password/Resetpassword';
import Products from './Pages/Products/Products';
import Categories from './Pages/Categories/Categories';
import ProductDetails from './Pages/ProductDetails/ProductDetails';
import Brands from './Pages/Brands/Brands';
import Orders from './Pages/Orders/Orders';
import CategoryDetails from './Pages/CategoryDetails/CategoryDetails';
import BrandItems from './Pages/BrandItems/BrandItems';
import ProtectedRoute from './Pages/ProtectedRoute/ProtectedRoute';
import GaurdRoute from './Pages/GuardRoute/GuardRoute';
import TokenProvider from './Context/Token.context/Token.context';
import CartProvider from './Context/Cart.context';
import './index.css'
import CartItem from './components/Cart Item/CartItem';
import Cart from './Pages/Cart/Cart';
import WishList from './Pages/WishList/WishList';
import WishlistProvider from './Context/WishList.context';
import Payment from './Pages/Payment/Payment';
import OrderItem from './components/OrderItem/OrderItem';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';

export default function App() {
  const router = createBrowserRouter([
  {
      path: '/',  element: <ProtectedRoute> <MainLayout /> </ProtectedRoute> , 
    children: [
      { index: true,        element: <Home /> },

      { path:"/Products" , element :<Products /> },
      { path:"/Categories" , element :<Categories /> },
      { path:"/Categories/:id" , element :<CategoryDetails /> },
      { path:"/Brands" , element :<Brands /> },
      { path:"/Brands/:id" , element :<BrandItems/> },
     { path:"/allorders" , element :<Orders /> },
     { path:"/ProductDetails/:id" , element :<ProductDetails /> },
     { path: '*',          element: <NotFound /> } ,
       { path:"/CartItem" , element :<CartItem /> },
       { path:"/WishList" , element :<WishList /> },
       { path:"/Payment" , element :<Payment/> },
       { path:"/Cart" , element :<Cart /> },
       { path:"/OrderItem" , element :<OrderItem /> },
     
    ],
    
    },


     {
 path: '/',  element: <GaurdRoute><MainLayout  /> </GaurdRoute>   , 
    children: [
            
      { path: '/login',      element: <Login /> },
      { path: '/signup',      element: <Signup /> }, 
       { path: '/Forgotpassword', element: <Forgotpassword/> },
      { path:"/VerifyCode" , element :<VerifyCode /> },
      { path:"/Resetpassword" , element :<Resetpassword /> },
      ],
     }
]);

const x = new QueryClient
  return (
    <>
    <QueryClientProvider client={x}>
             <TokenProvider>
      <CartProvider>
        <WishlistProvider>
           <RouterProvider router={router} />
   
          <ToastContainer position="top-right" hideProgressBar={false} pauseOnHover={true}
             autoClose={2000} closeButton={false} closeOnClick={true}  theme="light"
              toastClassName={() =>
    "text-sm sm:text-base px-3 py-2 sm:px-4 bg-[#f3f4f6] rounded-sm flex  text-[#27272a] sm:py-3 rounded shadow-md"
  }/>
 </WishlistProvider>
   </CartProvider>
   </TokenProvider>

  
    </QueryClientProvider>
 
    </>
  );
}