// import React, { useEffect, useState } from 'react';
// // import SummaryApi from '../common/index'; // Adjust the import path as needed
// import SummaryApi from '../common'
// import { toast } from 'react-toastify';

// const OrderListPage = () => {
//   const [orders, setOrders] = useState([]);
//   const [loading, setLoading] = useState(true);

//   // Fetch all orders from the backend
//   const fetchOrders = async () => {
//     try {
//       setLoading(true);
//       const response = await fetch(SummaryApi.orderdet.url, {
//         method: 'GET',
//         credentials: 'include',
//         headers: {
//           'Content-Type': 'application/json',
//         },
//       });

//       const data = await response.json();

//       if (data.success) {
//         setOrders(data.data); // Update the orders state with the fetched data
//       } else {
//         toast.error('Failed to fetch orders');
//       }
//     } catch (error) {
//       console.error('Error fetching orders:', error);
//       toast.error('An error occurred while fetching orders');
//     } finally {
//       setLoading(false);
//     }
//   };

//   useEffect(() => {
//     fetchOrders();
//   }, []);

//   return (
//     <div className="p-6">
//       <h2 className="text-2xl font-bold mb-4">All Orders</h2>
//       {loading ? (
//         <p>Loading...</p>
//       ) : (
//         <div className="overflow-x-auto">
//           <table className="min-w-full bg-white border border-gray-300">
//             <thead>
//               <tr className="bg-gray-100 text-gray-700">
//                 <th className="py-2 px-4 border-b">Order ID</th>
//                 <th className="py-2 px-4 border-b">User Name</th>
//                 <th className="py-2 px-4 border-b">User Email</th>
//                 <th className="py-2 px-4 border-b">Order Date</th>
//                 <th className="py-2 px-4 border-b">Items</th>
//                 <th className="py-2 px-4 border-b">Total Amount</th>
//               </tr>
//             </thead>
//             <tbody>
//               {orders.length > 0 ? (
//                 orders.map((order) => (
//                   <tr key={order._id} className="hover:bg-gray-50">
//                     <td className="py-2 px-4 border-b">{order._id}</td>
//                     <td className="py-2 px-4 border-b">{order.userId.name}</td>
//                     <td className="py-2 px-4 border-b">{order.userId.email}</td>
//                     <td className="py-2 px-4 border-b">
//                       {new Date(order.createdAt).toLocaleDateString()}
//                     </td>
//                     <td className="py-2 px-4 border-b">
//                       <ul>
//                         {order.items.map((item, index) => (
//                           <li key={index}>
//                             {item.productName} - {item.quantity}
//                           </li>
//                         ))}
//                       </ul>
//                     </td>
//                     <td className="py-2 px-4 border-b">${order.totalAmount}</td>
//                   </tr>
//                 ))
//               ) : (
//                 <tr>
//                   <td colSpan="6" className="py-2 px-4 border-b text-center">
//                     No orders found
//                   </td>
//                 </tr>
//               )}
//             </tbody>
//           </table>
//         </div>
//       )}
//     </div>
//   );
// };

// export default OrderListPage;



//  this is correct 
import React, { useEffect, useState } from 'react';
import SummaryApi from '../common';
import { toast } from 'react-toastify';

const OrderListPage = () => {
  const [orders, setOrders] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  // Fetch all orders from the backend
  const fetchOrders = async () => {
    try {
      setLoading(true);
      const response = await fetch(SummaryApi.orderdet.url, {
        method: 'GET',
        credentials: 'include',
        headers: {
          'Content-Type': 'application/json',
        },
      });

      const data = await response.json();

      if (data.success) {
        if (Array.isArray(data.data)) {
          setOrders(data.data); // Update the orders state with the fetched data
        } else {
          toast.error('Received unexpected data format');
        }
      } else {
        toast.error('Failed to fetch orders');
      }
    } catch (error) {
      console.error('Error fetching orders:', error);
      toast.error('An error occurred while fetching orders');
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchOrders();
  }, []);

  return (
    <div className="p-6">
      <h2 className="text-2xl font-bold mb-4">All Orders</h2>
      {loading ? (
        <p>Loading...</p>
      ) : error ? (
        <p className="text-red-500">{error}</p>
      ) : (
        <div className="overflow-x-auto">
          <table className="min-w-full bg-white border border-gray-300">
            <thead>
              <tr className="bg-gray-100 text-gray-700">
                <th className="py-2 px-4 border-b">Order ID</th>
                <th className="py-2 px-4 border-b">User Name</th>
                <th className="py-2 px-4 border-b">User Email</th>
                <th className="py-2 px-4 border-b">Order Date</th>
                <th className="py-2 px-4 border-b">Items</th>
                <th className="py-2 px-4 border-b">Total Amount</th>
              </tr>
            </thead>
            <tbody>
              {orders.length > 0 ? (
                orders.map((order) => (
                  <tr key={order._id} className="hover:bg-gray-50">
                    <td className="py-2 px-4 border-b">{order._id}</td>
                    <td className="py-2 px-4 border-b">{order.userId ? order.userId.name : 'Unknown User'}</td>
                    <td className="py-2 px-4 border-b">{order.userId ? order.userId.email : 'No Email'}</td>
                    <td className="py-2 px-4 border-b">{new Date(order.createdAt).toLocaleDateString()}</td>
                    <td className="py-2 px-4 border-b">
                      {order.items && order.items.length > 0 ? (
                        <ul>
                          {order.items.map((item, index) => (
                            <li key={index}>
                              {item.productName} - {item.quantity}
                            </li>
                          ))}
                        </ul>
                      ) : (
                        <span>No items</span>
                      )}
                    </td>
                    <td className="py-2 px-4 border-b">${order.totalAmount}</td>
                  </tr>
                ))
              ) : (
                <tr>
                  <td colSpan="6" className="py-2 px-4 border-b text-center">
                    No orders found
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
};

export default OrderListPage;



// import React, { useEffect, useState } from 'react';
// import SummaryApi from '../common';
// import { toast } from 'react-toastify';

// const OrderListPage = () => {
//   const [orders, setOrders] = useState([]);
//   const [loading, setLoading] = useState(true);
//   const [error, setError] = useState(null);

//   // Fetch all orders from the backend
//   const fetchOrders = async () => {
//     try {
//       setLoading(true);
//       const response = await fetch(SummaryApi.orderdet.url, {
//         method: 'GET',
//         credentials: 'include',
//         headers: {
//           'Content-Type': 'application/json',
//         },
//       });

//       const data = await response.json();

//       if (data.success) {
//         if (Array.isArray(data.data)) {
//           setOrders(data.data); // Update the orders state with the fetched data
//           console.log(data.data); // Debugging: Log the fetched orders
//         } else {
//           toast.error('Received unexpected data format');
//         }
//       } else {
//         toast.error('Failed to fetch orders');
//       }
//     } catch (error) {
//       console.error('Error fetching orders:', error);
//       setError('An error occurred while fetching orders'); // Set error state
//       toast.error('An error occurred while fetching orders');
//     } finally {
//       setLoading(false);
//     }
//   };

//   useEffect(() => {
//     fetchOrders();
//   }, []);

//   return (
//     <div className="p-6">
//       <h2 className="text-2xl font-bold mb-4">All Orders</h2>
//       {loading ? (
//         <p>Loading...</p>
//       ) : error ? (
//         <p className="text-red-500">{error}</p>
//       ) : (
//         <div className="overflow-x-auto">
//           <table className="min-w-full bg-white border border-gray-300">
//             <thead>
//               <tr className="bg-gray-100 text-gray-700">
//                 <th className="py-2 px-4 border-b">Order ID</th>
//                 <th className="py-2 px-4 border-b">User Name</th>
//                 <th className="py-2 px-4 border-b">User Email</th>
//                 <th className="py-2 px-4 border-b">Order Date</th>
//                 <th className="py-2 px-4 border-b">Items</th>
//                 <th className="py-2 px-4 border-b">Total Amount</th>
//               </tr>
//             </thead>
//             <tbody>
//               {orders.length > 0 ? (
//                 orders.map((order) => (
//                   <tr key={order._id} className="hover:bg-gray-50">
//                     <td className="py-2 px-4 border-b">{order._id}</td>
//                     <td className="py-2 px-4 border-b">{order.userId ? order.userId.name : 'Unknown User'}</td>
//                     <td className="py-2 px-4 border-b">{order.userId ? order.userId.email : 'No Email'}</td>
//                     <td className="py-2 px-4 border-b">{new Date(order.createdAt).toLocaleDateString()}</td>
//                     <td className="py-2 px-4 border-b">
//                       {order.items && order.items.length > 0 ? (
//                         <ul>
//                           {order.items.map((item, index) => (
//                             <li key={index}>
//                               {item.productName} - {item.quantity}
//                             </li>
//                           ))}
//                         </ul>
//                       ) : (
//                         <span>No items</span>
//                       )}
//                     </td>
//                     <td className="py-2 px-4 border-b">${order.totalAmount}</td>
//                   </tr>
//                 ))
//               ) : (
//                 <tr>
//                   <td colSpan="6" className="py-2 px-4 border-b text-center">
//                     No orders found
//                   </td>
//                 </tr>
//               )}
//             </tbody>
//           </table>
//         </div>
//       )}
//     </div>
//   );
// };

// export default OrderListPage;
