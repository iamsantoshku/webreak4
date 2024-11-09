// Function to get orders for a specific user
const Order = require('../../models/orderProductModel'); // Ensure this path is correct
const User = require('../../models/userModel'); // This should match the correct path
// const getUserOrders = async (req, res) => {
   
//     try{
//         const currentUserId = req.userId
//         const orderList = await Order.find({userId : currentUserId})

//         res.json({
//             data : orderList,
//             msg :"order",
//             success: true
//         })


//     }catch(error){
//         res.status(500).json({
//             msg : error.msg || error,
//             error:true
//         })
//     }

const getUserOrders = async (req, res) => {
    try {
        const currentUserId = req.userId;
        const orderList = await Order.find({ userId: currentUserId });
        res.json({
            data: orderList,
            msg: "Orders retrieved successfully",
            success: true
        });
    } catch (error) {
        res.status(500).json({
            msg: error.message || "An error occurred",
            error: true
        });
    }
};
module.exports = getUserOrders;

    
    
// };
// module.exports = getUserOrders;