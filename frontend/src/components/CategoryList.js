

// import React, { useEffect, useState } from 'react';
// import SummaryApi from '../common';
// import { Link, useNavigate } from 'react-router-dom';

// const CategoryList = () => {
//   const [categoryProduct, setCategoryProduct] = useState([]);
//   const [loading, setLoading] = useState(false);
//   const navigate = useNavigate();

//   const categoryLoading = new Array(16).fill(null);

//   const fetchCategoryProduct = async () => {
//     setLoading(true);
//     try {
//       const response = await fetch(SummaryApi.categoryProduct.url);
//       const dataResponse = await response.json();
//       setCategoryProduct(dataResponse.data);
//     } catch (error) {
//       console.error('Error fetching category products:', error);
//     } finally {
//       setLoading(false);
//     }
//   };

//   useEffect(() => {
//     fetchCategoryProduct();
//   }, []);

//   const handleCategoryClick = (category) => {
//     navigate(`/product-category?category=${encodeURIComponent(category)}`);
//   };

//   return (
//     <div className='container mx-auto p-4'>
//       <div className='flex items-center gap-4 justify-between overflow-scroll scrollbar-none'>
//         {loading ? (
//           categoryLoading.map((_, index) => (
//             <div
//               className='h-16 w-16 md:w-20 md:h-20 rounded-full overflow-hidden bg-slate-200 animate-pulse'
//               key={`categoryLoading-${index}`}
//             />
//           ))
//         ) : (
//           categoryProduct.map((product) => (
//             <div
//               key={product?.category}
//               className='cursor-pointer'
//               onClick={() => handleCategoryClick(product?.category)}
//             >
//               <div className='w-20 h-20 md:w-28 md:h-28 rounded-full overflow-hidden p-4 bg-orange-300 flex items-center justify-center'>
//                 <img
//                   src={product?.productImage[0]}
//                   alt={product?.category}
//                   className='h-full object-scale-down mix-blend-multiply hover:scale-125 transition-all'
//                 />
//               </div>
//               <p className='text-center text-sm md:text-base capitalize'>{product?.category}</p>
//             </div>
//           ))
//         )}
//       </div>
//     </div>
//   );
// };

// export default CategoryList;



// import React, { useEffect, useState } from 'react';
// import SummaryApi from '../common';
// import { Link, useNavigate } from 'react-router-dom';

// const CategoryList = () => {
//   const [categoryProduct, setCategoryProduct] = useState([]);
//   const [loading, setLoading] = useState(false);
//   const navigate = useNavigate();

//   const categoryLoading = new Array(16).fill(null);

//   const fetchCategoryProduct = async () => {
//     setLoading(true);
//     try {
//       const response = await fetch(SummaryApi.categoryProduct.url);
//       const dataResponse = await response.json();
//       setCategoryProduct(dataResponse.data);
//     } catch (error) {
//       console.error('Error fetching category products:', error);
//     } finally {
//       setLoading(false);
//     }
//   };

//   useEffect(() => {
//     fetchCategoryProduct();
//   }, []);

//   const handleCategoryClick = (category) => {
//     navigate(`/product-category?category=${encodeURIComponent(category)}`);
//   };

//   return (
//     <div className='container mx-auto p-4'>
//       <div className='flex items-center gap-6 justify-between overflow-scroll scrollbar-none'>
//         {loading ? (
//           categoryLoading.map((_, index) => (
//             <div
//               className='h-20 w-20 md:w-28 md:h-28 rounded-full overflow-hidden bg-slate-200 animate-pulse'
//               key={`categoryLoading-${index}`}
//             />
//           ))
//         ) : (
//           categoryProduct.map((product) => (
//             <div
//               key={product?.category}
//               className='cursor-pointer'
//               onClick={() => handleCategoryClick(product?.category)}
//             >
//               <div className='w-24 h-24 md:w-32 md:h-32 rounded-full overflow-hidden bg-orange-100 flex items-center justify-center shadow-md'>
//                 <img
//                   src={product?.productImage[0]}
//                   alt={product?.category}
//                   className='h-full object-scale-down mix-blend-multiply hover:scale-110 transition-transform duration-200'
//                 />
//               </div>
//               <p className='text-center text-base md:text-lg capitalize'>{product?.category}</p>
//             </div>
//           ))
//         )}
//       </div>
//     </div>
//   );
// };

// export default CategoryList;



// import React, { useEffect, useState } from 'react';
// import SummaryApi from '../common';
// import { useNavigate } from 'react-router-dom';

// const CategoryList = () => {
//   const [categoryProduct, setCategoryProduct] = useState([]);
//   const [loading, setLoading] = useState(false);
//   const navigate = useNavigate();

//   const categoryLoading = new Array(16).fill(null);

//   const fetchCategoryProduct = async () => {
//     setLoading(true);
//     try {
//       const response = await fetch(SummaryApi.categoryProduct.url);
//       const dataResponse = await response.json();
//       setCategoryProduct(dataResponse.data);
//     } catch (error) {
//       console.error('Error fetching category products:', error);
//     } finally {
//       setLoading(false);
//     }
//   };

//   useEffect(() => {
//     fetchCategoryProduct();
//   }, []);

//   const handleCategoryClick = (category) => {
//     navigate(`/product-category?category=${encodeURIComponent(category)}`);
//   };

//   return (
//     <div className='container mx-auto p-4 mt-[2vw]'>
//       <div className='flex items-center gap-6 overflow-x-auto scrollbar-none'>
//         {loading ? (
//           categoryLoading.map((_, index) => (
//             <div
//               className='h-22 w-22 rounded-full overflow-hidden bg-slate-200 animate-pulse'
//               key={`categoryLoading-${index}`}
//             />
//           ))
//         ) : (
//           categoryProduct.map((product) => (
//             <div
//               key={product?.category}
//               className='flex flex-col items-center cursor-pointer'
//               onClick={() => handleCategoryClick(product?.category)}
//             >
//               <div className='w-28 h-28 rounded-full bg-orange-200 flex items-center justify-center shadow-md'>
//                 <img
//                   src={product?.productImage[0]}
//                   alt={product?.category}
//                   className='h-20 object-contain transition-transform duration-200 hover:scale-110'
//                 />
//               </div>
//               <p className='text-center text-sm md:text-base font-semibold mt-2 capitalize text-gray-800'>
//                 {product?.category}
//               </p>
//             </div>
//           ))
//         )}
//       </div>
//     </div>
//   );
// };

// export default CategoryList;



import React, { useEffect, useState } from 'react';
import SummaryApi from '../common';
import { useNavigate } from 'react-router-dom';

const CategoryList = () => {
  const [categoryProduct, setCategoryProduct] = useState([]);
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const categoryLoading = new Array(16).fill(null);

  const fetchCategoryProduct = async () => {
    setLoading(true);
    try {
      const response = await fetch(SummaryApi.categoryProduct.url);
      const dataResponse = await response.json();
      setCategoryProduct(dataResponse.data);
    } catch (error) {
      console.error('Error fetching category products:', error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchCategoryProduct();
  }, []);

  const handleCategoryClick = (category) => {
    navigate(`/product-category?category=${encodeURIComponent(category)}`);
  };

  return (
    <div className='container mx-auto px-4 py-6 mt-2'>
      <div className='flex items-center gap-5 md:gap-6 overflow-x-auto scrollbar-none'>
        {loading ? (
          categoryLoading.map((_, index) => (
            <div
              className='h-20 w-20 md:w-26 md:h-26 lg:w-28 lg:h-28 rounded-full overflow-hidden bg-slate-200 animate-pulse'
              key={`categoryLoading-${index}`}
            />
          ))
        ) : (
          categoryProduct.map((product) => (
            <div
              key={product?.category}
              className='flex flex-col items-center cursor-pointer'
              onClick={() => handleCategoryClick(product?.category)}
            >
              <div className='w-20 h-20 md:w-26 md:h-26 lg:w-28 lg:h-28 rounded-full bg-orange-200 flex items-center justify-center shadow-md'>
                <img
                  src={product?.productImage[0]}
                  alt={product?.category}
                  className='h-16 md:h-20 lg:h-24 object-contain transition-transform duration-200 hover:scale-110'
                />
              </div>
              <p className='text-center text-xs md:text-sm lg:text-base font-semibold mt-2 capitalize text-gray-800'>
                {product?.category}
              </p>
            </div>
          ))
        )}
      </div>
    </div>
  );
};

export default CategoryList;
