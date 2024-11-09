
// const Order = require("../../models/orderProductModel");


// const stripe = require("stripe")(process.env.STRIPE_SECRET_KEY);
// const userModel = require('../../models/userModel'); // Make sure to adjust the import according to your structure

// const createCheckoutSession = async (req, res) => {
//     try {
//         const { cartItems } = req.body; // Ensure you're destructuring cartItems correctly

//         // Validate cart items
//         if (!cartItems || cartItems.length === 0) {
//             return res.status(400).json({
//                 message: 'Cart is empty',
//                 error: true,
//                 success: false
//             });
//         }

//         // Retrieve user data
//         const user = await userModel.findOne({ _id: req.userId });
//         if (!user) {
//             return res.status(404).json({
//                 message: 'User not found',
//                 error: true,
//                 success: false
//             });
//         }

//         // Create session parameters
//         const params = {
//             payment_method_types: ['card'],
//             mode: 'payment',
//             billing_address_collection: 'auto',
//             shipping_options: [
//                 {
//                     shipping_rate: 'shr_1PwMvr07rudxqA9keb32ILKs' // Make sure this shipping rate ID is valid
//                 }
//             ],
//             customer_email: user.email, // Ensuring the customer's email is included
//             metadata: {
//                 userId: user._id.toString() // Pass user ID in metadata
//             },
//             line_items: cartItems.map((item) => ({
//                 price_data: {
//                     currency: 'inr',
//                     product_data: {
//                         name: item.productId.productName,
//                         images: Array.isArray(item.productId.productImage)
//                             ? item.productId.productImage
//                             : [item.productId.productImage],
//                         metadata: {
//                             productId: item.productId._id.toString() // Ensure product ID is passed correctly
//                         }
//                     },
//                     unit_amount: Math.round(item.productId.sellingPrice * 100) // Ensure unit amount is in cents
//                 },
//                 adjustable_quantity: {
//                     enabled: true,
//                     minimum: 1
//                 },
//                 quantity: item.quantity
//             })),
//             success_url: `${process.env.FRONTEND_URL}/success?session_id={CHECKOUT_SESSION_ID}`,
//             cancel_url: `${process.env.FRONTEND_URL}/cancel`
//         };

//         // Create a new Stripe session
//         const session = await stripe.checkout.sessions.create(params);
        
//         res.status(200).json({ id: session.id }); // Return only the session ID for frontend use

//     } catch (err) {
//         console.error("Error creating checkout session:", err); // Log the error for debugging
//         res.status(500).json({
//             message: err?.message || 'Internal Server Error',
//             error: true,
//             success: false
//         });
//     }
// };

// module.exports = createCheckoutSession;



// // Confirm Payment
// exports.confirmPayment = async (req, res) => {
//   const { session_id } = req.body;
//   try {
//     const session = await stripe.checkout.sessions.retrieve(session_id, {
//       expand: ["line_items", "payment_intent"],
//     });

//     const paymentIntentId = session.payment_intent;
//     let order = await Order.findOne({ orderId: paymentIntentId });

//     if (!order) {
//       const lineItems = session.line_items.data.map((item) => ({
//         productId: item.price.product,
//         name: item.description, // Stripe session might store product name in description
//         price: item.price.unit_amount / 100,
//         quantity: item.quantity,
//       }));

//       const amount = session.amount_total / 100;

//       order = new Order({
//         orderId: paymentIntentId,
//         products: lineItems,
//         amount: amount,
//         email: session.customer_details.email,
//         status: session.payment_status === "paid" ? "pending" : "failed",
//       });
//     } else {
//       order.status = session.payment_status === "paid" ? "pending" : "failed";
//     }

//     await order.save();
//     res.json({ order });
//   } catch (error) {
//     console.error("Error confirming payment:", error);
//     res.status(500).json({ error: "Failed to confirm payment" });
//   }
// };

// // Get Orders by Email
// exports.getOrdersByEmail = async (req, res) => {
//   const email = req.params.email;
//   try {
//     const orders = await Order.find({ email }).sort({ createdAt: -1 });
//     if (!orders.length) {
//       return res.status(404).json({ order: 0, message: "No orders found for this email" });
//     }
//     res.json(orders);
//   } catch (error) {
//     console.error("Error fetching orders:", error);
//     res.status(500).json({ message: "Server error" });
//   }
// };

// // Get Order by ID
// exports.getOrderById = async (req, res) => {
//   try {
//     const order = await Order.findById(req.params.id);
//     if (!order) {
//       return res.status(404).json({ message: "Order not found" });
//     }
//     res.status(200).json(order);
//   } catch (error) {
//     console.error("Error fetching order:", error);
//     res.status(500).json({ message: "Server error" });
//   }
// };

// // Get All Orders
// exports.getAllOrders = async (req, res) => {
//   try {
//     const orders = await Order.find().sort({ createdAt: -1 });
//     if (!orders.length) {
//       return res.status(200).json({ message: "No orders found", orders: [] });
//     }
//     res.status(200).json(orders);
//   } catch (error) {
//     console.error("Error fetching orders:", error);
//     res.status(500).json({ message: "Server error" });
//   }
// };

// // Update Order Status
// exports.updateOrderStatus = async (req, res) => {
//   try {
//     const { id } = req.params;
//     const { status } = req.body;

//     if (!status) {
//       return res.status(400).json({ message: "Order status is required" });
//     }

//     const updatedOrder = await Order.findByIdAndUpdate(
//       id,
//       { status, updatedAt: Date.now() },
//       { new: true, runValidators: true }
//     );

//     if (!updatedOrder) {
//       return res.status(404).json({ message: "Order not found" });
//     }

//     res.status(200).json({
//       message: "Order status updated successfully",
//       order: updatedOrder,
//     });
//   } catch (error) {
//     console.error("Error updating order status:", error);
//     res.status(500).json({ message: "Server error" });
//   }
// };

// // Delete Order
// exports.deleteOrder = async (req, res) => {
//   try {
//     const { id } = req.params;

//     const deletedOrder = await Order.findByIdAndDelete(id);

//     if (!deletedOrder) {
//       return res.status(404).json({ message: "Order not found" });
//     }

//     res.status(200).json({
//       message: "Order deleted successfully",
//       order: deletedOrder,
//     });
//   } catch (error) {
//     console.error("Error deleting order:", error);
//     res.status(500).json({ message: "Server error" });
//   }
// };




// const express = require('express');
// const Order = require('../../models/orderProductModel');
// const stripe = require('stripe')(process.env.STRIPE_SECRET_KEY);
// // const router = express.Router();

// async function createOrder(req, res) {
//     const { userId, cartItems, shippingAddress } = req.body;

//     // Calculate the total amount
//     const totalAmount = cartItems.reduce(
//         (total, item) => total + item.quantity * item.productId.sellingPrice,
//         0
//     );

//     try {
//         // Create Stripe session
//         const session = await stripe.checkout.sessions.create({
//             payment_method_types: ['card'],
//             line_items: cartItems.map((item) => ({
//                 price_data: {
//                     currency: 'inr',
//                     product_data: {
//                         name: item.productId.productName,
//                     },
//                     unit_amount: item.productId.sellingPrice * 100, // Convert to paisa
//                 },
//                 quantity: item.quantity,
//             })),
//             mode: 'payment',
//             success_url: `${process.env.FRONTEND_URL}/success?session_id={CHECKOUT_SESSION_ID}`,
//             cancel_url: `${process.env.FRONTEND_URL}/cancel`,
//         });

//         // Save order in the database
//         const order = new Order({
//             userId,
//             products: cartItems.map((item) => ({
//                 productId: item.productId._id,
//                 quantity: item.quantity,
//             })),
//             totalAmount,
//             shippingAddress,
//             status: 'Pending',
//         });

//         await order.save();

//         // Return session ID for Stripe redirection
//         res.status(200).json({ success: true, sessionId: session.id });
//     } catch (error) {
//         console.error('Error creating order:', error);
//         res.status(500).json({ success: false, message: 'Could not create order' });
//     }
// }

// module.exports = { createOrder };

// routes/order.js
// const express = require('express');
// // const Order = require('../models/Order');
// const Order = require('../../models/orderProductModel');
// const userModel = require('../../models/userModel')
// const stripe = require('stripe')(process.env.STRIPE_SECRET_KEY);


// const orderController = async (req, res) => {
//     const { userId, cartItems, shippingAddress } = req.body;

//     if (!userId) {
//         return res.status(400).json({ success: false, message: 'User ID is required' });
//     }

//     const totalAmount = cartItems.reduce(
//         (total, item) => total + item.quantity * item.productId.sellingPrice,
//         0
//     );

//     try {
//         const session = await stripe.checkout.sessions.create({
//             payment_method_types: ['card'],
//             line_items: cartItems.map((item) => ({
//                 price_data: {
//                     currency: 'inr',
//                     product_data: { name: item.productId.productName },
//                     unit_amount: item.productId.sellingPrice * 100,
//                 },
//                 quantity: item.quantity,
//             })),
//             mode: 'payment',
//             success_url: `${process.env.FRONTEND_URL}/success`,
//             cancel_url: `${process.env.FRONTEND_URL}/cancel`,
//         });

//         const order = new Order({
//             userId,  // Ensure userId is used here
//             products: cartItems.map((item) => ({
//                 productId: item.productId._id,
//                 quantity: item.quantity,
//             })),
//             totalAmount,
//             shippingAddress,
//             status: 'Pending',
//         });

//         await order.save();

//         res.status(200).json({ success: true, sessionId: session.id });
//     } catch (error) {
//         console.error('Error creating order:', error);
//         res.status(500).json({ success: false, message: 'Could not create order' });
//     }
// };

// module.exports = orderController;




// const express = require('express');
// const Order = require('../../models/orderProductModel'); // Ensure the correct model is imported
// const userModel = require('../../models/userModel');
// const stripe = require('stripe')(process.env.STRIPE_SECRET_KEY);

// const orderController = async (req, res) => {
//     const { userId, cartItems, shippingAddress } = req.body;

//     if (!userId) {
//         return res.status(400).json({ success: false, message: 'User ID is required' });
//     }

//     const totalAmount = cartItems.reduce(
//         (total, item) => total + item.quantity * item.productId.sellingPrice,
//         0
//     );

//     try {
//         // Create a Stripe session
//         const session = await stripe.checkout.sessions.create({
//             payment_method_types: ['card'],
//             line_items: cartItems.map((item) => ({
//                 price_data: {
//                     currency: 'inr',
//                     product_data: { name: item.productId.productName },
//                     unit_amount: item.productId.sellingPrice * 100,
//                 },
//                 quantity: item.quantity,
//             })),
//             mode: 'payment',
//             success_url: `${process.env.FRONTEND_URL}/success`,
//             cancel_url: `${process.env.FRONTEND_URL}/cancel`,
//         });

//         // Create the order only if session creation was successful
//         const order = new Order({
//             orderId: session.id, // Optionally you could use a UUID or other unique identifier
//             userId,
//             products: cartItems.map((item) => ({
//                 productId: item.productId._id,
//                 quantity: item.quantity,
//             })),
//             totalAmount,
//             shippingAddress,
//             status: 'Pending',
//         });

//         await order.save(); // Save the order

//         res.status(200).json({ success: true, sessionId: session.id });
//     } catch (error) {
//         console.error('Error creating order:', error);
//         res.status(500).json({ success: false, message: 'Could not create order' });
//     }
// };

// module.exports = orderController;



const express = require('express');
const Order = require('../../models/orderProductModel'); // Ensure the correct model is imported
const userModel = require('../../models/userModel');
const stripe = require('stripe')(process.env.STRIPE_SECRET_KEY);

const orderController = async (req, res) => {
    const { userId, cartItems, shippingAddress } = req.body;

    if (!userId) {
        return res.status(400).json({ success: false, message: 'User ID is required' });
    }

    const totalAmount = cartItems.reduce(
        (total, item) => total + item.quantity * item.productId.sellingPrice,
        0
    );

    try {
        // Create a Stripe session
        const session = await stripe.checkout.sessions.create({
            payment_method_types: ['card'],
            line_items: cartItems.map((item) => ({
                price_data: {
                    currency: 'inr',
                    product_data: { name: item.productId.productName,
                        images: Array.isArray(item.productId.productImage)
                        ? item.productId.productImage
                        : [item.productId.productImage]
                    },
                    unit_amount: item.productId.sellingPrice * 100,
                },
                quantity: item.quantity,
            })),
            mode: 'payment',
            success_url: `${process.env.FRONTEND_URL}/success`,
            cancel_url: `${process.env.FRONTEND_URL}/cancel`,
        });

        // Create the order only if session creation was successful
        const order = new Order({
            orderId: session.id,
            userId,
            products: cartItems.map((item) => ({
                productId: item.productId._id,
                quantity: item.quantity,
                productName: item.productId.productName,
                // productimage: item.image, // Assuming `images` is an array
                productImage:item.productId.productImage
                // productId
            })),
            totalAmount,
            shippingAddress,
            status: 'Pending',
        });

        await order.save(); // Save the order

        res.status(200).json({ success: true, sessionId: session.id });
    } catch (error) {
        console.error('Error creating order:', error);
        res.status(500).json({ success: false, message: 'Could not create order' });
    }
};


// const orderController = async (req, res) => {
//     const { userId, cartItems, shippingAddress } = req.body;

//     if (!userId) {
//         return res.status(400).json({ success: false, message: 'User ID is required' });
//     }

//     try {
//         // Populate the product data in cartItems
//         const populatedCartItems = await Promise.all(
//             cartItems.map(async (item) => {
//                 const product = await Product.findById(item.productId).select('productName images sellingPrice');
//                 if (!product) {
//                     throw new Error(`Product with ID ${item.productId} not found.`);
//                 }
//                 return {
//                     productId: product._id,
//                     productName: product.productName,
//                     productImage: product.images, // Ensure `images` is correctly assigned here
//                     quantity: item.quantity,
//                 };
//             })
//         );

//         // Calculate total amount
//         const totalAmount = populatedCartItems.reduce(
//             (total, item) => total + item.quantity * item.productId.sellingPrice,
//             0
//         );

//         // Create a Stripe session
//         const session = await stripe.checkout.sessions.create({
//             payment_method_types: ['card'],
//             line_items: populatedCartItems.map((item) => ({
//                 price_data: {
//                     currency: 'inr',
//                     product_data: { name: item.productName },
//                     unit_amount: item.productId.sellingPrice * 100,
//                 },
//                 quantity: item.quantity,
//             })),
//             mode: 'payment',
//             success_url: `${process.env.FRONTEND_URL}/success`,
//             cancel_url: `${process.env.FRONTEND_URL}/cancel`,
//         });

//         if (!session.id) {
//             throw new Error('Failed to create Stripe session.');
//         }

//         // Create the order in the database
//         const order = new Order({
//             orderId: session.id,
//             userId,
//             products: populatedCartItems,
//             totalAmount,
//             shippingAddress,
//             status: 'Pending',
//         });

//         await order.save(); // Save the order

//         res.status(200).json({ success: true, sessionId: session.id });
//     } catch (error) {
//         console.error('Error creating order:', error.message);
//         res.status(500).json({ success: false, message: `Could not create order: ${error.message}` });
//     }
// };

module.exports = orderController;






module.exports = orderController;
