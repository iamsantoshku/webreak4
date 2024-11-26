// import SummaryApi from "../common"
// import { toast } from 'react-toastify'

// const addToCart = async(e,id) =>{
//     e?.stopPropagation()
//     e?.preventDefault()

//     const response = await fetch(SummaryApi.addToCartProduct.url,{
//         method : SummaryApi.addToCartProduct.method,
//         credentials : 'include',
//         headers : {
//             "content-type" : 'application/json'
//         },
//         body : JSON.stringify(
//             { productId : id,
//                  }
//         )
//     })

//     const responseData = await response.json()

//     if(responseData.success){
//         toast.success(responseData.message)
//     }

//     if(responseData.error){
//         toast.error(responseData.message)
//     }


//     return responseData

// }


// export default addToCart





import SummaryApi from "../common";
import { toast } from "react-toastify";

const addToCart = async (e, id, size) => {
  try {
    e?.stopPropagation();
    e?.preventDefault();

    const response = await fetch(SummaryApi.addToCartProduct.url, {
      method: SummaryApi.addToCartProduct.method,
      credentials: "include",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        productId: id,
        size: size, // Include selected size here
      }),
    });

    const responseData = await response.json();

    if (responseData.success) {
      toast.success(responseData.message);
    } else if (responseData.error) {
      toast.error(responseData.message);
    }

    return responseData;
  } catch (error) {
    // Log unexpected errors and show a toast message
    console.error("Error adding to cart:", error);
    toast.error("Something went wrong. Please try again.");
    return { error: true, message: error.message };
  }
};

export default addToCart;
