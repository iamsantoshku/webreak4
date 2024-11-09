



import React, { useEffect, useState } from 'react';
import SummaryApi from '../common';

const Order = () => {
    const [data, setData] = useState([]);
    const [isLoading, setIsLoading] = useState(false);

    const fetchUserOrders = async () => {
        setIsLoading(true);
        try {
            const response = await fetch(SummaryApi.userOrders.url, {
                method: SummaryApi.userOrders.method,
                credentials: 'include'
            });
            const responseData = await response.json();
            if (responseData.success) {
                setData(responseData.data);
            } else {
                console.error("Failed to fetch orders:", responseData.msg);
            }
        } catch (error) {
            console.error("Error fetching orders:", error);
        } finally {
            setIsLoading(false);
        }
    };

    useEffect(() => {
        fetchUserOrders(); // Fetch orders on component mount

        // Polling: Fetch orders every 10 seconds to check for status updates
        const intervalId = setInterval(fetchUserOrders, 10000);

        // Clear interval on component unmount
        return () => clearInterval(intervalId);
    }, []);

    return (
        <div className="bg-gray-100 min-h-screen p-4 sm:p-6 lg:p-8">
            <h1 className="text-2xl sm:text-3xl font-semibold mb-4 sm:mb-6 text-gray-800">Your Orders</h1>
            {isLoading ? (
                <p className="text-center text-gray-500">Loading orders...</p>
            ) : !data.length ? (
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

export default Order;




// import React, { useEffect, useState } from 'react';
// import SummaryApi from '../common';

// const Order = () => {
//     const [data, setData] = useState([]);  // Holds the order data
//     const [isLoading, setIsLoading] = useState(false);  // Loading state

//     // Fetch the user orders from the backend
//     const fetchUserOrders = async () => {
//         setIsLoading(true);
//         try {
//             const response = await fetch(SummaryApi.userOrders.url, {
//                 method: SummaryApi.userOrders.method,
//                 credentials: 'include'
//             });
//             const responseData = await response.json();
//             if (responseData.success) {
//                 setData(responseData.data);  // Set the fetched data
//             } else {
//                 console.error("Failed to fetch orders:", responseData.msg);
//             }
//         } catch (error) {
//             console.error("Error fetching orders:", error);
//         } finally {
//             setIsLoading(false);
//         }
//     };

//     // Set up polling to fetch user orders every 10 seconds
//     useEffect(() => {
//         fetchUserOrders(); // Initial fetch on component mount

//         // Polling every 10 seconds
//         const intervalId = setInterval(fetchUserOrders, 10000);

//         // Clear interval on component unmount
//         return () => clearInterval(intervalId);
//     }, []);

//     // Update the order status when it is changed
//     const updateOrderStatus = (orderId, newStatus) => {
//         // Find the order and update the status
//         setData((prevData) =>
//             prevData.map((order) =>
//                 order.orderId === orderId ? { ...order, status: newStatus } : order
//             )
//         );
//     };

//     return (
//         <div className="bg-gray-100 min-h-screen p-4 sm:p-6 lg:p-8">
//             <h1 className="text-2xl sm:text-3xl font-semibold mb-4 sm:mb-6 text-gray-800">Your Orders</h1>
//             {isLoading ? (
//                 <p className="text-center text-gray-500">Loading orders...</p>
//             ) : !data.length ? (
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
//                             <p className="text-base sm:text-lg font-medium text-green-600 mb-2">
//                                 Status: {order.status}
//                             </p>
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

//                             {/* Button to simulate admin update */}
//                             <button
//                                 onClick={() => updateOrderStatus(order.orderId, 'Shipped')}
//                                 className="mt-4 text-white bg-blue-500 hover:bg-blue-600 p-2 rounded"
//                             >
//                                 Mark as Shipped
//                             </button>
//                         </div>
//                     ))}
//                 </div>
//             )}
//         </div>
//     );
// };

// export default Order;
