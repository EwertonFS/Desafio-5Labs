import { Route, Routes } from "react-router-dom"
import { Home } from "../page/home/HomePage"
import { Checkout } from "../page/checkout/CheckoutPage"
import { Sucess } from "../page/sucess"
import { Error } from "../page/error/ErrorPage"

export const RouteApp = () =>{

    return(
    <>
     <Routes>
      <Route path="/" element={<Home />} />

      <Route path="/checkout" element={<Checkout />} />

      <Route path="/checkout/sucess" element={<Sucess />} />
      
      <Route path="*" element={<Error />} />
      
    </Routes>
    </>
 
 
 );


}