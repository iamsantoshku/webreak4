






// import React, { useContext, useEffect, useRef, useState } from 'react';
// import fetchCategoryWiseProduct from '../helpers/fetchCategoryWiseProduct';
// import displayINRCurrency from '../helpers/displayCurrency';
// import { FaAngleLeft, FaAngleRight, FaHeart, FaShoppingBag } from 'react-icons/fa';
// import { Link } from 'react-router-dom';
// import addToWishlist from '../helpers/addToWishlist';
// import { toast } from 'react-toastify';
// import { FaRegHeart } from "react-icons/fa";
// import Context from '../context';

// const VerticalCardProduct = ({ category, heading }) => {
//     const [data, setData] = useState([]);
//     const [loading, setLoading] = useState(true);
//     const loadingList = new Array(13).fill(null);
//     const scrollElement = useRef();
//     const { fetchUserAddToCart } = useContext(Context);

//     const handleAddToWishlist = async (e, id) => {
//         e.stopPropagation();
//         const response = await addToWishlist(e, id);
//         if (response.success) {
//             toast.success("Product added to wishlist");
//         } else {
//             toast.error(response.message || "Failed to add to wishlist");
//         }
//     };

//     const fetchData = async () => {
//         setLoading(true);
//         const categoryProduct = await fetchCategoryWiseProduct(category);
//         setLoading(false);
//         setData(categoryProduct?.data);
//     };

//     useEffect(() => {
//         fetchData();
//     }, []);

//     const scrollRight = () => {
//         scrollElement.current.scrollLeft += 300;
//     };

//     const scrollLeft = () => {
//         scrollElement.current.scrollLeft -= 300;
//     };

//     return (
//         <div className='container mx-auto px-4 my-6 relative lg:ml-5'>
//             <h2 className='text-2xl font-semibold py-4'>{heading}</h2>

//             <div className='flex items-center gap-4 md:gap-6 overflow-x-scroll scrollbar-none transition-all' ref={scrollElement}>
//                 <button className='bg-white shadow-md rounded-full p-1 absolute left-0 text-lg hidden md:block' onClick={scrollLeft}>
//                     <FaAngleLeft />
//                 </button>
//                 <button className='bg-white shadow-md rounded-full p-1 absolute right-0 text-lg hidden md:block' onClick={scrollRight}>
//                     <FaAngleRight />
//                 </button>

//                 {loading ? (
//                     loadingList.map((_, index) => (
//                         <div key={index} className='w-full min-w-[180px] md:min-w-[260px] max-w-[180px] md:max-w-[260px] bg-white rounded-sm shadow'>
//                             <div className='bg-slate-200 h-56 md:h-72 p-4 flex justify-center items-center animate-pulse'></div>
//                             <div className='p-4 grid gap-1'>
//                                 <h2 className='font-medium text-base md:text-lg text-ellipsis line-clamp-1 text-black p-1 py-1 animate-pulse rounded-full bg-slate-200'></h2>
//                                 <p className='capitalize text-slate-500 p-1 animate-pulse rounded-full bg-slate-200 py-1'></p>
//                                 <div className='flex flex-col md:flex-row md:gap-3'>
//                                     <p className='text-red-600 font-medium p-1 animate-pulse rounded-full bg-slate-200 w-full py-1'></p>
//                                     <p className='text-slate-500 line-through p-1 animate-pulse rounded-full bg-slate-200 w-full py-1'></p>
//                                 </div>
//                             </div>
//                         </div>
//                     ))
//                 ) : (
//                     data.map((product, index) => (
//                         <div key={index} className='w-full min-w-[180px] md:min-w-[260px] max-w-[180px] md:max-w-[260px] bg-white rounded-sm shadow relative'>
//                             <Link to={`/product/${product?._id}`} className='block'>
//                                 <ImageHoverSlider images={product.productImage} productName={product?.productName} />
//                             </Link>

//                             {/* Wishlist button */}
//                             <div className='absolute top-4 right-2 flex gap-2'>
//                                 <button onClick={(e) => handleAddToWishlist(e, product._id)} className='bg-white p-1 rounded-full shadow-md'>
//                                     <FaRegHeart />
//                                 </button>
//                             </div>




//                             <div className='p-4 grid'>
//     {/* Bestseller and Only on Fashomart badges */}
//     <div className='flex gap-1 mb-1'>
//         <span className='bg-blue-100 text-blue-800 text-xs font-semibold px-2 py-0.5 rounded'>ONLY ON FASHOMART</span>
//     </div>

//     {/* Brand Name */}
//     <p className='text-sm text-black font-medium m-0 leading-tight'>{product?.brandName}</p>

//     {/* Product Name */}
//     <h2 className='text-sm md:text-base text-gray-700 line-clamp-1 m-0 leading-tight'>{product?.productName}</h2>

//     {/* Color Options */}
//     <div className='flex gap-1 mt-1'>
//         <span className='w-4 h-4 rounded-full bg-red-800'></span>
//         <span className='w-4 h-4 rounded-full bg-pink-300'></span>
//     </div>

//     {/* Pricing Information */}
//     <div className='flex items-center gap-2 mt-1'>
//         <p className='text-lg text-black font-semibold m-0'>{displayINRCurrency(product?.sellingPrice)}</p>
//         <p className='text-sm text-gray-500 line-through m-0'>{displayINRCurrency(product?.price)}</p>
//     </div>

//     {/* Extra Offer Information */}
//     <p className='text-sm text-green-700 m-0 mt-1'>Extra 400rs Off</p>
// </div>


//                         </div>
//                     ))
//                 )}
//             </div>
//         </div>
//     );
// };

// const ImageHoverSlider = ({ images, productName }) => {
//     const [isHovered, setIsHovered] = useState(false);
//     const [currentImageIndex, setCurrentImageIndex] = useState(0);
//     const intervalRef = useRef(null);

//     const startImageRotation = () => {
//         intervalRef.current = setInterval(() => {
//             setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
//         }, 1500); // Change every 1.5 seconds
//     };

//     const stopImageRotation = () => {
//         clearInterval(intervalRef.current);
//         intervalRef.current = null;
//         setCurrentImageIndex(0); // Reset to the first image when not hovered
//     };

//     useEffect(() => {
//         return () => {
//             clearInterval(intervalRef.current); // Clean up on component unmount
//         };
//     }, []);

//     return (
//         <div
//             className='h-68 md:h-89 min-w-[180px] md:min-w-[260px] flex justify-center items-center overflow-hidden'
//             onMouseEnter={startImageRotation}
//             onMouseLeave={stopImageRotation}
//         >
//             <img
//                 src={images[currentImageIndex]}
//                 className='object-cover h-full w-full hover:scale-110 transition-all'
//                 alt={productName}
//             />
//         </div>
//     );
// };

// export default VerticalCardProduct;






// import React, { useContext, useEffect, useRef, useState } from 'react';
// import fetchCategoryWiseProduct from '../helpers/fetchCategoryWiseProduct';
// import displayINRCurrency from '../helpers/displayCurrency';
// import { FaAngleLeft, FaAngleRight, FaHeart, FaShoppingBag, FaRegHeart } from 'react-icons/fa';
// import { Link } from 'react-router-dom';
// import addToWishlist from '../helpers/addToWishlist';
// import { toast } from 'react-toastify';
// import Context from '../context';

// const VerticalCardProduct = ({ category, heading }) => {
//     const [data, setData] = useState([]);
//     const [loading, setLoading] = useState(true);
//     const loadingList = new Array(13).fill(null);
//     const scrollElement = useRef();
//     const { fetchUserAddToCart } = useContext(Context);

//     const handleAddToWishlist = async (e, id) => {
//         e.stopPropagation();
//         const response = await addToWishlist(e, id);
//         if (response.success) {
//             toast.success("Product added to wishlist");
//         } else {
//             toast.error(response.message || "Failed to add to wishlist");
//         }
//     };

//     const fetchData = async () => {
//         setLoading(true);
//         const categoryProduct = await fetchCategoryWiseProduct(category);
//         setLoading(false);
//         setData(categoryProduct?.data);
//     };

//     useEffect(() => {
//         fetchData();
//     }, []);

//     const scrollRight = () => {
//         scrollElement.current.scrollLeft += 300;
//     };

//     const scrollLeft = () => {
//         scrollElement.current.scrollLeft -= 300;
//     };

//     return (
//         <div className='container mx-auto px-4 my-6 relative'>
//             <h2 className='text-xl text-red-500 md:text-2xl font-semibold py-4'>{heading}</h2>

//             <div
//                 className='flex items-center gap-4 md:gap-6 overflow-x-scroll scrollbar-none transition-all'
//                 ref={scrollElement}
//             >
//                 <button className='bg-white shadow-md rounded-full p-1 absolute left-0 text-lg hidden md:block' onClick={scrollLeft}>
//                     <FaAngleLeft />
//                 </button>
//                 <button className='bg-white shadow-md rounded-full p-1 absolute right-0 text-lg hidden md:block' onClick={scrollRight}>
//                     <FaAngleRight />
//                 </button>

//                 {loading ? (
//                     loadingList.map((_, index) => (
//                         <div key={index} className='w-full min-w-[160px] md:min-w-[200px] max-w-[160px] md:max-w-[200px] bg-white rounded-sm shadow'>
//                             <div className='bg-slate-200 h-40 md:h-56 p-4 flex justify-center items-center animate-pulse'></div>
//                             <div className='p-4 grid gap-1'>
//                                 <h2 className='font-medium text-sm md:text-base text-ellipsis line-clamp-1 text-black p-1 py-1 animate-pulse rounded-full bg-slate-200'></h2>
//                                 <p className='capitalize text-slate-500 p-1 animate-pulse rounded-full bg-slate-200 py-1'></p>
//                                 <div className='flex flex-col md:flex-row md:gap-3'>
//                                     <p className='text-red-600 font-medium p-1 animate-pulse rounded-full bg-slate-200 w-full py-1'></p>
//                                     <p className='text-slate-500 line-through p-1 animate-pulse rounded-full bg-slate-200 w-full py-1'></p>

//                                 </div>
//                             </div>
//                         </div>
//                     ))
//                 ) : (
//                     data.map((product, index) => (
//                         <div key={index} className='w-full min-w-[180px] md:min-w-[200px] max-w-[180px] md:max-w-[200px] bg-white rounded-sm shadow relative'>
//                             <Link to={`/product/${product?._id}`} className='block'>
//                                 <ImageHoverSlider images={product.productImage} productName={product?.productName} />
//                             </Link>

//                             <div className='absolute top-4 right-2 flex gap-2'>
//                                 <button onClick={(e) => handleAddToWishlist(e, product._id)} className='bg-white p-1 rounded-full shadow-md'>
//                                     <FaRegHeart />
//                                 </button>
//                             </div>

//                             <div className='p-4 grid gap-1'>
//                                 <div className='flex gap-1 mb-1'>
//                                     <span className='bg-blue-100 text-blue-800 text-xs font-semibold px-2 py-0.5 rounded'>ONLY ON FASHOMART</span>
//                                 </div>
//                                 <p className='text-xs md:text-sm text-black font-medium leading-tight'>{product?.brandName}</p>
//                                 <h2 className='text-xs md:text-base text-gray-700 line-clamp-1 leading-tight'>{product?.productName}</h2>
//                                 <div className='flex gap-1 mt-1'>
//                                     <span className='w-4 h-4 rounded-full bg-red-800'></span>
//                                     <span className='w-4 h-4 rounded-full bg-pink-300'></span>
//                                     <span className='w-4 h-4 rounded-full bg-green-800'></span>
//                                     <span className='w-4 h-4 rounded-full bg-yellow-300'></span>
//                                 </div>
//                                 <div className='flex items-center gap-2 mt-1'>
//                                     <p className='text-lg text-black font-semibold m-0'>{displayINRCurrency(product?.sellingPrice)}</p>
//                                     <p className='text-xs text-gray-500 line-through m-0'>{displayINRCurrency(product?.price)}</p>
//                                 </div>
//                                 <p className='text-xs text-green-700 mt-1'>Extra 400rs Off</p>
//                             </div>
//                         </div>
//                     ))
//                 )}
//             </div>
//         </div>
//     );
// };

// const ImageHoverSlider = ({ images, productName }) => {
//     const [isHovered, setIsHovered] = useState(false);
//     const [currentImageIndex, setCurrentImageIndex] = useState(0);
//     const intervalRef = useRef(null);

//     const startImageRotation = () => {
//         intervalRef.current = setInterval(() => {
//             setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
//         }, 1500);
//     };

//     const stopImageRotation = () => {
//         clearInterval(intervalRef.current);
//         intervalRef.current = null;
//         setCurrentImageIndex(0);
//     };

//     useEffect(() => {
//         return () => {
//             clearInterval(intervalRef.current);
//         };
//     }, []);

//     return (
//         <div
//             className='h-45 md:h-55 w-full flex justify-center items-center overflow-hidden'
//             onMouseEnter={startImageRotation}
//             onMouseLeave={stopImageRotation}
//         >
//             <img
//                 src={images[currentImageIndex]}
//                 className='object-cover h-full w-full hover:scale-110 transition-transform duration-300'
//                 alt={productName}
//             />
//         </div>
//     );
// };

// export default VerticalCardProduct;




// import React, { useContext, useEffect, useRef, useState } from 'react';
// import fetchCategoryWiseProduct from '../helpers/fetchCategoryWiseProduct';
// import displayINRCurrency from '../helpers/displayCurrency';
// import { FaAngleLeft, FaAngleRight, FaHeart, FaShoppingBag, FaRegHeart } from 'react-icons/fa';
// import { Link } from 'react-router-dom';
// import addToWishlist from '../helpers/addToWishlist';
// import { toast } from 'react-toastify';
// import Context from '../context';

// const VerticalCardProduct = ({ category, heading }) => {
//     const [data, setData] = useState([]);
//     const [loading, setLoading] = useState(true);
//     const loadingList = new Array(13).fill(null);
//     const scrollElement = useRef();
//     const { fetchUserAddToCart } = useContext(Context);

//     const handleAddToWishlist = async (e, id) => {
//         e.stopPropagation();
//         const response = await addToWishlist(e, id);
//         if (response.success) {
//             toast.success("Product added to wishlist");
//         } else {
//             toast.error(response.message || "Failed to add to wishlist");
//         }
//     };

//     const fetchData = async () => {
//         setLoading(true);
//         const categoryProduct = await fetchCategoryWiseProduct(category);
//         setLoading(false);
//         setData(categoryProduct?.data);
//     };

//     useEffect(() => {
//         fetchData();
//     }, []);

//     const scrollRight = () => {
//         scrollElement.current.scrollLeft += 300;
//     };

//     const scrollLeft = () => {
//         scrollElement.current.scrollLeft -= 300;
//     };

//     return (
//         <div className='container mx-auto px-4 my-6 relative'>
//             <h2 className='text-xl text-red-600 md:text-2xl font-semibold py-4'>{heading}</h2>

//             <div
//                 className='flex items-center gap-4 md:gap-6 overflow-x-scroll scrollbar-none transition-all'
//                 ref={scrollElement}
//             >
//                 <button className='bg-white shadow-md rounded-full p-1 absolute left-0 text-lg hidden md:block' onClick={scrollLeft}>
//                     <FaAngleLeft />
//                 </button>
//                 <button className='bg-white shadow-md rounded-full p-1 absolute right-0 text-lg hidden md:block' onClick={scrollRight}>
//                     <FaAngleRight />
//                 </button>

//                 {loading ? (
//                     loadingList.map((_, index) => (
//                         <div key={index} className='w-full min-w-[160px] max-w-[230px] bg-white rounded-sm shadow'>
//                             <div className='bg-slate-200 h-40 md:h-56 p-4 flex justify-center items-center animate-pulse'></div>
//                             <div className='p-4 grid gap-1'>
//                                 <h2 className='font-medium text-sm md:text-base text-ellipsis line-clamp-1 text-black p-1 py-1 animate-pulse rounded-full bg-slate-200'></h2>
//                                 <p className='capitalize text-slate-500 p-1 animate-pulse rounded-full bg-slate-200 py-1'></p>
//                                 <div className='flex flex-col md:flex-row md:gap-3'>
//                                     <p className='text-red-600 font-medium p-1 animate-pulse rounded-full bg-slate-200 w-full py-1'></p>
//                                     <p className='text-slate-500 line-through p-1 animate-pulse rounded-full bg-slate-200 w-full py-1'></p>
//                                 </div>
//                             </div>
//                         </div>
//                     ))
//                 ) : (
//                     data.map((product, index) => (
//                         <div key={index} className='w-full min-w-[160px] max-w-[230px] bg-white rounded-sm shadow relative'>
//                             <Link to={`/product/${product?._id}`} className='block'>
//                                 <ImageHoverSlider images={product.productImage} productName={product?.productName} />
//                             </Link>

//                             <div className='absolute top-4 right-2 flex gap-2'>
//                                 <button onClick={(e) => handleAddToWishlist(e, product._id)} className='bg-white p-1 rounded-full shadow-md'>
//                                     <FaRegHeart />
//                                 </button>
//                             </div>

//                             <div className='p-4 grid gap-1'>
//                                 <div className='flex gap-1 mb-1'>
//                                     <span className='bg-blue-100 text-blue-800 text-xs font-semibold px-2 py-0.5 rounded'>ONLY ON FASHOMART</span>
//                                 </div>
//                                 <p className='text-xs md:text-sm text-black font-medium leading-tight'>{product?.brandName}</p>
//                                 <h2 className='text-xs md:text-base text-gray-700 line-clamp-1 leading-tight'>{product?.productName}</h2>
//                                 <div className='flex gap-1 mt-1'>
//                                     <span className='w-4 h-4 rounded-full bg-red-800'></span>
//                                     <span className='w-4 h-4 rounded-full bg-pink-300'></span>
//                                     <span className='w-4 h-4 rounded-full bg-green-800'></span>
//                                     <span className='w-4 h-4 rounded-full bg-yellow-300'></span>
//                                 </div>
//                                 <div className='flex items-center gap-2 mt-1'>
//                                     <p className='text-lg text-black font-semibold m-0'>{displayINRCurrency(product?.sellingPrice)}</p>
//                                     <p className='text-xs text-gray-500 line-through m-0'>{displayINRCurrency(product?.price)}</p>
//                                 </div>
//                                 <p className='text-xs text-green-700 mt-1'>Extra 400rs Off</p>
//                             </div>
//                         </div>
//                     ))
//                 )}
//             </div>
//         </div>
//     );
// };

// const ImageHoverSlider = ({ images, productName }) => {
//     const [isHovered, setIsHovered] = useState(false);
//     const [currentImageIndex, setCurrentImageIndex] = useState(0);
//     const intervalRef = useRef(null);

//     const startImageRotation = () => {
//         intervalRef.current = setInterval(() => {
//             setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
//         }, 1500);
//     };

//     const stopImageRotation = () => {
//         clearInterval(intervalRef.current);
//         intervalRef.current = null;
//         setCurrentImageIndex(0);
//     };

//     useEffect(() => {
//         return () => {
//             clearInterval(intervalRef.current);
//         };
//     }, []);

//     return (
//         <div
//             className='h-45 md:h-55 w-full flex justify-center items-center overflow-hidden'
//             onMouseEnter={startImageRotation}
//             onMouseLeave={stopImageRotation}
//         >
//             <img
//                 src={images[currentImageIndex]}
//                 className='object-cover h-full w-full hover:scale-110 transition-transform duration-300'
//                 alt={productName}
//             />
//         </div>
//     );
// };

// export default VerticalCardProduct;






import React, { useContext, useEffect, useRef, useState } from 'react';
import fetchCategoryWiseProduct from '../helpers/fetchCategoryWiseProduct';
import displayINRCurrency from '../helpers/displayCurrency';
import { FaAngleLeft, FaAngleRight, FaRegHeart } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import addToWishlist from '../helpers/addToWishlist';
import { toast } from 'react-toastify';
import Context from '../context';

const VerticalCardProduct = ({ category, heading }) => {
    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(true);
    const loadingList = new Array(13).fill(null);
    const scrollElement = useRef();
    const { fetchUserAddToCart } = useContext(Context);

    const handleAddToWishlist = async (e, id) => {
        e.stopPropagation();
        const response = await addToWishlist(e, id);
        if (response.success) {
            toast.success("Product added to wishlist");
        } else {
            toast.error(response.message || "Failed to add to wishlist");
        }
    };

    const fetchData = async () => {
        setLoading(true);
        const categoryProduct = await fetchCategoryWiseProduct(category);
        setLoading(false);
        setData(categoryProduct?.data);
    };

    useEffect(() => {
        fetchData();
    }, []);

    const scrollRight = () => {
        scrollElement.current.scrollLeft += 300;
    };

    const scrollLeft = () => {
        scrollElement.current.scrollLeft -= 300;
    };

    return (
        <div className="container mx-auto px-4 my-6 relative">
            <h2 className="text-xl text-red-600 md:text-2xl font-semibold py-4">{heading}</h2>

            <div className="relative">
                <button
                    className="bg-white shadow-md rounded-full p-1 absolute left-2 text-lg hidden md:block z-10"
                    onClick={scrollLeft}
                >
                    <FaAngleLeft />
                </button>
                <div
                    className="flex items-center gap-4 md:gap-6 overflow-x-auto scrollbar-none transition-all relative"
                    ref={scrollElement}
                    style={{ scrollBehavior: 'smooth' }}
                >
                    {loading
                        ? loadingList.map((_, index) => (
                            <div
                                key={index}
                                className="w-[230px] bg-white rounded-sm shadow flex-shrink-0"
                            >
                                {/* Skeleton Loader */}
                                <div className="bg-slate-200 h-40 md:h-56  p-4 animate-pulse"></div>
                                <div className="p-4 animate-pulse">
                                    <div className="bg-slate-300 h-4 rounded mb-2"></div>
                                    <div className="bg-slate-300 h-4 rounded mb-2"></div>
                                </div>
                            </div>
                        ))
                        : data.map((product, index) => (
                            // sm:min-w-[140px] sm:max-w-[180px]
                            <div key={index} className='w-[45vw] sm:w-[100vw] min-w-[130px] max-w-[230px]  bg-white rounded-sm shadow relative flex-shrink-0'>
                            <Link to={`/product/${product?._id}`} className='block'>
                                <ImageHoverSlider images={product.productImage} productName={product?.productName} />
                            </Link>

                            <div className='absolute top-4 right-2 flex gap-2'>
                                <button onClick={(e) => handleAddToWishlist(e, product._id)} className='bg-white p-1 rounded-full shadow-md'>
                                    <FaRegHeart />
                                </button>
                            </div>

                            <div className='p-4 grid gap-1'>
                                <div className='flex gap-1 mb-1'>
                                    <span className='bg-blue-100 text-blue-800 text-xs font-semibold px-2 py-0.5 rounded'>ONLY ON FASHOMART</span>
                                </div>
                                <p className='text-xs md:text-sm text-black font-medium leading-tight'>{product?.brandName}</p>
                                <h2 className='text-xs md:text-base text-gray-700 line-clamp-1 leading-tight'>{product?.productName}</h2>
                                <div className='flex gap-1 mt-1'>
                                    <span className='w-4 h-4 rounded-full bg-red-800'></span>
                                    <span className='w-4 h-4 rounded-full bg-pink-300'></span>
                                    <span className='w-4 h-4 rounded-full bg-green-800'></span>
                                    <span className='w-4 h-4 rounded-full bg-yellow-300'></span>
                                </div>
                                <div className='flex items-center gap-2 mt-1'>
                                    <p className='text-lg text-black font-semibold m-0'>{displayINRCurrency(product?.sellingPrice)}</p>
                                    <p className='text-xs text-gray-500 line-through m-0'>{displayINRCurrency(product?.price)}</p>
                                </div>
                                <p className='text-xs text-green-700 mt-1'>Extra 400rs Off</p>
                            </div>
                        </div>
                            
                        ))}
                </div>
                <button
                    className="bg-white shadow-md rounded-full p-1 absolute right-2 text-lg hidden md:block z-10"
                    onClick={scrollRight}
                >
                    <FaAngleRight />
                </button>
            </div>
        </div>
    );
};

const ImageHoverSlider = ({ images, productName }) => {
    const [isHovered, setIsHovered] = useState(false);
    const [currentImageIndex, setCurrentImageIndex] = useState(0);
    const intervalRef = useRef(null);

    const startImageRotation = () => {
        intervalRef.current = setInterval(() => {
            setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
        }, 1500);
    };

    const stopImageRotation = () => {
        clearInterval(intervalRef.current);
        intervalRef.current = null;
        setCurrentImageIndex(0);
    };

    useEffect(() => {
        return () => {
            clearInterval(intervalRef.current);
        };
    }, []);

    return (
        <div
            className="h-45 md:h-55 w-full flex justify-center items-center overflow-hidden"
            onMouseEnter={startImageRotation}
            onMouseLeave={stopImageRotation}
        >
            <img
                src={images[currentImageIndex]}
                className="object-cover h-full w-full hover:scale-110 transition-transform duration-300"
                alt={productName}
            />
        </div>
    );
};

export default VerticalCardProduct;






