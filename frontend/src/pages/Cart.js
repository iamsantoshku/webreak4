




// import React, { useContext, useEffect, useState } from 'react'
// import SummaryApi from '../common'
// import Context from '../context'
// import displayINRCurrency from '../helpers/displayCurrency'
// import { MdDelete } from "react-icons/md";
// import { loadStripe } from '@stripe/stripe-js';

// const Cart = () => {
//     const [data, setData] = useState([]);
//     const [loading, setLoading] = useState(false);
//     const context = useContext(Context);
//     const loadingCart = new Array(4).fill(null);

//     const fetchData = async () => {
//         try {
//             const response = await fetch(SummaryApi.addToCartProductView.url, {
//                 method: SummaryApi.addToCartProductView.method,
//                 credentials: 'include',
//                 headers: {
//                     "content-type": 'application/json'
//                 },
//             });

//             const responseData = await response.json();
//             if (responseData.success) {
//                 setData(responseData.data);
//             }
//         } catch (error) {
//             console.error('Error fetching cart data:', error);
//         }
//     };

//     const handleLoading = async () => {
//         await fetchData();
//     };

//     useEffect(() => {
//         const fetchDataWithLoading = async () => {
//             setLoading(true);
//             await handleLoading();
//             setLoading(false);
//         };
//         fetchDataWithLoading();
//     }, []);

//     const increaseQty = async (id, qty) => {
//         try {
//             const response = await fetch(SummaryApi.updateCartProduct.url, {
//                 method: SummaryApi.updateCartProduct.method,
//                 credentials: 'include',
//                 headers: {
//                     "content-type": 'application/json'
//                 },
//                 body: JSON.stringify({
//                     _id: id,
//                     quantity: qty + 1
//                 })
//             });

//             const responseData = await response.json();
//             if (responseData.success) {
//                 fetchData();
//             }
//         } catch (error) {
//             console.error('Error increasing quantity:', error);
//         }
//     };

//     const decreaseQty = async (id, qty) => {
//         if (qty >= 2) {
//             try {
//                 const response = await fetch(SummaryApi.updateCartProduct.url, {
//                     method: SummaryApi.updateCartProduct.method,
//                     credentials: 'include',
//                     headers: {
//                         "content-type": 'application/json'
//                     },
//                     body: JSON.stringify({
//                         _id: id,
//                         quantity: qty - 1
//                     })
//                 });

//                 const responseData = await response.json();
//                 if (responseData.success) {
//                     fetchData();
//                 }
//             } catch (error) {
//                 console.error('Error decreasing quantity:', error);
//             }
//         }
//     };

//     const deleteCartProduct = async (id) => {
//         try {
//             const response = await fetch(SummaryApi.deleteCartProduct.url, {
//                 method: SummaryApi.deleteCartProduct.method,
//                 credentials: 'include',
//                 headers: {
//                     "content-type": 'application/json'
//                 },
//                 body: JSON.stringify({
//                     _id: id,
//                 })
//             });

//             const responseData = await response.json();
//             if (responseData.success) {
//                 fetchData();
//                 context.fetchUserAddToCart();
//             }
//         } catch (error) {
//             console.error('Error deleting cart product:', error);
//         }
//     };

//     const handlePayment = async () => {
//         try {
//             const stripe = await loadStripe(process.env.REACT_APP_STRIPE_PUBLIC_KEY);
//             const response = await fetch(SummaryApi.payment.url, {
//                 method: SummaryApi.payment.method,
//                 credentials: 'include',
//                 headers: {
//                     "content-type": 'application/json'
//                 },
//                 body: JSON.stringify({
//                     cartItems: data
//                 })
//             });

//             const responseData = await response.json();
//             if (responseData?.id && stripe) {
//                 stripe.redirectToCheckout({ sessionId: responseData.id });
//             } else {
//                 console.error('Payment session ID is missing:', responseData);
//             }
//         } catch (error) {
//             console.error('Error processing payment:', error);
//         }
//     };

//     const totalQty = data.reduce((previousValue, currentValue) => previousValue + currentValue.quantity, 0);
//     const totalPrice = data.reduce((previousValue, currentValue) => previousValue + (currentValue.quantity * currentValue?.productId?.sellingPrice), 0);

//     return (
//         <div className='container mx-auto'>
//             <div className='text-center text-lg my-3'>
//                 {data.length === 0 && !loading && (
//                     <p className='bg-white py-5'>No Data</p>
//                 )}
//             </div>

//             <div className='flex flex-col lg:flex-row gap-10 lg:justify-between p-4'>
//                 {/* View Product */}
//                 <div className='w-full max-w-3xl'>
//                     {loading ? (
//                         loadingCart.map((el, index) => (
//                             <div key={el + "Add To Cart Loading" + index} className='w-full bg-slate-200 h-32 my-2 border border-slate-300 animate-pulse rounded'>
//                             </div>
//                         ))
//                     ) : (
//                         data.map((product, index) => (
//                             <div key={product?._id + "Add To Cart Loading"} className='w-full bg-white h-32 my-2 border border-slate-300 rounded grid grid-cols-[128px,1fr]'>
//                                 <div className='w-32 h-32 bg-slate-200'>
//                                     <img src={product?.productId?.productImage[0]} className='w-full h-full object-scale-down mix-blend-multiply' alt='Product' />
//                                 </div>
//                                 <div className='px-4 py-2 relative'>
//                                     {/* Delete Product */}
//                                     <div className='absolute right-0 text-red-600 rounded-full p-2 hover:bg-red-600 hover:text-white cursor-pointer' onClick={() => deleteCartProduct(product?._id)}>
//                                         <MdDelete />
//                                     </div>

//                                     <h2 className='text-lg lg:text-xl text-ellipsis line-clamp-1'>{product?.productId?.productName}</h2>
//                                     <p className='capitalize text-slate-500'>{product?.productId.category}</p>
//                                     <div className='flex items-center justify-between'>
//                                         <p className='text-red-600 font-medium text-lg'>{displayINRCurrency(product?.productId?.sellingPrice)}</p>
//                                         <p className='text-slate-600 font-semibold text-lg'>{displayINRCurrency(product?.productId?.sellingPrice * product?.quantity)}</p>
//                                     </div>
//                                     <div className='flex items-center gap-3 mt-1'>
//                                         <button className='border border-red-600 text-red-600 hover:bg-red-600 hover:text-white w-6 h-6 flex justify-center items-center rounded' onClick={() => decreaseQty(product?._id, product?.quantity)}>-</button>
//                                         <span>{product?.quantity}</span>
//                                         <button className='border border-red-600 text-red-600 hover:bg-red-600 hover:text-white w-6 h-6 flex justify-center items-center rounded' onClick={() => increaseQty(product?._id, product?.quantity)}>+</button>
//                                     </div>
//                                 </div>
//                             </div>
//                         ))
//                     )}
//                 </div>

//                 {/* Summary */}
//                 {data[0] && (
//                     <div className='mt-5 lg:mt-0 w-full max-w-sm'>
//                         {loading ? (
//                             <div className='h-36 bg-slate-200 border border-slate-300 animate-pulse'></div>
//                         ) : (
//                             <div className='h-36 bg-white'>
//                                 <h2 className='text-white bg-red-600 px-4 py-1'>Summary</h2>
//                                 <div className='flex items-center justify-between px-4 gap-2 font-medium text-lg text-slate-600'>
//                                     <p>Quantity</p>
//                                     <p>{totalQty}</p>
//                                 </div>
//                                 <div className='flex items-center justify-between px-4 gap-2 font-medium text-lg text-slate-600'>
//                                     <p>Total Price</p>
//                                     <p>{displayINRCurrency(totalPrice)}</p>
//                                 </div>
//                                 <button className='bg-blue-600 p-2 text-white w-full mt-2' onClick={handlePayment}>Payment</button>
//                             </div>
//                         )}
//                     </div>
//                 )}
//             </div>
//         </div>
//     );
// };

// export default Cart;







import React, { useContext, useEffect, useState } from 'react';
import SummaryApi from '../common';
import Context from '../context';
import displayINRCurrency from '../helpers/displayCurrency';
import { MdDelete } from 'react-icons/md';
import { loadStripe } from '@stripe/stripe-js';

const Cart = () => {
    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(false);
    const [shippingAddress, setShippingAddress] = useState({
        name: '',
        addressLine1: '',
        addressLine2: '',
        city: '',
        state: '',
        postalCode: '',
        country: '',
    });
    const context = useContext(Context);
    const loadingCart = new Array(4).fill(null);

    const fetchData = async () => {
        try {
            const response = await fetch(SummaryApi.addToCartProductView.url, {
                method: SummaryApi.addToCartProductView.method,
                credentials: 'include',
                headers: {
                    'content-type': 'application/json',
                },
            });

            const responseData = await response.json();
            if (responseData.success) {
                setData(responseData.data);
            }
        } catch (error) {
            console.error('Error fetching cart data:', error);
        }
    };

    const handleLoading = async () => {
        await fetchData();
    };

    useEffect(() => {
        const fetchDataWithLoading = async () => {
            setLoading(true);
            await handleLoading();
            setLoading(false);
        };
        fetchDataWithLoading();
    }, []);

    const increaseQty = async (id, qty) => {
        try {
            const response = await fetch(SummaryApi.updateCartProduct.url, {
                method: SummaryApi.updateCartProduct.method,
                credentials: 'include',
                headers: {
                    'content-type': 'application/json',
                },
                body: JSON.stringify({
                    _id: id,
                    quantity: qty + 1,
                }),
            });

            const responseData = await response.json();
            if (responseData.success) {
                fetchData();
            }
        } catch (error) {
            console.error('Error increasing quantity:', error);
        }
    };

    const decreaseQty = async (id, qty) => {
        if (qty >= 2) {
            try {
                const response = await fetch(SummaryApi.updateCartProduct.url, {
                    method: SummaryApi.updateCartProduct.method,
                    credentials: 'include',
                    headers: {
                        'content-type': 'application/json',
                    },
                    body: JSON.stringify({
                        _id: id,
                        quantity: qty - 1,
                    }),
                });

                const responseData = await response.json();
                if (responseData.success) {
                    fetchData();
                }
            } catch (error) {
                console.error('Error decreasing quantity:', error);
            }
        }
    };

    const deleteCartProduct = async (id) => {
        try {
            const response = await fetch(SummaryApi.deleteCartProduct.url, {
                method: SummaryApi.deleteCartProduct.method,
                credentials: 'include',
                headers: {
                    'content-type': 'application/json',
                },
                body: JSON.stringify({
                    _id: id,
                }),
            });

            const responseData = await response.json();
            if (responseData.success) {
                fetchData();
                context.fetchUserAddToCart();
            }
        } catch (error) {
            console.error('Error deleting cart product:', error);
        }
    };

    const handlePayment = async () => {
        try {
            const stripe = await loadStripe(process.env.REACT_APP_STRIPE_PUBLIC_KEY);
            const response = await fetch(SummaryApi.payment.url, {
                method: SummaryApi.payment.method,
                credentials: 'include',
                headers: {
                    'content-type': 'application/json',
                },
                body: JSON.stringify({
                    cartItems: data,
                    shippingAddress,
                }),
            });

            const responseData = await response.json();
            if (responseData?.id && stripe) {
                stripe.redirectToCheckout({ sessionId: responseData.id });
            } else {
                console.error('Payment session ID is missing:', responseData);
            }
        } catch (error) {
            console.error('Error processing payment:', error);
        }
    };

    const handleChange = (e) => {
        setShippingAddress({
            ...shippingAddress,
            [e.target.name]: e.target.value,
        });
    };

    const totalQty = data.reduce((prev, curr) => prev + curr.quantity, 0);
    const totalPrice = data.reduce((prev, curr) => prev + curr.quantity * curr?.productId?.sellingPrice, 0);

    return (
        <div className='container mx-auto'>
            <div className='text-center text-lg my-3'>
                {data.length === 0 && !loading && (
                    <p className='bg-white py-5'>No Data</p>
                )}
            </div>

            <div className='flex flex-col lg:flex-row gap-10 lg:justify-between p-4'>
                {/* View Product */}
                <div className='w-full max-w-3xl'>
                    {loading ? (
                        loadingCart.map((el, index) => (
                            <div key={el + 'Add To Cart Loading' + index} className='w-full bg-slate-200 h-32 my-2 border border-slate-300 animate-pulse rounded' />
                        ))
                    ) : (
                        data.map((product) => (
                            <div key={product?._id + 'Add To Cart Loading'} className='w-full bg-white h-32 my-2 border border-slate-300 rounded grid grid-cols-[128px,1fr]'>
                                <div className='w-32 h-32 bg-slate-200'>
                                    <img src={product?.productId?.productImage[0]} className='w-full h-full object-scale-down mix-blend-multiply' alt='Product' />
                                </div>
                                <div className='px-4 py-2 relative'>
                                    <div className='absolute right-0 text-red-600 rounded-full p-2 hover:bg-red-600 hover:text-white cursor-pointer' onClick={() => deleteCartProduct(product?._id)}>
                                        <MdDelete />
                                    </div>

                                    <h2 className='text-lg lg:text-xl text-ellipsis line-clamp-1'>{product?.productId?.productName}</h2>
                                    <p className='capitalize text-slate-500'>{product?.productId.category}</p>
                                    <div className='flex items-center justify-between'>
                                        <p className='text-red-600 font-medium text-lg'>{displayINRCurrency(product?.productId?.sellingPrice)}</p>
                                        <p className='text-slate-600 font-semibold text-lg'>{displayINRCurrency(product?.productId?.sellingPrice * product?.quantity)}</p>
                                    </div>
                                    <div className='flex items-center gap-3 mt-1'>
                                        <button className='border border-red-600 text-red-600 hover:bg-red-600 hover:text-white w-6 h-6 flex justify-center items-center rounded' onClick={() => decreaseQty(product?._id, product?.quantity)}>-</button>
                                        <span>{product?.quantity}</span>
                                        <button className='border border-red-600 text-red-600 hover:bg-red-600 hover:text-white w-6 h-6 flex justify-center items-center rounded' onClick={() => increaseQty(product?._id, product?.quantity)}>+</button>
                                    </div>
                                </div>
                            </div>
                        ))
                    )}
                </div>

                {/* Summary and Shipping Address */}
                {data[0] && (
                    <div className='mt-5 lg:mt-0 w-full max-w-sm'>
                        {loading ? (
                            <div className='h-36 bg-slate-200 border border-slate-300 animate-pulse'></div>
                        ) : (
                            <div className='bg-white p-4'>
                                <h2 className='text-white bg-red-600 px-4 py-1'>Summary</h2>
                                <div className='flex items-center justify-between px-4 gap-2 font-medium text-lg text-slate-600'>
                                    <p>Quantity</p>
                                    <p>{totalQty}</p>
                                </div>
                                <div className='flex items-center justify-between px-4 gap-2 font-medium text-lg text-slate-600'>
                                    <p>Total Price</p>
                                    <p>{displayINRCurrency(totalPrice)}</p>
                                </div>

                                {/* Shipping Address */}
                                <div className='mt-4'>
                                    <h2 className='text-white bg-blue-600 px-4 py-1'>Shipping Address</h2>
                                    <div className='px-4 py-2'>
                                        {['name', 'addressLine1', 'addressLine2', 'city', 'state', 'postalCode', 'country'].map((field) => (
                                            <input
                                                key={field}
                                                name={field}
                                                value={shippingAddress[field]}
                                                onChange={handleChange}
                                                className='border border-slate-300 p-2 w-full mb-2'
                                                placeholder={`Enter ${field.charAt(0).toUpperCase() + field.slice(1)}`}
                                                required
                                            />
                                        ))}
                                    </div>
                                </div>
                                <button className='bg-blue-600 p-2 text-white w-full mt-2' onClick={handlePayment}>Proceed to Payment</button>
                            </div>
                        )}
                    </div>
                )}
            </div>
        </div>
    );
};

export default Cart;








