

// const mongoose = require('mongoose');

// const OrderSchema = new mongoose.Schema({
//     productDetails: {
//         type: Array,
//         default: []
//     },
//     email: {
//         type: String,
//         default: ""
//     },
//     userId: {
//         type: String,
//         default: ""
//     },
//     paymentDetails: {
//         paymentId: {
//             type: String,
//             default: ""
//         },
//         payment_method_type: {
//             type: Array,
//             default: []
//         },
//         payment_status: {
//             type: String,
//             default: ""
//         }
//     },
//     shipping_options: {
//         type: Array,
//         default: []
//     },
//     totalAmount: {
//         type: Number,
//         default: 0
//     }
// }, {
//     timestamps: true
// });

// const OrderModel = mongoose.model('ord', OrderSchema);

// module.exports = OrderModel;





// const mongoose = require('mongoose');

// const OrderSchema = new mongoose.Schema({
//     userId: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
//     products: [
//         {
//             productId: { type: mongoose.Schema.Types.ObjectId, ref: 'Product', required: true },
//             quantity: { type: Number, required: true },
//         },
//     ],
//     totalAmount: { type: Number, required: true },
//     shippingAddress: {
//         name: String,
//         addressLine1: String,
//         addressLine2: String,
//         city: String,
//         state: String,
//         postalCode: String,
//         country: String,
//     },
//     status: { type: String, default: 'Pending' },
//     createdAt: { type: Date, default: Date.now },
// });

// module.exports = mongoose.model('Orderrr', OrderSchema);




// const mongoose = require('mongoose');

// const OrderSchema = new mongoose.Schema({
//     userId: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true }, // Ensure ref is 'User'
//     products: [
//         {
//             productId: { type: mongoose.Schema.Types.ObjectId, ref: 'Product', required: true },
//             quantity: { type: Number, required: true },
//         },
//     ],
//     totalAmount: { type: Number, required: true },
//     shippingAddress: {
//         name: String,
//         addressLine1: String,
//         addressLine2: String,
//         city: String,
//         state: String,
//         postalCode: String,
//         country: String,
//     },
//     status: { type: String, default: 'Pending' },
//     createdAt: { type: Date, default: Date.now },
// });

// module.exports = mongoose.model('Order', OrderSchema); // Use 'Order' instead of 'Orderrr'



// const mongoose = require('mongoose');
// const { v4: uuidv4 } = require('uuid'); // Import uuid to generate unique IDs

// const OrderSchema = new mongoose.Schema({
//     orderId: { type: String, unique: true, default: uuidv4 }, // Add unique orderId
//     userId: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
//     products: [
//         {
//             productId: { type: mongoose.Schema.Types.ObjectId, ref: 'Product', required: true },
//             quantity: { type: Number, required: true },
//         },
//     ],
//     totalAmount: { type: Number, required: true },
//     shippingAddress: {
//         name: String,
//         addressLine1: String,
//         addressLine2: String,
//         city: String,
//         state: String,
//         postalCode: String,
//         country: String,
//     },
//     status: { type: String, default: 'Pending' },
//     createdAt: { type: Date, default: Date.now },
// });

// module.exports = mongoose.model('Order', OrderSchema);




const mongoose = require('mongoose');
const { v4: uuidv4 } = require('uuid'); // Import uuid to generate unique IDs

const OrderSchema = new mongoose.Schema({
    orderId: { type: String, unique: true, default: uuidv4 }, // Add unique orderId
    userId: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
    products: [
        {
            productId: { type: mongoose.Schema.Types.ObjectId, ref: 'Product', required: true },
            productName: { type: String }, // Add product name
            productImage: { type: [String] }, // Add product image
            quantity: { type: Number, required: true },
        }, 
    ],
    totalAmount: { type: Number, required: true },
    shippingAddress: {
        name: String,
        addressLine1: String,
        addressLine2: String,
        city: String,
        state: String,
        postalCode: String,
        country: String,
    },
    status: { type: String, default: 'Pending' },
    createdAt: { type: Date, default: Date.now },
});

module.exports = mongoose.model('Order', OrderSchema);



// const mongoose = require('mongoose');

// const orderSchema = new mongoose.Schema({
//     orderId: String,
//     userId: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
//     products: [
//         {
//             productId: { type: mongoose.Schema.Types.ObjectId, ref: 'Product' },
//             quantity: Number,
//             productName: String, // If you need to save the name for display purposes
//             productImage: [String], // Allow multiple image URLs
//         }
//     ],
//     totalAmount: Number,
//     shippingAddress: String,
//     status: { type: String, default: 'Pending' }
// });

// const Order = mongoose.model('Order', orderSchema);
// module.exports = Order;

