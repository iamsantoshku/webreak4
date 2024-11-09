import React from "react";
import SUCCESSIMAGE from '../assest/success.gif'
import { NavLink } from "react-router-dom";

const Success = ()=>{
    return(
        //  <h1>this is Success</h1>
        <div className="bg-slate-200 w-full max-w-md mx-auto flex justify-center items-center flex-col p-4 m-3">
            <img src={SUCCESSIMAGE} width={300} height={300} />
            <p className="text-green-600 font-bold text-xl">payment succesfully</p>
            <NavLink to={"/order"} className='p-2 px-3 mt-5 border-2 border-green-600 rounded font-semibold text-green'>See order</NavLink>
        </div>
         

    )
}
export default Success






