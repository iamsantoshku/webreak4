const bodyParser = require('body-parser');
const express = require('express')

const router = express.Router()

const userSignUpController = require("../controller/user/userSignUp")
const userSignInController = require('../controller/user/userSignIn')
const userDetailsController = require('../controller/user/userDetails')
const authToken = require('../middleware/authToken')
const userLogout = require('../controller/user/userLogout')
const allUsers = require('../controller/user/allUsers')
const updateUser = require('../controller/user/updateUser')
const UploadProductController = require('../controller/product/uploadProduct')
const getProductController = require('../controller/product/getProduct')
const updateProductController = require('../controller/product/updateProduct')
const getCategoryProduct = require('../controller/product/getCategoryProductOne')
const getCategoryWiseProduct = require('../controller/product/getCategoryWiseProduct')
const getProductDetails = require('../controller/product/getProductDetails')
const addToCartController = require('../controller/user/addToCartController')
const countAddToCartProduct = require('../controller/user/countAddToCartProduct')
const addToCartViewProduct  = require('../controller/user/addToCartViewProduct')
const updateAddToCartProduct = require('../controller/user/updateAddToCartProduct')
const deleteAddToCartProduct = require('../controller/user/deleteAddToCartProduct')
const searchProduct = require('../controller/product/searchProduct')
const filterProductController = require('../controller/product/filterProduct')
const paymentController = require('../controller/order/paymentController')
const webhooks = require('../controller/order/webhooks')
// import addToWishlistController from '../controller/user/addToWishlistController';
const addToWishlistController = require('../controller/user/addToWishlistController');
const addToWishlistViewProduct = require('../controller/user/addToWishlistViewProduct');
// const removeFromWishlist = require('../controller/user/removeFromWishlist');
// const removeFromWishlist = require('../controller/user/removeFromWishlist')
const {cancelOrder} = require('../controller/order/cancelOrder')
const deleteToWishlistProduct = require('../controller/user/deleteToWishlistProduct')
const {
    createCategory,
    getAllCategories,
  } = require("../controller/product/categoryController");
  

// const countAddToWishlistProduct = require('../../controllers/countAddToWishlistProduct');
// const updateAddToWishlistProduct = require('../../controllers/updateAddToWishlistProduct');
// import { createCheckoutSession , confirmPayment, getOrderById, getOrdersByEmail, getAllOrders, updateOrderStatus, deleteOrder} from '../controller/order/orderController';
// const orderController = require("../controller/order/orderController");
const orderController = require("../controller/order/orderController")
const getAllOrders = require("../controller/order/getAllOrders")
const getUserOrders = require("../controller/order/getUserOrders")
const getOrderDetails = require("../controller/order/getOrderDetails")
const updateOrderStatus = require("../controller/order/updateOrderStatus")



// const { createOrder } = require("../controller/order/orderController");




router.post("/signup",userSignUpController)
router.post("/signin",userSignInController)
router.get("/user-details",authToken,userDetailsController)
router.get("/userLogout",userLogout)

//admin panel 
router.get("/all-user",authToken,allUsers)
router.post("/update-user",authToken,updateUser)

//product
router.post("/upload-product",authToken,UploadProductController)
router.get("/get-product",getProductController)
router.post("/update-product",authToken,updateProductController)
router.get("/get-categoryProduct",getCategoryProduct)
router.post("/category-product",getCategoryWiseProduct)
router.post("/product-details",getProductDetails)
// router.get("/product-details/:id/:productName", getProductDetails);
// router.get('/product/:productId/:slug', getProductDetails);
router.get("/search",searchProduct)
router.post("/filter-product",filterProductController)

router.post("/create", createCategory); // Create a new category
router.get("/allcateg", getAllCategories); // Get all categories

//user add to cart
router.post("/addtocart",authToken,addToCartController)
router.get("/countAddToCartProduct",authToken,countAddToCartProduct)
router.get("/view-card-product",authToken,addToCartViewProduct)
router.post("/update-cart-product",authToken,updateAddToCartProduct)
router.post("/delete-cart-product",authToken,deleteAddToCartProduct)
// router.post("delete-wishlist-product", authToken, removeFromWishlist)

// user add to wishlist
router.post("/addtowishlist", authToken, addToWishlistController);
router.get("/view-wishlist-product", authToken, addToWishlistViewProduct);
// router.delete("/delete-wishlist-product", authToken, removeFromWishlist)
// router.delete('/delete-wishlist-product/:productId', authToken, removeFromWishlist);
router.delete('/wishlist/delete',authToken, deleteToWishlistProduct);




// router.post('/checkout', authToken, paymentController)
router.post('/create-order', orderController);
router.get('/orders', getAllOrders);
router.get('/ordersdet-admin',authToken, getOrderDetails);

router.get('/orders-det',authToken, getUserOrders);
router.patch('/orders/cancel/:orderId', cancelOrder);  
// router.put('/update-status/:orderId', updateOrderStatus);

router.put('/update-status/:orderId', async (req, res) => {
  const { orderId } = req.params;
  const { status } = req.body;

  try {
      const response = await updateOrderStatus(orderId, status);
      if (response.success) {
          return res.status(200).json({ success: true, data: response.data, msg: response.msg });
      } else {
          return res.status(404).json({ success: false, msg: response.msg });
      }
  } catch (error) {
      console.error('Error in update-status route:', error);
      res.status(500).json({ success: false, msg: 'Internal server error' });
  }
});















// router.post('/webhook', webhooks) // api webhooks


// order 
// router.post("/create-checkout-session", authToken, orderController.createCheckoutSession);
// router.post("/confirm-payment", authToken, orderController.confirmPayment);
// router.get("/orders/:email", authToken, orderController.getOrdersByEmail);
// router.get("/order/:id", authToken, orderController.getOrderById);
// router.get("/orders", authToken, orderController.getAllOrders);
// router.patch("/update-order-status/:id", authToken, orderController.updateOrderStatus);
// router.delete("/delete-order/:id", authToken, orderController.deleteOrder);


router.post('/webhook', bodyParser.raw({ type: 'application/json' }), webhooks);


// whsec_ff92bc7dbdd96729251e9f25ee96436e537b7a8b761506afed6cf02230ce12ad 

// router.post('/webhooks', express.raw({ type: 'application/json' }), webhooks);





module.exports = router





// const express = require('express');
// const bodyParser = require('body-parser');

// const router = express.Router();

// // User Controllers
// const userSignUpController = require('../controller/user/userSignUp');
// const userSignInController = require('../controller/user/userSignIn');
// const userDetailsController = require('../controller/user/userDetails');
// const authToken = require('../middleware/authToken');
// const userLogout = require('../controller/user/userLogout');
// const allUsers = require('../controller/user/allUsers');
// const updateUser = require('../controller/user/updateUser');

// // Product Controllers
// const UploadProductController = require('../controller/product/uploadProduct');
// const getProductController = require('../controller/product/getProduct');
// const updateProductController = require('../controller/product/updateProduct');
// const getCategoryProduct = require('../controller/product/getCategoryProductOne');
// const getCategoryWiseProduct = require('../controller/product/getCategoryWiseProduct');
// const getProductDetails = require('../controller/product/getProductDetails');
// const searchProduct = require('../controller/product/searchProduct');
// const filterProductController = require('../controller/product/filterProduct');

// // Cart Controllers
// const addToCartController = require('../controller/user/addToCartController');
// const countAddToCartProduct = require('../controller/user/countAddToCartProduct');
// const addToCartViewProduct = require('../controller/user/addToCartViewProduct');
// const updateAddToCartProduct = require('../controller/user/updateAddToCartProduct');
// const deleteAddToCartProduct = require('../controller/user/deleteAddToCartProduct');

// // Wishlist Controllers
// const addToWishlistController = require('../controller/user/addToWishlistController');
// const addToWishlistViewProduct = require('../controller/user/addToWishlistViewProduct');
// const removeFromWishlist = require('../controller/user/removeFromWishlist');

// // Order Controllers
// const paymentController = require('../controller/order/paymentController');
// const webhooks = require('../controller/order/webhooks');
// const orderController = require('../controller/order/orderController');

// // User Routes
// router.post('/signup', userSignUpController);
// router.post('/signin', userSignInController);
// router.get('/user-details', authToken, userDetailsController);
// router.get('/userLogout', userLogout);

// // Admin Panel Routes
// router.get('/all-user', authToken, allUsers);
// router.post('/update-user', authToken, updateUser);

// // Product Routes
// router.post('/upload-product', authToken, UploadProductController);
// router.get('/get-product', getProductController);
// router.post('/update-product', authToken, updateProductController);
// router.get('/get-categoryProduct', getCategoryProduct);
// router.post('/category-product', getCategoryWiseProduct);
// router.post('/product-details', getProductDetails);
// router.get('/search', searchProduct);
// router.post('/filter-product', filterProductController);

// // Cart Routes
// router.post('/addtocart', authToken, addToCartController);
// router.get('/countAddToCartProduct', authToken, countAddToCartProduct);
// router.get('/view-cart-product', authToken, addToCartViewProduct);
// router.post('/update-cart-product', authToken, updateAddToCartProduct);
// router.post('/delete-cart-product', authToken, deleteAddToCartProduct);

// // Wishlist Routes
// router.post('/addtowishlist', authToken, addToWishlistController);
// router.get('/view-wishlist-product', authToken, addToWishlistViewProduct);
// router.delete('/delete-wishlist-product/:productId', authToken, removeFromWishlist);

// // Payment and Order Routes
// router.post('/checkout', authToken, paymentController);
// router.post('/webhook', bodyParser.raw({ type: 'application/json' }), webhooks);

// // Additional Order Routes
// // Uncomment if you need these functionalities
// // router.post('/create-checkout-session', authToken, orderController.createCheckoutSession);
// // router.post('/confirm-payment', authToken, orderController.confirmPayment);
// // router.get('/orders/:email', authToken, orderController.getOrdersByEmail);
// // router.get('/order/:id', authToken, orderController.getOrderById);
// // router.get('/orders', authToken, orderController.getAllOrders);
// // router.patch('/update-order-status/:id', authToken, orderController.updateOrderStatus);
// // router.delete('/delete-order/:id', authToken, orderController.deleteOrder);

// module.exports = router;




