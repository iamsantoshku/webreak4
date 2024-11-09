





// import React, { useEffect, useState } from 'react';
// import SummaryApi from '../common';

// const Orderdetailsadmin = () => {
//     const [data, setData] = useState([]);

//     const fetchUserOrders = async () => {
//         try {
//             const response = await fetch(SummaryApi.orderdetadmin.url, {
//                 method: SummaryApi.userOrders.method,
//                 credentials: 'include'
//             });
//             const responseData = await response.json();
//             if (responseData.success) {
//                 setData(responseData.data);
//             } else {
//                 console.error("Failed to fetch orders:", responseData.msg);
//             }
//         } catch (error) {
//             console.error("Error fetching orders:", error);
//         }
//     };

//     useEffect(() => {
//         fetchUserOrders();
//     }, []);

//     return (
//         <div className="bg-gray-100 min-h-screen p-4 sm:p-6 lg:p-8">
//             <h1 className="text-2xl sm:text-3xl font-semibold mb-4 sm:mb-6 text-gray-800">All Orders</h1>
//             {!data.length ? (
//                 <p className="text-center text-gray-500">No orders available</p>
//             ) : (
//                 <div className="space-y-6">
//                     {data.map((order, index) => (
//                         <div 
//                             key={`${order.orderId}-${index}`} 
//                             className="bg-white shadow-md rounded-lg p-4 sm:p-6 border border-gray-200"
//                         >
//                             <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between mb-4">
//                                 <h2 className="text-lg sm:text-xl font-semibold text-gray-700">
//                                     Order ID: {order.orderId}
//                                 </h2>
//                                 <p className="text-sm text-gray-500 mt-2 sm:mt-0">
//                                     Order Date: {new Date(order.createdAt).toLocaleDateString()}
//                                 </p>
//                             </div>
//                             <p className="text-base sm:text-lg font-medium text-green-600 mb-2">Status: {order.status}</p>
//                             <p className="text-base sm:text-lg font-semibold text-gray-700 mb-6">Total Amount: ${order.totalAmount}</p>

//                             <div className="border-t border-gray-200 pt-4 mb-4">
//                                 <h3 className="text-lg font-semibold text-gray-700 mb-2">Shipping Address:</h3>
//                                 <p className="text-gray-600">Name: {order.shippingAddress?.name}</p>
//                                 <p className="text-gray-600">Address Line 1: {order.shippingAddress?.addressLine1}</p>
//                                 <p className="text-gray-600">Address Line 2: {order.shippingAddress?.addressLine2}</p>
//                                 <p className="text-gray-600">City: {order.shippingAddress?.city}</p>
//                                 <p className="text-gray-600">State: {order.shippingAddress?.state}</p>
//                                 <p className="text-gray-600">Postal Code: {order.shippingAddress?.postalCode}</p>
//                                 <p className="text-gray-600">Country: {order.shippingAddress?.country}</p>
//                             </div>

//                             <div className="border-t border-gray-200 pt-4">
//                                 <h3 className="text-lg font-semibold text-gray-700 mb-4">Products:</h3>
//                                 <div className="space-y-4">
//                                     {order.products.map((product, productIndex) => (
//                                         <div 
//                                             key={product.productId + '-' + productIndex} 
//                                             className="flex flex-col sm:flex-row items-start sm:items-center border-b border-gray-200 pb-4"
//                                         >
//                                             <div className="w-24 h-24 sm:w-28 sm:h-28 overflow-hidden rounded-lg mr-0 sm:mr-4 mb-4 sm:mb-0">
//                                                 {product.productImage?.map((image, imgIndex) => (
//                                                     <img
//                                                         key={imgIndex}
//                                                         src={image}
//                                                         alt={`Product ${product.productName} - ${imgIndex + 1}`}
//                                                         className="w-full h-full object-cover"
//                                                     />
//                                                 ))}
//                                             </div>
//                                             <div className="flex-1">
//                                                 <p className="text-gray-800 font-semibold">{product.productName}</p>
//                                                 <p className="text-gray-600">Quantity: {product.quantity}</p>
//                                             </div>
//                                         </div>
//                                     ))}
//                                 </div>
//                             </div>
//                         </div>
//                     ))}
//                 </div>
//             )}
//         </div>
//     );
// };

// export default Orderdetailsadmin;




// import React, { useEffect, useState } from 'react';
// import SummaryApi from '../common';

// const Orderdetailsadmin = () => {
//     const [data, setData] = useState([]);
//     const [error, setError] = useState(null);

//     const fetchUserOrders = async () => {
//         try {
//             const response = await fetch(SummaryApi.orderdetadmin.url, {
//                 method: SummaryApi.userOrders.method,
//                 credentials: 'include'
//             });
//             const responseData = await response.json();
//             if (responseData.success) {
//                 setData(responseData.data);
//             } else {
//                 console.error("Failed to fetch orders:", responseData.msg);
//             }
//         } catch (error) {
//             console.error("Error fetching orders:", error);
//             setError("Failed to load orders.");
//         }
//     };

//     // Function to update order status
//     const updateOrderStatus = async (orderId, newStatus) => {
//         try {
//             const response = await fetch(`${SummaryApi.updateOrderStatus.url}/${orderId}`, {
//                 method: 'put',
//                 headers: {
//                     'Content-Type': 'application/json'
//                 },
//                 body: JSON.stringify({ status: newStatus })
//             });
//             const responseData = await response.json();

//             if (responseData.success) {
//                 // Update the state with the new status
//                 setData(prevData =>
//                     prevData.map(order =>
//                         order.orderId === orderId ? { ...order, status: newStatus } : order
//                     )
//                 );
//             } else {
//                 console.error("Failed to update order status:", responseData.msg);
//             }
//         } catch (error) {
//             console.error("Error updating order status:", error);
//         }
//     };

//     useEffect(() => {
//         fetchUserOrders();
//     }, []);

//     return (
//         <div className="bg-gray-100 min-h-screen p-4 sm:p-6 lg:p-8">
//             <h1 className="text-2xl sm:text-3xl font-semibold mb-4 sm:mb-6 text-gray-800">All Orders</h1>
//             {error && <p className="text-red-500">{error}</p>}
//             {!data.length ? (
//                 <p className="text-center text-gray-500">No orders available</p>
//             ) : (
//                 <div className="space-y-6">
//                     {data.map((order, index) => (
//                         <div 
//                             key={`${order.orderId}-${index}`} 
//                             className="bg-white shadow-md rounded-lg p-4 sm:p-6 border border-gray-200"
//                         >
//                             <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between mb-4">
//                                 <h2 className="text-lg sm:text-xl font-semibold text-gray-700">
//                                     Order ID: {order.orderId}
//                                 </h2>
//                                 <p className="text-sm text-gray-500 mt-2 sm:mt-0">
//                                     Order Date: {new Date(order.createdAt).toLocaleDateString()}
//                                 </p>
//                             </div>
//                             <p className="text-base sm:text-lg font-medium text-green-600 mb-2">Status: {order.status}</p>
//                             <p className="text-base sm:text-lg font-semibold text-gray-700 mb-6">Total Amount: ${order.totalAmount}</p>

//                             {/* Buttons for updating status */}
//                             <div className="flex space-x-4 mb-6">
//                                 {order.status !== 'Shipped' && (
//                                     <button 
//                                         onClick={() => updateOrderStatus(order.orderId, 'Shipped')}
//                                         className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
//                                     >
//                                         Mark as Shipped
//                                     </button>
//                                 )}
//                                 {order.status === 'Shipped' && (
//                                     <button 
//                                         onClick={() => updateOrderStatus(order.orderId, 'Delivered')}
//                                         className="px-4 py-2 bg-green-500 text-white rounded hover:bg-green-600"
//                                     >
//                                         Mark as Delivered
//                                     </button>
//                                 )}
//                             </div>

//                             <div className="border-t border-gray-200 pt-4 mb-4">
//                                 <h3 className="text-lg font-semibold text-gray-700 mb-2">Shipping Address:</h3>
//                                 <p className="text-gray-600">Name: {order.shippingAddress?.name}</p>
//                                 <p className="text-gray-600">Address Line 1: {order.shippingAddress?.addressLine1}</p>
//                                 <p className="text-gray-600">Address Line 2: {order.shippingAddress?.addressLine2}</p>
//                                 <p className="text-gray-600">City: {order.shippingAddress?.city}</p>
//                                 <p className="text-gray-600">State: {order.shippingAddress?.state}</p>
//                                 <p className="text-gray-600">Postal Code: {order.shippingAddress?.postalCode}</p>
//                                 <p className="text-gray-600">Country: {order.shippingAddress?.country}</p>
//                             </div>

//                             <div className="border-t border-gray-200 pt-4">
//                                 <h3 className="text-lg font-semibold text-gray-700 mb-4">Products:</h3>
//                                 <div className="space-y-4">
//                                     {order.products.map((product, productIndex) => (
//                                         <div 
//                                             key={product.productId + '-' + productIndex} 
//                                             className="flex flex-col sm:flex-row items-start sm:items-center border-b border-gray-200 pb-4"
//                                         >
//                                             <div className="w-24 h-24 sm:w-28 sm:h-28 overflow-hidden rounded-lg mr-0 sm:mr-4 mb-4 sm:mb-0">
//                                                 {product.productImage?.map((image, imgIndex) => (
//                                                     <img
//                                                         key={imgIndex}
//                                                         src={image}
//                                                         alt={`Product ${product.productName} - ${imgIndex + 1}`}
//                                                         className="w-full h-full object-cover"
//                                                     />
//                                                 ))}
//                                             </div>
//                                             <div className="flex-1">
//                                                 <p className="text-gray-800 font-semibold">{product.productName}</p>
//                                                 <p className="text-gray-600">Quantity: {product.quantity}</p>
//                                             </div>
//                                         </div>
//                                     ))}
//                                 </div>
//                             </div>
//                         </div>
//                     ))}
//                 </div>
//             )}
//         </div>
//     );
// };

// export default Orderdetailsadmin;

import React, { useEffect, useState } from 'react';
import SummaryApi from '../common';

const Orderdetailsadmin = () => {
    const [data, setData] = useState([]);
    const [error, setError] = useState(null);

    const fetchUserOrders = async () => {
        try {
            const response = await fetch(SummaryApi.orderdetadmin.url, {
                method: SummaryApi.orderdetadmin.method,
                credentials: 'include'
            });
            const responseData = await response.json();
            if (responseData.success) {
                setData(responseData.data);
            } else {
                console.error("Failed to fetch orders:", responseData.msg);
                setError("Failed to fetch orders.");
            }
        } catch (error) {
            console.error("Error fetching orders:", error);
            setError("Failed to load orders.");
        }
    };

    // Function to update order status
    // const updateOrderStatus = async (orderId, newStatus) => {
    //     console.log(`Updating status for order ID ${orderId} to ${newStatus}`);
    //     try {
    //         const response = await fetch(`${SummaryApi.updateOrderStatus.url}/${orderId}`, {
    //             method: 'PUT',
    //             headers: {
    //                 'Content-Type': 'application/json'
    //             },
    //             body: JSON.stringify({ status: newStatus })
    //         });
    //         const responseData = await response.json();

    //         if (responseData.success) {
    //             // Update the state with the new status
    //             setData(prevData =>
    //                 prevData.map(order =>
    //                     order.orderId === orderId ? { ...order, status: newStatus } : order
    //                 )
    //             );
    //             console.log(`Order ${orderId} status updated to ${newStatus}`);
    //         } else {
    //             console.error("Failed to update order status:", responseData.msg);
    //         }
    //     } catch (error) {
    //         console.error("Error updating order status:", error);
    //     }
    // };

    // const updateOrderStatus = async (orderId, newStatus) => {
    //     try {
    //         const response = await fetch(`${SummaryApi.updateOrderStatus.url}/${orderId}`, {
    //             method: 'PUT',
    //             headers: {
    //                 'Content-Type': 'application/json'
    //             },
    //             body: JSON.stringify({ status: newStatus })
    //         });
    //         const responseData = await response.json();
    //         console.log("Server response:", responseData); // Log the server response
    
    //         if (responseData.success) {
    //             setData(prevData =>
    //                 prevData.map(order =>
    //                     order.orderId === orderId ? { ...order, status: newStatus } : order
    //                 )
    //             );
    //         } else {
    //             console.error("Failed to update order status:", responseData.msg);
    //         }
    //     } catch (error) {
    //         console.error("Error updating order status:", error);
    //     }
    // };
    const updateOrderStatus = async (orderId, newStatus) => {
        try {
            console.log("Updating status for order ID", orderId, "to", newStatus);
            const response = await fetch(`${SummaryApi.updateOrderStatus.url}/${orderId}`, {
                method: 'PUT',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({ status: newStatus })
            });
    
            const responseData = await response.json();
            console.log("Server response:", responseData);
    
            if (responseData.success) {
                setData(prevData =>
                    prevData.map(order =>
                        order.orderId === orderId ? { ...order, status: newStatus } : order
                    )
                );
                console.log("Order status updated in state for order ID:", orderId);
            } else {
                console.error("Failed to update order status:", responseData.msg);
            }
        } catch (error) {
            console.error("Error updating order status:", error);
        }
    };
    

    useEffect(() => {
        fetchUserOrders();
    }, []);

    return (
        <div className="bg-gray-100 min-h-screen p-4 sm:p-6 lg:p-8">
            <h1 className="text-2xl sm:text-3xl font-semibold mb-4 sm:mb-6 text-gray-800">All Orders</h1>
            {error && <p className="text-red-500">{error}</p>}
            {!data.length ? (
                <p className="text-center text-gray-500">No orders available</p>
            ) : (
                <div className="space-y-6">
                    {data.map((order, index) => (
                        <div 
                            key={`${order.orderId}-${index}`} 
                            className="bg-white shadow-md rounded-lg p-4 sm:p-6 border border-gray-200"
                        >
                            <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between mb-4">
                                <h2 className="text-lg sm:text-xl font-semibold text-gray-700">
                                    Order ID: {order.orderId}
                                </h2>
                                <p className="text-sm text-gray-500 mt-2 sm:mt-0">
                                    Order Date: {new Date(order.createdAt).toLocaleDateString()}
                                </p>
                            </div>
                            <p className="text-base sm:text-lg font-medium text-green-600 mb-2">Status: {order.status}</p>
                            <p className="text-base sm:text-lg font-semibold text-gray-700 mb-6">Total Amount: ${order.totalAmount}</p>

                            {/* Buttons for updating status */}
                            <div className="flex space-x-4 mb-6">
                                {order.status !== 'Shipped' && (
                                    <button 
                                        onClick={() => {
                                            console.log('Shipped button clicked');
                                            updateOrderStatus(order.orderId, 'Shipped');
                                        }}
                                        className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
                                    >
                                        Mark as Shipped
                                    </button>
                                )}
                                {order.status === 'Shipped' && (
                                    <button 
                                        onClick={() => {
                                            console.log('Delivered button clicked');
                                            updateOrderStatus(order.orderId, 'Delivered');
                                        }}
                                        className="px-4 py-2 bg-green-500 text-white rounded hover:bg-green-600"
                                    >
                                        Mark as Delivered
                                    </button>
                                )}
                            </div>

                            <div className="border-t border-gray-200 pt-4 mb-4">
                                <h3 className="text-lg font-semibold text-gray-700 mb-2">Shipping Address:</h3>
                                <p className="text-gray-600">Name: {order.shippingAddress?.name}</p>
                                <p className="text-gray-600">Address Line 1: {order.shippingAddress?.addressLine1}</p>
                                <p className="text-gray-600">Address Line 2: {order.shippingAddress?.addressLine2}</p>
                                <p className="text-gray-600">City: {order.shippingAddress?.city}</p>
                                <p className="text-gray-600">State: {order.shippingAddress?.state}</p>
                                <p className="text-gray-600">Postal Code: {order.shippingAddress?.postalCode}</p>
                                <p className="text-gray-600">Country: {order.shippingAddress?.country}</p>
                            </div>

                            <div className="border-t border-gray-200 pt-4">
                                <h3 className="text-lg font-semibold text-gray-700 mb-4">Products:</h3>
                                <div className="space-y-4">
                                    {order.products.map((product, productIndex) => (
                                        <div 
                                            key={product.productId + '-' + productIndex} 
                                            className="flex flex-col sm:flex-row items-start sm:items-center border-b border-gray-200 pb-4"
                                        >
                                            <div className="w-24 h-24 sm:w-28 sm:h-28 overflow-hidden rounded-lg mr-0 sm:mr-4 mb-4 sm:mb-0">
                                                {product.productImage?.map((image, imgIndex) => (
                                                    <img
                                                        key={imgIndex}
                                                        src={image}
                                                        alt={`Product ${product.productName} - ${imgIndex + 1}`}
                                                        className="w-full h-full object-cover"
                                                    />
                                                ))}
                                            </div>
                                            <div className="flex-1">
                                                <p className="text-gray-800 font-semibold">{product.productName}</p>
                                                <p className="text-gray-600">Quantity: {product.quantity}</p>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            )}
        </div>
    );
};

export default Orderdetailsadmin;
