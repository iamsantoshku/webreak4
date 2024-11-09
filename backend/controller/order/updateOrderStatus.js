const Order = require('../../models/orderProductModel'); // Adjust the path to your Order model

/**
 * Updates the status of an order by orderId
 * @param {String} orderId - The ID of the order to update
 * @param {String} newStatus - The new status to set for the order
 * @returns {Object} - The updated order or an error message
 */
const updateOrderStatus = async (orderId, newStatus) => {
    try {
        // Find the order by orderId and update its status
        const updatedOrder = await Order.findOneAndUpdate(
            { orderId },
            { status: newStatus },
            { new: true } // Return the updated document
        );

        // Check if the order was found and updated
        if (!updatedOrder) {
            return { success: false, msg: 'Order not found' };
        }

        return { success: true, data: updatedOrder, msg: 'Order status updated successfully' };
    } catch (error) {
        console.error("Error updating order status:", error);
        return { success: false, msg: 'Server error' };
    }
};

module.exports = updateOrderStatus;
