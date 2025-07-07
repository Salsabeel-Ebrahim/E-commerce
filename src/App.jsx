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
export default function App() {
  const router = createBrowserRouter([
  {
      path: '/',  element: <ProtectedRoute> <MainLayout /> </ProtectedRoute> , 
    children: [
      { index: true,        element: <Home /> },
 { path: 'Forgotpassword', element: <Forgotpassword/> },
      { path:"/VerifyCode" , element :<VerifyCode /> },
      { path:"/Resetpassword" , element :<Resetpassword /> },
      { path:"/Products" , element :<Products /> },
      { path:"/Categories" , element :<Categories /> },
      { path:"/Categories/:id" , element :<CategoryDetails /> },
      { path:"/Brands" , element :<Brands /> },
      { path:"/Brands/:id" , element :<BrandItems/> },
     { path:"/Orders" , element :<Orders /> },
     { path:"/ProductDetails/:id" , element :<ProductDetails /> },
     { path: '*',          element: <NotFound /> } ,
       { path:"/CartItem" , element :<CartItem /> },
       { path:"/WishList" , element :<WishList /> },
       { path:"/Cart" , element :<Cart /> },
     
    ],
    
    },


     {
 path: '/',  element: <GaurdRoute><MainLayout /> </GaurdRoute>   , 
    children: [
            
      { path: 'login',      element: <Login /> },
      { path: 'signup',      element: <Signup /> }, ],
     }
]);

  return (
    <>
    <TokenProvider>
      <CartProvider>
        <WishlistProvider>
           <RouterProvider router={router} />
   
          <ToastContainer position="top-right" hideProgressBar={false} pauseOnHover={true}
             autoClose={2000} closeButton={false} closeOnClick={true}  theme="light"/>
 </WishlistProvider>
   </CartProvider>
   </TokenProvider>

  
    </>
  );
}