
const backendDomin = process.env.REACT_APP_BACKEND_URL;


const SummaryApi = {
    signUP : {
        url : `${backendDomin}/api/signup`,
        method : "post"
    },
    front :{
        url2 : `https://fashomart.com/`
    },
    
    signIn : {
        url : `${backendDomin}/api/signin`,
        method : "post"
    },
    current_user : {
        url : `${backendDomin}/api/user-details`,
        method : "get"
    },
    logout_user : {
        url : `${backendDomin}/api/userLogout`,
        method : 'get'
    },
    allUser : {
        url : `${backendDomin}/api/all-user`,
        method : 'get'
    },
    updateUser : {
        url : `${backendDomin}/api/update-user`,
        method : "post"
    },
    uploadProduct : {
        url : `${backendDomin}/api/upload-product`,
        method : 'post'
    },
    allProduct : {
        url : `${backendDomin}/api/get-product`,
        method : 'get'
    },
    updateProduct : {
        url : `${backendDomin}/api/update-product`,
        method  : 'post'
    },
    categoryProduct : {
        url : `${backendDomin}/api/get-categoryProduct`,
        method : 'get'
    },
    categoryWiseProduct : {
        url : `${backendDomin}/api/category-product`,
        method : 'post'
    },
    productDetails : {
        url : `${backendDomin}/api/product-details`,
        method : 'post'
    },
    addToCartProduct : {
        url : `${backendDomin}/api/addtocart`,
        method : 'post'
    },
    addToCartProductCount : {
        url : `${backendDomin}/api/countAddToCartProduct`,
        method : 'get'
    },
    addToCartProductView : {
        url : `${backendDomin}/api/view-card-product`,
        method : 'get'
    },
    updateCartProduct : {
        url : `${backendDomin}/api/update-cart-product`,
        method : 'post'
    },
    addToWishlist:{
        url : `${backendDomin}/api/addtowishlist`,
        method : 'post'
    },
    addToWishlistview:{
        url : `${backendDomin}/api/view-wishlist-product`,
        method : 'get'
    },
    // 
    removetowish:{
        url : `${backendDomin}/api/wishlist/delete`,
        method : 'delete'
    },
    
    deleteCartProduct : {
        url : `${backendDomin}/api/delete-cart-product`,
        method : 'post'
    },
    searchProduct : {
        url : `${backendDomin}/api/search`,
        method : 'get'
    },
    filterProduct : {
        url : `${backendDomin}/api/filter-product`,
        method : 'post'
    },
    // payment : {
    //     url : `${backendDomin}/api/checkout`,
    //     method : 'post'
    // },
    payment : {
        url : `${backendDomin}/api/create-order`,
        method : 'post'
    },
    orderdet:{
        url : `${backendDomin}/api/orders`,
        method : 'get'
    },
    userOrders: { // New entry for user orders
        url: `${backendDomin}/api/orders-det`, 
        method: 'get'
    },
    orderdetadmin:{       
        url : `${backendDomin}/api/ordersdet-admin`,
        method : 'get'
    },
    updateOrderStatus:{
        url : `${backendDomin}/api/update-status`,
        method : 'put'
    }
    
    
    
}


export default SummaryApi


