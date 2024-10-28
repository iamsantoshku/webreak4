

import React, { useContext, useEffect, useState } from 'react'
import fetchCategoryWiseProduct from '../helpers/fetchCategoryWiseProduct'
import displayINRCurrency from '../helpers/displayCurrency'
import { Link } from 'react-router-dom'
import addToCart from '../helpers/addToCart'
import Context from '../context'
import scrollTop from '../helpers/scrollTop'

const CategroyWiseProductDisplay = ({ category, heading }) => {
    const [data, setData] = useState([])
    const [loading, setLoading] = useState(true)
    const loadingList = new Array(16).fill(null)

    const { fetchUserAddToCart } = useContext(Context)

    const handleAddToCart = async (e, id) => {
        await addToCart(e, id)
        fetchUserAddToCart()
    }

    const fetchData = async () => {
        setLoading(true)
        const categoryProduct = await fetchCategoryWiseProduct(category)
        setLoading(false)

        console.log("horizontal data", categoryProduct.data)
        setData(categoryProduct?.data)
    }

    useEffect(() => {
        fetchData()
    }, [])

    return (
        <div className='container mx-auto px-4 my-6 relative'>
            <h2 className='text-2xl font-semibold py-4'>{heading}</h2>

            <div className='grid grid-cols-2 gap-4 md:grid-cols-[repeat(auto-fit,minmax(300px,320px))] md:gap-6 overflow-x-scroll scrollbar-none transition-all'>
                {loading ? (
                    loadingList.map((_, index) => (
                        <div key={index} className='w-full bg-white rounded-sm shadow'>
                            <div className='bg-slate-200 h-48 flex justify-center items-center animate-pulse'>
                            </div>
                            <div className='p-4 grid gap-3'>
                                <h2 className='font-medium text-base text-ellipsis line-clamp-1 text-black p-1 py-2 animate-pulse rounded-full bg-slate-200'></h2>
                                <p className='capitalize text-slate-500 p-1 animate-pulse rounded-full bg-slate-200 py-2'></p>
                                <div className='flex gap-3'>
                                    <p className='text-red-600 font-medium p-1 animate-pulse rounded-full bg-slate-200 w-full py-2'></p>
                                    <p className='text-slate-500 line-through p-1 animate-pulse rounded-full bg-slate-200 w-full py-2'></p>
                                </div>
                                <button className='text-sm text-white px-3 rounded-full bg-slate-200 py-2 animate-pulse'></button>
                            </div>
                        </div>
                    ))
                ) : (
                    data.map((product) => (
                        <Link key={product?._id} to={"/product/" + product?._id} className='w-full bg-white rounded-sm shadow' onClick={scrollTop}>
                            <div className='bg-slate-200 h-56 flex justify-center items-center'>
                                <img src={product.productImage[0]} className='object-scale-down h-full hover:scale-110 transition-all mix-blend-multiply' />
                            </div>
                            <div className='p-4 grid gap-1'>
                                <h2 className='font-medium text-base text-ellipsis line-clamp-1 text-black'>{product?.productName}</h2>
                                <p className='capitalize text-slate-500'>{product?.category}</p>
                                <div className='flex gap-1 -ml-3'>
                                    <p className='text-red-600 font-medium'>{displayINRCurrency(product?.sellingPrice)}</p>
                                    <p className='text-slate-500 line-through'>{displayINRCurrency(product?.price)}</p>
                                </div>
                                <button className='text-sm bg-red-600 hover:bg-red-700 text-white px-3 py-0.5 rounded-full' onClick={(e) => handleAddToCart(e, product?._id)}>Add to Cart</button>
                            </div>
                        </Link>
                    ))
                )}
            </div>
        </div>
    )
}

export default CategroyWiseProductDisplay



// import React, { useContext, useEffect, useState } from 'react';
// import fetchCategoryWiseProduct from '../helpers/fetchCategoryWiseProduct';
// import displayINRCurrency from '../helpers/displayCurrency';
// import { Link } from 'react-router-dom';
// import addToCart from '../helpers/addToCart';
// import Context from '../context';
// import scrollTop from '../helpers/scrollTop';

// const CategroyWiseProductDisplay = ({ category, heading }) => {
//   const [data, setData] = useState([]);
//   const [loading, setLoading] = useState(true);
//   const loadingList = new Array(16).fill(null);

//   const { fetchUserAddToCart } = useContext(Context);

//   const handleAddToCart = async (e, id) => {
//     e.preventDefault(); // prevent Link default navigation
//     await addToCart(e, id);
//     fetchUserAddToCart();
//   };

//   const fetchData = async () => {
//     setLoading(true);
//     const categoryProduct = await fetchCategoryWiseProduct(category);
//     setLoading(false);

//     console.log('horizontal data', categoryProduct.data);
//     setData(categoryProduct?.data);
//   };

//   useEffect(() => {
//     fetchData();
//   }, []);

//   return (
//     <div className="container mx-auto px-4 my-6 relative">
//       <h2 className="text-2xl font-semibold py-4">{heading}</h2>

//       <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 overflow-hidden transition-all">
//         {loading
//           ? loadingList.map((_, index) => (
//               <div key={index} className="w-full bg-white rounded-md shadow-md">
//                 <div className="bg-slate-200 h-48 sm:h-56 lg:h-60 flex justify-center items-center animate-pulse"></div>
//                 <div className="p-4 grid gap-3">
//                   <h2 className="font-medium text-base text-ellipsis line-clamp-1 text-black p-1 py-2 animate-pulse rounded-full bg-slate-200"></h2>
//                   <p className="capitalize text-slate-500 p-1 animate-pulse rounded-full bg-slate-200 py-2"></p>
//                   <div className="flex gap-3">
//                     <p className="text-red-600 font-medium p-1 animate-pulse rounded-full bg-slate-200 w-full py-2"></p>
//                     <p className="text-slate-500 line-through p-1 animate-pulse rounded-full bg-slate-200 w-full py-2"></p>
//                   </div>
//                   <button className="text-sm text-white px-3 rounded-full bg-slate-200 py-2 animate-pulse"></button>
//                 </div>
//               </div>
//             ))
//           : data.map((product) => (
//               <Link
//                 key={product?._id}
//                 to={'/product/' + product?._id}
//                 className="w-full bg-white rounded-md shadow-md hover:shadow-lg transition-shadow"
//                 onClick={scrollTop}
//               >
//                 <div className="bg-slate-200 h-48 sm:h-56 lg:h-60 flex justify-center items-center">
//                   <img
//                     src={product.productImage[0]}
//                     className="object-contain h-full w-full hover:scale-105 transition-transform"
//                     alt={product.productName}
//                   />
//                 </div>
//                 <div className="p-4 grid gap-3">
//                   <h2 className="font-medium text-base text-ellipsis line-clamp-1 text-black">
//                     {product?.productName}
//                   </h2>
//                   <p className="capitalize text-slate-500">{product?.category}</p>
//                   <div className="flex justify-between items-center gap-3">
//                     <p className="text-red-600 font-medium">
//                       {displayINRCurrency(product?.sellingPrice)}
//                     </p>
//                     <p className="text-slate-500 line-through">
//                       {displayINRCurrency(product?.price)}
//                     </p>
//                   </div>
//                   <button
//                     className="text-sm bg-red-600 hover:bg-red-700 text-white px-3 py-1 rounded-full transition-colors"
//                     onClick={(e) => handleAddToCart(e, product?._id)}
//                   >
//                     Add to Cart
//                   </button>
//                 </div>
//               </Link>
//             ))}
//       </div>
//     </div>
//   );
// };

// export default CategroyWiseProductDisplay;
