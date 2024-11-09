
// import './App.css';
// import { Outlet } from 'react-router-dom';
// import Header from './components/Header';
// import Footer from './components/Footer';
// import { ToastContainer } from 'react-toastify';
// import 'react-toastify/dist/ReactToastify.css';
// import { useEffect, useState } from 'react';
// import SummaryApi from './common';
// import Context from './context';
// import { useDispatch } from 'react-redux';
// import { setUserDetails } from './store/userSlice';

// function App() {
//   const dispatch = useDispatch()
//   const [cartProductCount,setCartProductCount] = useState(0)

//   const fetchUserDetails = async()=>{
//       const dataResponse = await fetch(SummaryApi.current_user.url,{
//         method : SummaryApi.current_user.method,
//         credentials : 'include'
//       })

//       const dataApi = await dataResponse.json()

//       if(dataApi.success){
//         dispatch(setUserDetails(dataApi.data))
//       }
//   }

//   const fetchUserAddToCart = async()=>{
//     const dataResponse = await fetch(SummaryApi.addToCartProductCount.url,{
//       method : SummaryApi.addToCartProductCount.method,
//       credentials : 'include'
//     })

//     const dataApi = await dataResponse.json()

//     setCartProductCount(dataApi?.data?.count)
//   }

//   useEffect(()=>{
//     /**user Details */
//     fetchUserDetails()
//     /**user Details cart product */
//     fetchUserAddToCart()

//   },[])
//   return (
//     <>
//       <Context.Provider value={{
//           fetchUserDetails, // user detail fetch 
//           cartProductCount, // current user add to cart product count,
//           fetchUserAddToCart
//       }}>
//         <ToastContainer 
//           position='top-center'
//         />
        
//         <Header/>
//         <main className='min-h-[calc(100vh-120px)] pt-16'>
//           <Outlet/>
//         </main>
//         <Footer/>
//       </Context.Provider>
//     </>
//   );
// }

// export default App;




// this is correct 
// import './App.css';
// import { Outlet } from 'react-router-dom';
// import Header from './components/Header';
// import Footer from './components/Footer';
// import { ToastContainer } from 'react-toastify';
// import 'react-toastify/dist/ReactToastify.css';
// import { useEffect, useState } from 'react';
// import SummaryApi from './common';
// import Context from './context';
// import { useDispatch } from 'react-redux';
// import { setUserDetails } from './store/userSlice';

// function App() {
//   const dispatch = useDispatch();
//   const [cartProductCount, setCartProductCount] = useState(0);
//   const [user, setUser] = useState(null); // State to hold user data

//   const fetchUserDetails = async () => {
//     try {
//       const dataResponse = await fetch(SummaryApi.current_user.url, {
//         method: SummaryApi.current_user.method,
//         credentials: 'include',
//       });

//       const dataApi = await dataResponse.json();

//       if (dataApi.success) {
//         dispatch(setUserDetails(dataApi.data));
//         setUser(dataApi.data); // Set user state with fetched data
//       }
//     } catch (error) {
//       console.error("Error fetching user details:", error);
//     }
//   };

//   const fetchUserAddToCart = async () => {
//     try {
//       const dataResponse = await fetch(SummaryApi.addToCartProductCount.url, {
//         method: SummaryApi.addToCartProductCount.method,
//         credentials: 'include',
//       });

//       const dataApi = await dataResponse.json();
//       setCartProductCount(dataApi?.data?.count || 0);
//     } catch (error) {
//       console.error("Error fetching cart product count:", error);
//     }
//   };

//   useEffect(() => {
//     fetchUserDetails(); // Fetch user details
//     fetchUserAddToCart(); // Fetch cart product count
//   }, []);

//   return (
//     <Context.Provider
//       value={{
//         user, // Provide user data in context
//         fetchUserDetails, // User detail fetch function
//         cartProductCount, // Current user add-to-cart product count
//         fetchUserAddToCart, // Cart product fetch function
//       }}
//     >
//       <ToastContainer position="top-center" />

//       <Header />
//       <main className="min-h-[calc(100vh-120px)] pt-16">
//         <Outlet />
//       </main>
//       <Footer />
//     </Context.Provider>
//   );
// }

// export default App;



import './App.css';
import { Outlet } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useEffect, useState } from 'react';
import SummaryApi from './common';
import Context from './context';
import { useDispatch } from 'react-redux';
import { setUserDetails } from './store/userSlice';

function App() {
    const dispatch = useDispatch();
    const [cartProductCount, setCartProductCount] = useState(0);
    const [user, setUser] = useState(null); // State to hold user data

    const fetchUserDetails = async () => {
        try {
            const dataResponse = await fetch(SummaryApi.current_user.url, {
                method: SummaryApi.current_user.method,
                credentials: 'include',
            });

            const dataApi = await dataResponse.json();

            if (dataApi.success) {
                dispatch(setUserDetails(dataApi.data));
                setUser(dataApi.data); // Set user state with fetched data
            }
        } catch (error) {
            console.error("Error fetching user details:", error);
        }
    };

    const fetchUserAddToCart = async () => {
        try {
            const dataResponse = await fetch(SummaryApi.addToCartProductCount.url, {
                method: SummaryApi.addToCartProductCount.method,
                credentials: 'include',
            });

            const dataApi = await dataResponse.json();
            setCartProductCount(dataApi?.data?.count || 0);
        } catch (error) {
            console.error("Error fetching cart product count:", error);
        }
    };

    useEffect(() => {
        fetchUserDetails(); // Fetch user details
        fetchUserAddToCart(); // Fetch cart product count
    }, []);

    return (
        <Context.Provider
            value={{
                
                user, // Provide user data in context
                fetchUserDetails, // User detail fetch function
                cartProductCount, // Current user add-to-cart product count
                fetchUserAddToCart, // Cart product fetch function
            }}
        >
            <ToastContainer position="top-center" />
            <Header />
            <main className="min-h-[calc(100vh-120px)] pt-16">
                <Outlet />
            </main>
            <Footer />
        </Context.Provider>
    );
}

export default App;



// import './App.css';
// import { Outlet } from 'react-router-dom';
// import Header from './components/Header';
// import Footer from './components/Footer';
// import { ToastContainer } from 'react-toastify';
// import 'react-toastify/dist/ReactToastify.css';
// import { useEffect, useState } from 'react';
// import SummaryApi from './common';
// import Context from './context';
// import { useDispatch } from 'react-redux';
// import { setUserDetails } from './store/userSlice';

// function App() {
//     const dispatch = useDispatch();
//     const [cartProductCount, setCartProductCount] = useState(0);
//     const [user, setUser] = useState(null); // State to hold user data

//     const fetchUserDetails = async () => {
//         try {
//             const dataResponse = await fetch(SummaryApi.current_user.url, {
//                 method: SummaryApi.current_user.method,
//                 credentials: 'include',
//             });

//             const dataApi = await dataResponse.json();

//             if (dataApi.success) {
//                 dispatch(setUserDetails(dataApi.data));
//                 setUser(dataApi.data); // Set user state with fetched data
//             }
//         } catch (error) {
//             console.error("Error fetching user details:", error);
//         }
//     };

//     const fetchUserAddToCart = async () => {
//         try {
//             const dataResponse = await fetch(SummaryApi.addToCartProductCount.url, {
//                 method: SummaryApi.addToCartProductCount.method,
//                 credentials: 'include',
//             });

//             const dataApi = await dataResponse.json();
//             setCartProductCount(dataApi?.data?.count || 0);
//         } catch (error) {
//             console.error("Error fetching cart product count:", error);
//         }
//     };

//     useEffect(() => {
//         fetchUserDetails(); // Fetch user details
//         fetchUserAddToCart(); // Fetch cart product count
//     }, []);

//     return (
//         <Context.Provider
//             value={{
//                 user, // Provide user data in context
//                 userId: user ? user.id : null, // Provide userId (adjust property name as needed)
//                 fetchUserDetails, // User detail fetch function
//                 cartProductCount, // Current user add-to-cart product count
//                 fetchUserAddToCart, // Cart product fetch function
//             }}
//         >
//             <ToastContainer position="top-center" />
//             <Header />
//             <main className="min-h-[calc(100vh-120px)] pt-16">
//                 <Outlet />
//             </main>
//             <Footer />
//         </Context.Provider>
//     );
// }

// export default App;
