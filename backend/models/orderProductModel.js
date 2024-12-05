

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




// const mongoose = require('mongoose');
// const { v4: uuidv4 } = require('uuid'); // Import uuid to generate unique IDs

// const OrderSchema = new mongoose.Schema({
//     orderId: { type: String, unique: true, default: uuidv4 }, // Add unique orderId
//     userId: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
//     products: [
//         {
//             productId: { type: mongoose.Schema.Types.ObjectId, ref: 'Product', required: true },
//             productName: { type: String }, // Add product name
//             productImage: { type: [String] }, // Add product image
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


// new 

// const mongoose = require('mongoose');
// const { v4: uuidv4 } = require('uuid'); // Import uuid to generate unique IDs

// const OrderSchema = new mongoose.Schema({
//     orderId: { type: String, unique: true, default: uuidv4 }, // Add unique orderId
//     userId: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
//     products: [
//         {
//             productId: { type: mongoose.Schema.Types.ObjectId, ref: 'Product', required: true },
//             productName: { type: String }, // Add product name
//             productImage: { type: [String] }, // Add product image
//             size: { type: String }, // Add size field here
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
    orderId: { 
        type: String, 
        unique: true, 
        default: uuidv4 
    }, // Unique orderId for external references
    userId: { 
        type: mongoose.Schema.Types.ObjectId, 
        ref: 'User', 
        required: true 
    },
    products: [
        {
            productId: { 
                type: mongoose.Schema.Types.ObjectId, 
                ref: 'Product', 
                required: true 
            },
            productName: { 
                type: String, 
                required: true 
            }, // Product name is required for display purposes
            productImage: { 
                type: [String], 
                default: [] 
            }, // Default to an empty array for safety
            size: { 
                type: String, 
                default: 'N/A' 
            }, // Default size to 'N/A' if not applicable
            quantity: { 
                type: Number, 
                required: true, 
                min: 1 
            }, // Ensure quantity is at least 1
        },
    ],
    totalAmount: { 
        type: Number, 
        required: true, 
        min: 0 
    }, // Ensure total amount is non-negative
    shippingAddress: {
        name: { 
            type: String, 
            required: true 
        },
        addressLine1: { 
            type: String, 
            required: true 
        },
        addressLine2: { 
            type: String 
        },
        city: { 
            type: String, 
            required: true 
        },
        state: { 
            type: String, 
            required: true 
        },
        postalCode: { 
            type: String, 
            required: true 
        },
        country: { 
            type: String, 
            required: true 
        },
    },
    status: { 
        type: String, 
        enum: ['Pending', 'Processing', 'Shipped', 'Delivered', 'Cancelled'], 
        default: 'Pending' 
    }, // Enforce specific status values
    createdAt: { 
        type: Date, 
        default: Date.now 
    },
    updatedAt: { 
        type: Date 
    }, // Add an optional updated timestamp
});

OrderSchema.pre('save', function (next) {
    // Automatically set updatedAt before saving if modified
    this.updatedAt = new Date();
    next();
});

module.exports = mongoose.model('Order', OrderSchema);
