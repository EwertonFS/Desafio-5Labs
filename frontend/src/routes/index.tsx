import { Route, Routes } from "react-router-dom"
import { Home } from "../page/home"
import { Checkout } from "../page/checkout"
import { Sucess } from "../page/sucess"
import { Error } from "../page/error"

export const RouteApp = () =>{

    return(
    <>
     <Routes>
      <Route path="/" element={<Home />} />

      <Route path="/checkout" element={<Checkout />} />

      <Route path="/checkout/sucess" element={<Sucess />} />
      
      <Route path="/checkout/error" element={<Error />} />
    </Routes>
    </>
 
 
 );


}