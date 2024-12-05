

const Order = require('../../models/orderProductModel'); // Ensure this path is correct
const User = require('../../models/userModel'); // This should match the correct path
const Product = require('../../models/productModel')

// const cancelOrder = async (req, res) => {
//     try {
//         const currentUserId = req.userId; // Ensure the user is authenticated
//         const { orderId } = req.params; // Get the order ID from the request parameters

//         // Find the order and check if it belongs to the current user
//         const order = await Order.findOne({ _id: orderId, userId: currentUserId });

//         if (!order) {
//             return res.status(404).json({
//                 msg: "Order not found or does not belong to the user",
//                 error: true
//             });
//         }

//         // Check if the order is already canceled
//         if (order.status === "Cancelled") {
//             return res.status(400).json({
//                 msg: "Order is already cancelled",
//                 error: true
//             });
//         }

//         // Update the order status to "Cancelled"
//         order.status = "Cancelled";
//         await order.save();

//         res.json({
//             msg: "Order cancelled successfully",
//             success: true,
//             data: order
//         });
//     } catch (error) {
//         res.status(500).json({
//             msg: error.message || "An error occurred while cancelling the order",
//             error: true
//         });
//     }
// };

// module.exports = cancelOrder;




// const mongoose = require("mongoose");


// const cancelOrder = async (req, res) => {
//     const { orderId } = req.params;

//     try {
//         // Check if the orderId is a valid ObjectId
//         if (mongoose.isValidObjectId(orderId)) {
//             // Find and update the order by MongoDB ObjectId
//             const order = await Order.findByIdAndUpdate(
//                 orderId,
//                 { status: "Cancelled" },
//                 { new: true }
//             );

//             if (!order) {
//                 return res.status(404).json({ success: false, msg: "Order not found" });
//             }

//             return res.json({ success: true, msg: "Order has been cancelled", data: order });
//         } else {
//             // Handle case where orderId is not an ObjectId (e.g., a Stripe ID)
//             const order = await Order.findOneAndUpdate(
//                 { stripeId: orderId }, // Replace `stripeId` with the correct field in your schema
//                 { status: "Cancelled" },
//                 { new: true }
//             );

//             if (!order) {
//                 return res.status(404).json({ success: false, msg: "Order not found" });
//             }

//             return res.json({ success: true, msg: "Order has been cancelled", data: order });
//         }
//     } catch (err) {
//         console.error("Error canceling order:", err);
//         return res.status(500).json({ success: false, msg: "Internal Server Error" });
//     }
// };

// module.exports = { cancelOrder };



const cancelOrder = async (req, res) => {
    try {
        const { orderId } = req.params; // Get orderId from params

        // Log the orderId for debugging
        // console.log('Cancel request received for orderId:', orderId);

        // Find and update the order status
        const order = await Order.findOneAndUpdate(
            { orderId }, // Match the order by its unique orderId
            { status: 'Cancelled' },
            { new: true }
        );

        if (!order) {
            // Log if no order is found
            console.error(`Order with orderId: ${orderId} not found.`);
            return res.status(404).json({ message: 'Order not found' });
        }

        // Successfully cancelled the order
        res.status(200).json({ message: 'Order cancelled successfully', order });
    } catch (error) {
        // Log the full error details
        console.error('Error canceling the order:', error);

        // Respond with a generic error message
        res.status(500).json({ message: 'Internal server error', error: error.message });
    }
};

module.exports = { cancelOrder };