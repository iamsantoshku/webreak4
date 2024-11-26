import { createBrowserRouter } from 'react-router-dom'
import App from '../App'
import Home from '../pages/Home'
import Login from '../pages/Login'
import ForgotPassowrd from '../pages/ForgotPassowrd'
import SignUp from '../pages/SignUp'
import AdminPanel from '../pages/AdminPanel'
import AllUsers from '../pages/AllUsers'
import AllProducts from '../pages/AllProducts'
import CategoryProduct from '../pages/CategoryProduct'
import ProductDetails from '../pages/ProductDetails'
import Cart from '../pages/Cart'
import SearchProduct from '../pages/SearchProduct'
import Success from '../pages/Success'
import Cancell from '../pages/Cancell'
import Order from '../pages/Order'
// import CategoryList from '../components/CategoryList'
import CategoryList1 from '../components/CategoryList1'
import ReportPage from '../pages/ReportPage'
import Dasboard from '../pages/Dasboard'
// import WishList from '../components/WishList'
import Wish from '../pages/Wish'
// import Dashboard2 from '../pages/Dasboard2'
import Dasboard2 from '../pages/Dasboard2'
import UserDashboard from '../pages/UserDashboard'
import Profile from '../components/userdasboard/Profile'
import OrderListPage from '../pages/OrderListPage'
import Orderdetailsadmin from '../pages/Orderdetailsadmin'
import AdminCategoryPage from '../pages/AdminCategoryPage'
// import OrderWrapper from '../components/OrderWrapper'


const router = createBrowserRouter([

    
    {
        path : "/",
        element : <App/>,
        children : [
            {
                path : "",
                element : <Home/>
            },
            {
                path : "login",
                element : <Login/>
            },
            {
                path : "forgot-password",
                element : <ForgotPassowrd/>
            },
            {
                path : "sign-up",
                element : <SignUp/>
            },
            {
                path : "product-category",
                element : <CategoryProduct/>
            },
            {
                path : "product/:id",
                element : <ProductDetails/>
            },
                  
            {
                path : 'cart',
                element : <Cart/>
            },
            {
                path : "search",
                element : <SearchProduct/>
            },
            {
                path : "success",
                element : <Success/>

            },
            // 
            {
                path: "order",
                element: <Order /> 
            },
            {
                path : "cancel",
                element : <Cancell/>

            },
            {
                path:"/wishlist",
                element:<Wish />

            },
            {
                path :"user-dashboard",
                element:<UserDashboard/>
            },
            {
                path:"user-dashboard/profile",
                element:<Profile/>
            },
            {
                path:"user-dashboard/orders",
                element:<Order/>

            },
                       
                      
            {
                path : "admin-panel",
                element : <AdminPanel/>,
                children : [
                    {
                        path : "all-users",
                        element : <AllUsers/>
                    },
                    {
                        path : "all-products",
                        element : <AllProducts/>
                    },
                    {
                        path : "reports",
                        element : <ReportPage/>
                    },
                    {
                        path : "home1",
                        element : <Dasboard/>

                    },
                    {
                        path : "product-list",
                        element : <CategoryList1/>
                    },
                    {
                        path : "home2",
                        element : <Dasboard2/>
                    },
                    {
                        path : "order-list",
                        element : <OrderListPage/>
                    },
                    {
                        path : "order-detail",
                        element:<Orderdetailsadmin/>

                    },
                    {
                        path : "newcat",
                        element : <AdminCategoryPage/>
                    }
                                                          
                ]
            },
        ]
    }
])
{/* <Route path="/wishlist" element={<WishList />} /> */}


export default router



