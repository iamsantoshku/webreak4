// const Order = require('../models/Order');
// const Order = require('../../models/orderProductModel');
// const userModel = require('../../models/userModel')
// // Function to get all orders with user details
// const getAllOrders = async (req, res) => {
//     try {
//         const orders = await Order.find().populate('userId', 'name email'); // Populate user details
//         res.status(200).json({ success: true, data: orders });
//     } catch (error) {
//         console.error("Error fetching orders:", error);
//         res.status(500).json({ success: false, message: "Server error" });
//     }
// };

// module.exports = getAllOrders;
    


const Order = require('../../models/orderProductModel'); // Ensure this path is correct
const User = require('../../models/userModel'); // This should match the correct path

// Function to get all orders with user details
const getAllOrders = async (req, res) => {
    try {
        const orders = await Order.find().populate('userId', 'name email'); // Populate user details
        res.status(200).json({ success: true, data: orders });
    } catch (error) {
        console.error("Error fetching orders:", error);
        res.status(500).json({ success: false, message: "Server error" });
    }
};

module.exports = getAllOrders;


