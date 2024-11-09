// Import necessary models
// const Order = require('../../models/orderProductModel');
// const User = require('../../models/userModel');

// // Function to get order details by ID
// const getOrderDetails = async (req, res) => {
//     const { orderId } = req.params;

//     try {
//         const order = await Order.findById(orderId)
//             .populate('userId', 'name email') // Populate user details
//             .populate('items.productId', 'productName price'); // Populate product details in items

//         if (!order) {
//             return res.status(404).json({ success: false, message: "Order not found" });
//         }

//         res.status(200).json({ success: true, data: order });
//     } catch (error) {
//         console.error("Error fetching order details:", error);
//         res.status(500).json({ success: false, message: "Server error" });
//     }
// };

// module.exports =  getOrderDetails



// const Order = require('../../models/orderProductModel');
// const User = require('../../models/userModel');

// // Function to get order details by ID
// const getOrderDetails = async (req, res) => {
//     const { orderId } = req.params;

//     // Check if orderId is valid
//     if (!orderId || !/^[0-9a-fA-F]{24}$/.test(orderId)) {
//         return res.status(400).json({ success: false, message: "Invalid orderId" });
//     }

//     try {
//         const order = await Order.findById(orderId)
//             .populate('userId', 'name email') // Populate user details
//             .populate('items.productId', 'productName price'); // Populate product details in items

//         if (!order) {
//             return res.status(404).json({ success: false, message: "Order not found" });
//         }

//         res.status(200).json({ success: true, data: order });
//     } catch (error) {
//         console.error("Error fetching order details:", error);
//         res.status(500).json({ success: false, message: "Server error" });
//     }
// };

// module.exports = getOrderDetails;



// const mongoose = require('mongoose');
// const Order = require('../../models/orderProductModel'); // Adjust path if necessary


// const getOrderDetails = async (req, res) => {
//   const { orderId } = req.params; // Extract orderId from the route parameters

//   // Validate if the orderId is a valid MongoDB ObjectId
//   if (!mongoose.Types.ObjectId.isValid(orderId)) {
//     return res.status(400).send({ error: "Invalid Order ID." });
//   }

//   try {
//     // Fetch the order from the database using findById
//     const order = await Order.findById(orderId);
    
//     // Check if order exists
//     if (!order) {
//       return res.status(404).send({ error: "Order not found." });
//     }

//     // Return the order details
//     res.status(200).send(order);
//   } catch (err) {
//     // Handle errors (e.g., database issues)
//     res.status(500).send({ error: err.message });
//   }
// };

// module.exports = getOrderDetails;

const Order = require("../../models/orderProductModel")
const User = require("../../models/userModel")

const getOrderDetails = async(req, res)=>{
    const userId = req.userId;
    const user = await User.findById(userId)

    if(user.role !== 'ADMIN'){
        return res.status(500).json({
            msg:"not acces"
        })
    }
    const AllOrder = await Order.find().sort({createdAt : -1})

    return res.status(200).json({
        data : AllOrder,
        success:true
    })
}

module.exports = getOrderDetails;