




// import React, { useState } from 'react'
// import { CgClose } from "react-icons/cg";
// import productCategory from '../helpers/productCategory';
// import { FaCloudUploadAlt } from "react-icons/fa";
// import uploadImage from '../helpers/uploadImage';
// import DisplayImage from './DisplayImage';
// import { MdDelete } from "react-icons/md";
// import SummaryApi from '../common';
// import { toast } from 'react-toastify'

// const UploadProduct = ({
//     onClose,
//     fetchData
// }) => {
//   const [data, setData] = useState({
//     productName: "",
//     brandName: "",
//     category: "",
//     productImage: [],
//     description: "",
//     price: "",
//     sellingPrice: "",
//     stock: '',
//     availableSizes: [],
//     colors: '',
      
//   });
//   const [openFullScreenImage, setOpenFullScreenImage] = useState(false);
//   const [fullScreenImage, setFullScreenImage] = useState("");

//   const handleOnChange = (e) => {
//       const { name, value } = e.target;

//       setData((prev) => {
//         return {
//           ...prev,
//           [name]: value
//         };
//       });
//   };

 

//   const handleUploadProduct = async (e) => {
//     const file = e.target.files[0];
//     const uploadImageCloudinary = await uploadImage(file);

//     setData((prev) => {
//       return {
//         ...prev,
//         productImage: [...prev.productImage, uploadImageCloudinary.url]
//       };
//     });
//   };

//   const handleDeleteProductImage = async (index) => {
//     console.log("image index", index);

//     const newProductImage = [...data.productImage];
//     newProductImage.splice(index, 1);

//     setData((prev) => {
//       return {
//         ...prev,
//         productImage: [...newProductImage]
//       };
//     });
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();

//     const response = await fetch(SummaryApi.uploadProduct.url, {
//       method: SummaryApi.uploadProduct.method,
//       credentials: 'include',
//       headers: {
//         "content-type": "application/json"
//       },
//       body: JSON.stringify(data)
//     });

//     const responseData = await response.json();

//     if (responseData.success) {
//       toast.success(responseData?.message);
//       onClose();
//       fetchData();
//     }

//     if (responseData.error) {
//       toast.error(responseData?.message);
//     }
//   };

 

//   // alternat 
//   const handleSizeChange = (e) => {
//     const { value, checked } = e.target;
//     setData((prevData) => {
//       const updatedSizes = checked
//         ? [...prevData.availableSizes, value] // Add size if checked
//         : prevData.availableSizes.filter((size) => size !== value); // Remove size if unchecked
//       return { ...prevData, availableSizes: updatedSizes };
//     });
//   };

//   // const handleSizeChange = (e) => {
//   //   setData({ ...data, [e.target.name]: e.target.value });
//   // };

//   return (
//     <div className='fixed w-full  h-full bg-slate-200 bg-opacity-35 top-0 left-0 right-0 bottom-0 flex justify-center items-center'>
//       <div className='bg-white p-4 rounded w-full max-w-2xl h-full max-h-[80%] overflow-hidden'>

//         <div className='flex justify-between items-center pb-3'>
//           <h2 className='font-bold text-lg'>Upload Product</h2>
//           <div className='w-fit ml-auto text-2xl hover:text-red-600 cursor-pointer' onClick={onClose}>
//             <CgClose />
//           </div>
//         </div>

//         <form className='grid p-4 gap-2 overflow-y-scroll h-full pb-5' onSubmit={handleSubmit}>
//           <label htmlFor='productName'>Product Name :</label>
//           <input
//             type='text'
//             id='productName'
//             placeholder='enter product name'
//             name='productName'
//             value={data.productName}
//             onChange={handleOnChange}
//             className='p-2 bg-slate-100 border rounded'
//             required
//           />

//           <label htmlFor='brandName' className='mt-3'>Brand Name :</label>
//           <input
//             type='text'
//             id='brandName'
//             placeholder='enter brand name'
//             value={data.brandName}
//             name='brandName'
//             onChange={handleOnChange}
//             className='p-2 bg-slate-100 border rounded'
//             required
//           />

//           <label htmlFor='category' className='mt-3'>Category :</label>
//           <select required value={data.category} name='category' onChange={handleOnChange} className='p-2 bg-slate-100 border rounded'>
//             <option value={""}>Select Category</option>
//             {productCategory.map((el, index) => {
//               return (
//                 <option value={el.value} key={el.value + index}>{el.label}</option>
//               )
//             })}
//           </select>


// <div>
//         <label>Sizes:</label>
//         <div className='flex space-x-4 mt-2'>
//           {['S', 'M', 'L', 'XL'].map((size) => (
//             <label key={size} className='flex items-center'>
//               <input
//                 type='checkbox'
//                 value={size}
//                 checked={data.availableSizes.includes(size)}
//                 onChange={handleSizeChange}
//                 className='mr-2'
//               />
//               {size}
//             </label>
//           ))}
//         </div>
//       </div>

//           <label htmlFor='productImage' className='mt-3'>Product Image :</label>
//           <label htmlFor='uploadImageInput'>
//             <div className='p-2 bg-slate-100 border rounded h-32 w-full flex justify-center items-center cursor-pointer'>
//               <div className='text-slate-500 flex justify-center items-center flex-col gap-2'>
//                 <span className='text-4xl'><FaCloudUploadAlt /></span>
//                 <p className='text-sm'>Upload Product Image</p>
//                 <input type='file' id='uploadImageInput' className='hidden' onChange={handleUploadProduct} />
//               </div>
//             </div>
//           </label>
//           <div>
//             {data?.productImage[0] ? (
//               <div className='flex items-center gap-2'>
//                 {data.productImage.map((el, index) => {
//                   return (
//                     <div className='relative group' key={index}>
//                       <img
//                         src={el}
//                         alt={el}
//                         width={80}
//                         height={80}
//                         className='bg-slate-100 border cursor-pointer'
//                         onClick={() => {
//                           setOpenFullScreenImage(true);
//                           setFullScreenImage(el);
//                         }}
//                       />
//                       <div className='absolute bottom-0 right-0 p-1 text-white bg-red-600 rounded-full hidden group-hover:block cursor-pointer' onClick={() => handleDeleteProductImage(index)}>
//                         <MdDelete />
//                       </div>
//                     </div>
//                   )
//                 })}
//               </div>
//             ) : (
//               <p className='text-red-600 text-xs'>*Please upload product image</p>
//             )}
//           </div>

//           <label htmlFor='price' className='mt-3'>Price :</label>
//           <input
//             type='number'
//             id='price'
//             placeholder='enter price'
//             value={data.price}
//             name='price'
//             onChange={handleOnChange}
//             className='p-2 bg-slate-100 border rounded'
//             required
//           />

// <label htmlFor='colors'>Colors :</label>
//           <input
//             type='text'
//             id='colors'
//             name='colors'
//             value={data.colors}
//             placeholder='e.g., Red, Blue, Green'
//             onChange={handleOnChange}
//             className='p-2 bg-slate-100 border rounded'
//           />




//           <label htmlFor='stock'>Stock :</label>
//           <input
//             type='number'
//             id='stock'
//             name='stock'
//             value={data.stock}
//             onChange={handleOnChange}
//             className='p-2 bg-slate-100 border rounded'
//             required
//           />

//           <label htmlFor='sellingPrice' className='mt-3'>Selling Price :</label>
//           <input
//             type='number'
//             id='sellingPrice'
//             placeholder='enter selling price'
//             value={data.sellingPrice}
//             name='sellingPrice'
//             onChange={handleOnChange}
//             className='p-2 bg-slate-100 border rounded'
//             required
//           />

//           <label htmlFor='description' className='mt-3'>Description :</label>
//           <textarea
//             className='h-28 bg-slate-100 border resize-none p-1'
//             placeholder='enter product description'
//             rows={3}
//             onChange={handleOnChange}
//             name='description'
//             value={data.description}
//           >
//           </textarea>

//           <button className='px-3 py-2 bg-red-600 text-white mb-10 hover:bg-red-700'>Upload Product</button>
//         </form>

//         {/***display image full screen */}
//         {openFullScreenImage && (
//           <DisplayImage onClose={() => setOpenFullScreenImage(false)} imgUrl={fullScreenImage} />
//         )}
//       </div>
//     </div>
//   )
// }

// export default UploadProduct;



// this is correct 

import React, { useState } from 'react'
import { CgClose } from "react-icons/cg";
import productCategory from '../helpers/productCategory';
import { FaCloudUploadAlt } from "react-icons/fa";
import uploadImage from '../helpers/uploadImage';
import DisplayImage from './DisplayImage';
import { MdDelete } from "react-icons/md";
import SummaryApi from '../common';
import { toast } from 'react-toastify'

const UploadProduct = ({
    onClose,
    fetchData
}) => {
  const [data, setData] = useState({
    productName: "",
    brandName: "",
    category: "",
    productImage: [],
    description: "",
    price: "",
    sellingPrice: "",
    stock: '',
    availableSizes: [],
    colors: '',
      
  });
  const [openFullScreenImage, setOpenFullScreenImage] = useState(false);
  const [fullScreenImage, setFullScreenImage] = useState("");

  const handleOnChange = (e) => {
      const { name, value } = e.target;

      setData((prev) => {
        return {
          ...prev,
          [name]: value
        };
      });
  };

  //   const handleSizeChange = (e) => {
  //   const { options } = e.target;
  //   const selectedSizes = Array.from(options)
  //     .filter((option) => option.selected)
  //     .map((option) => option.value);
  //   setData((prev) => ({
  //     ...prev,
  //     availableSizes: selectedSizes,
  //   }));
  // };

  const handleUploadProduct = async (e) => {
    const file = e.target.files[0];
    const uploadImageCloudinary = await uploadImage(file);

    setData((prev) => {
      return {
        ...prev,
        productImage: [...prev.productImage, uploadImageCloudinary.url]
      };
    });
  };

  const handleDeleteProductImage = async (index) => {
    console.log("image index", index);

    const newProductImage = [...data.productImage];
    newProductImage.splice(index, 1);

    setData((prev) => {
      return {
        ...prev,
        productImage: [...newProductImage]
      };
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const response = await fetch(SummaryApi.uploadProduct.url, {
      method: SummaryApi.uploadProduct.method,
      credentials: 'include',
      headers: {
        "content-type": "application/json"
      },
      body: JSON.stringify(data)
    });

    const responseData = await response.json();

    if (responseData.success) {
      toast.success(responseData?.message);
      onClose();
      fetchData();
    }

    if (responseData.error) {
      toast.error(responseData?.message);
    }
  };

  // const handleSizeChange = (e) => {
  //   const selectedSizes = Array.from(e.target.selectedOptions, (option) => option.value);
  //   setData({ ...data, availableSizes: selectedSizes });
  // };

  // const handleSizeChange = (e) => {
  //   setData({ ...data, [e.target.name]: e.target.value });
  // };

  // alternat 
  const handleSizeChange = (e) => {
    const { value, checked } = e.target;
    setData((prevData) => {
      const updatedSizes = checked
        ? [...prevData.availableSizes, value] // Add size if checked
        : prevData.availableSizes.filter((size) => size !== value); // Remove size if unchecked
      return { ...prevData, availableSizes: updatedSizes };
    });
  };

  // const handleSizeChange = (e) => {
  //   setData({ ...data, [e.target.name]: e.target.value });
  // };

  return (
    <div className='fixed w-full  h-full bg-slate-200 bg-opacity-35 top-0 left-0 right-0 bottom-0 flex justify-center items-center'>
      <div className='bg-white p-4 rounded w-full max-w-2xl h-full max-h-[80%] overflow-hidden'>

        <div className='flex justify-between items-center pb-3'>
          <h2 className='font-bold text-lg'>Upload Product</h2>
          <div className='w-fit ml-auto text-2xl hover:text-red-600 cursor-pointer' onClick={onClose}>
            <CgClose />
          </div>
        </div>

        <form className='grid p-4 gap-2 overflow-y-scroll h-full pb-5' onSubmit={handleSubmit}>
          <label htmlFor='productName'>Product Name :</label>
          <input
            type='text'
            id='productName'
            placeholder='enter product name'
            name='productName'
            value={data.productName}
            onChange={handleOnChange}
            className='p-2 bg-slate-100 border rounded'
            required
          />

          <label htmlFor='brandName' className='mt-3'>Brand Name :</label>
          <input
            type='text'
            id='brandName'
            placeholder='enter brand name'
            value={data.brandName}
            name='brandName'
            onChange={handleOnChange}
            className='p-2 bg-slate-100 border rounded'
            required
          />

          <label htmlFor='category' className='mt-3'>Category :</label>
          <select required value={data.category} name='category' onChange={handleOnChange} className='p-2 bg-slate-100 border rounded'>
            <option value={""}>Select Category</option>
            {productCategory.map((el, index) => {
              return (
                <option value={el.value} key={el.value + index}>{el.label}</option>
              )
            })}
          </select>

         


{/* <label htmlFor='availableSizes'>Sizes :</label>
           <select
            name='availableSizes'
            multiple
            value={data.availableSizes}
            onChange={handleSizeChange}
            className='p-2 bg-slate-100 border rounded'
          >
            <option value='S'>S</option>
            <option value='M'>M</option>
            <option value='L'>L</option>
            <option value='XL'>XL</option>
          </select> */}


<div>
        <label>Sizes:</label>
        <div className='flex space-x-4 mt-2'>
          {['S', 'M', 'L', 'XL'].map((size) => (
            <label key={size} className='flex items-center'>
              <input
                type='checkbox'
                value={size}
                checked={data.availableSizes.includes(size)}
                onChange={handleSizeChange}
                className='mr-2'
              />
              {size}
            </label>
          ))}
        </div>
      </div>

          <label htmlFor='productImage' className='mt-3'>Product Image :</label>
          <label htmlFor='uploadImageInput'>
            <div className='p-2 bg-slate-100 border rounded h-32 w-full flex justify-center items-center cursor-pointer'>
              <div className='text-slate-500 flex justify-center items-center flex-col gap-2'>
                <span className='text-4xl'><FaCloudUploadAlt /></span>
                <p className='text-sm'>Upload Product Image</p>
                <input type='file' id='uploadImageInput' className='hidden' onChange={handleUploadProduct} />
              </div>
            </div>
          </label>
          <div>
            {data?.productImage[0] ? (
              <div className='flex items-center gap-2'>
                {data.productImage.map((el, index) => {
                  return (
                    <div className='relative group' key={index}>
                      <img
                        src={el}
                        alt={el}
                        width={80}
                        height={80}
                        className='bg-slate-100 border cursor-pointer'
                        onClick={() => {
                          setOpenFullScreenImage(true);
                          setFullScreenImage(el);
                        }}
                      />
                      <div className='absolute bottom-0 right-0 p-1 text-white bg-red-600 rounded-full hidden group-hover:block cursor-pointer' onClick={() => handleDeleteProductImage(index)}>
                        <MdDelete />
                      </div>
                    </div>
                  )
                })}
              </div>
            ) : (
              <p className='text-red-600 text-xs'>*Please upload product image</p>
            )}
          </div>

          <label htmlFor='price' className='mt-3'>Price :</label>
          <input
            type='number'
            id='price'
            placeholder='enter price'
            value={data.price}
            name='price'
            onChange={handleOnChange}
            className='p-2 bg-slate-100 border rounded'
            required
          />

<label htmlFor='colors'>Colors :</label>
          <input
            type='text'
            id='colors'
            name='colors'
            value={data.colors}
            placeholder='e.g., Red, Blue, Green'
            onChange={handleOnChange}
            className='p-2 bg-slate-100 border rounded'
          />




          <label htmlFor='stock'>Stock :</label>
          <input
            type='number'
            id='stock'
            name='stock'
            value={data.stock}
            onChange={handleOnChange}
            className='p-2 bg-slate-100 border rounded'
            required
          />

          <label htmlFor='sellingPrice' className='mt-3'>Selling Price :</label>
          <input
            type='number'
            id='sellingPrice'
            placeholder='enter selling price'
            value={data.sellingPrice}
            name='sellingPrice'
            onChange={handleOnChange}
            className='p-2 bg-slate-100 border rounded'
            required
          />

          <label htmlFor='description' className='mt-3'>Description :</label>
          <textarea
            className='h-28 bg-slate-100 border resize-none p-1'
            placeholder='enter product description'
            rows={3}
            onChange={handleOnChange}
            name='description'
            value={data.description}
          >
          </textarea>

          <button className='px-3 py-2 bg-red-600 text-white mb-10 hover:bg-red-700'>Upload Product</button>
        </form>

        {/***display image full screen */}
        {openFullScreenImage && (
          <DisplayImage onClose={() => setOpenFullScreenImage(false)} imgUrl={fullScreenImage} />
        )}
      </div>
    </div>
  )
}

export default UploadProduct;











// cateroy add feature 
// import React, { useState } from 'react';
// import { CgClose } from 'react-icons/cg';
// import productCategory from '../helpers/productCategory';
// import { FaCloudUploadAlt } from 'react-icons/fa';
// import uploadImage from '../helpers/uploadImage';
// import DisplayImage from './DisplayImage';
// import { MdDelete } from 'react-icons/md';
// import SummaryApi from '../common';
// import { toast } from 'react-toastify';

// const UploadProduct = ({ onClose, fetchData }) => {
//   const [data, setData] = useState({
//     productName: '',
//     brandName: '',
//     category: '',
//     productImage: [],
//     description: '',
//     price: '',
//     sellingPrice: '',
//     stock: '',
//     availableSizes: [],
//     colors: '',
//   });

//   const [categories, setCategories] = useState(productCategory);
//   const [newCategory, setNewCategory] = useState('');
//     const [openFullScreenImage, setOpenFullScreenImage] = useState(false);
//   const [fullScreenImage, setFullScreenImage] = useState("");

//   const handleOnChange = (e) => {
//     const { name, value } = e.target;

//     setData((prev) => ({
//       ...prev,
//       [name]: value,
//     }));
//   };

//   // const handleAddCategory = () => {
//   //   if (newCategory.trim()) {
//   //     const categoryExists = categories.some(
//   //       (cat) => cat.value.toLowerCase() === newCategory.toLowerCase()
//   //     );

//   //     if (categoryExists) {
//   //       toast.error('Category already exists');
//   //       return;
//   //     }

//   //     const newCategoryObj = {
//   //       value: newCategory,
//   //       label: newCategory,
//   //     };

//   //     setCategories([...categories, newCategoryObj]);
//   //     setNewCategory('');
//   //     toast.success('Category added successfully');
//   //   } else {
//   //     toast.error('Please enter a valid category name');
//   //   }
//   // };

//   const handleAddCategory = () => {
//     if (newCategory.trim()) {
//       const categoryExists = categories.some(
//         (cat) => cat.value.toLowerCase() === newCategory.toLowerCase()
//       );
  
//       if (categoryExists) {
//         toast.error('Category already exists');
//         return;
//       }
  
//       // Create a new category object
//       const newCategoryObj = {
//         value: newCategory,
//         label: newCategory,
//       };
  
//       // Add to the categories list
//       setCategories([...categories, newCategoryObj]);
  
//       // Optionally, auto-select the newly added category
//       setData((prev) => ({
//         ...prev,
//         category: newCategory,
//       }));
  
//       setNewCategory('');
//       toast.success('Category added successfully');
//     } else {
//       toast.error('Please enter a valid category name');
//     }
//   };
  

  // const handleUploadProduct = async (e) => {
  //   const file = e.target.files[0];
  //   const uploadImageCloudinary = await uploadImage(file);

  //   setData((prev) => ({
  //     ...prev,
  //     productImage: [...prev.productImage, uploadImageCloudinary.url],
  //   }));
  // };

  // const handleDeleteProductImage = async (index) => {
  //   const newProductImage = [...data.productImage];
  //   newProductImage.splice(index, 1);

  //   setData((prev) => ({
  //     ...prev,
  //     productImage: [...newProductImage],
  //   }));
  // };

//   const handleSubmit = async (e) => {
//     e.preventDefault();

//     const response = await fetch(SummaryApi.uploadProduct.url, {
//       method: SummaryApi.uploadProduct.method,
//       credentials: 'include',
//       headers: {
//         'content-type': 'application/json',
//       },
//       body: JSON.stringify(data),
//     });

//     const responseData = await response.json();

//     if (responseData.success) {
//       toast.success(responseData?.message);
//       onClose();
//       fetchData();
//     } else {
//       toast.error(responseData?.message);
//     }
//   };

  // const handleSizeChange = (e) => {
  //   const { value, checked } = e.target;
  //   setData((prevData) => {
  //     const updatedSizes = checked
  //       ? [...prevData.availableSizes, value]
  //       : prevData.availableSizes.filter((size) => size !== value);
  //     return { ...prevData, availableSizes: updatedSizes };
  //   });
  // };

//   return (
//     <div className='fixed w-full h-full bg-slate-200 bg-opacity-35 top-0 left-0 right-0 bottom-0 flex justify-center items-center'>
//       <div className='bg-white p-4 rounded w-full max-w-2xl h-full max-h-[80%] overflow-hidden'>
//         <div className='flex justify-between items-center pb-3'>
//           <h2 className='font-bold text-lg'>Upload Product</h2>
//           <div
//             className='w-fit ml-auto text-2xl hover:text-red-600 cursor-pointer'
//             onClick={onClose}
//           >
//             <CgClose />
//           </div>
//         </div>

//         <form
//           className='grid p-4 gap-2 overflow-y-scroll h-full pb-5'
//           onSubmit={handleSubmit}
//         >
//           <label htmlFor='productName'>Product Name :</label>
//           <input
//             type='text'
//             id='productName'
//             placeholder='enter product name'
//             name='productName'
//             value={data.productName}
//             onChange={handleOnChange}
//             className='p-2 bg-slate-100 border rounded'
//             required
//           />

//           <label htmlFor='brandName' className='mt-3'>
//             Brand Name :
//           </label>
//           <input
//             type='text'
//             id='brandName'
//             placeholder='enter brand name'
//             value={data.brandName}
//             name='brandName'
//             onChange={handleOnChange}
//             className='p-2 bg-slate-100 border rounded'
//             required
//           />

//           <label htmlFor='category' className='mt-3'>
//             Category :
//           </label>
//           <div className='flex items-center gap-2'>
//             <select
//               required
//               value={data.category}
//               name='category'
//               onChange={handleOnChange}
//               className='p-2 bg-slate-100 border rounded flex-1'
//             >
//               <option value=''>Select Category</option>
//               {categories.map((el, index) => (
//                 <option value={el.value} key={el.value + index}>
//                   {el.label}
//                 </option>
//               ))}
//             </select>
//             <input
//               type='text'
//               placeholder='Add new category'
//               value={newCategory}
//               onChange={(e) => setNewCategory(e.target.value)}
//               className='p-2 bg-slate-100 border rounded flex-1'
//             />
//             <button
//               type='button'
//               onClick={handleAddCategory}
//               className='px-3 py-2 bg-green-600 text-white hover:bg-green-700 rounded'
//             >
//               Add
//             </button>
//           </div>

//           {/* Sizes */}
//           <div>
//             <label>Sizes:</label>
//             <div className='flex space-x-4 mt-2'>
//               {['S', 'M', 'L', 'XL'].map((size) => (
//                 <label key={size} className='flex items-center'>
//                   <input
//                     type='checkbox'
//                     value={size}
//                     checked={data.availableSizes.includes(size)}
//                     onChange={handleSizeChange}
//                     className='mr-2'
//                   />
//                   {size}
//                 </label>
//               ))}
//             </div>
//           </div>

//           {/* Rest of the form */}
//           {/* Product Image Upload */}
//           {/* Description */}
//           {/* Price, Colors, etc. */}

//           <label htmlFor='productImage' className='mt-3'>Product Image :</label>
//           <label htmlFor='uploadImageInput'>
//             <div className='p-2 bg-slate-100 border rounded h-32 w-full flex justify-center items-center cursor-pointer'>
//               <div className='text-slate-500 flex justify-center items-center flex-col gap-2'>
//                 <span className='text-4xl'><FaCloudUploadAlt /></span>
//                 <p className='text-sm'>Upload Product Image</p>
//                 <input type='file' id='uploadImageInput' className='hidden' onChange={handleUploadProduct} />
//               </div>
//             </div>
//           </label>
//           <div>
//             {data?.productImage[0] ? (
//               <div className='flex items-center gap-2'>
//                 {data.productImage.map((el, index) => {
//                   return (
//                     <div className='relative group' key={index}>
//                       <img
//                         src={el}
//                         alt={el}
//                         width={80}
//                         height={80}
//                         className='bg-slate-100 border cursor-pointer'
//                         onClick={() => {
//                           setOpenFullScreenImage(true);
//                           setFullScreenImage(el);
//                         }}
//                       />
//                       <div className='absolute bottom-0 right-0 p-1 text-white bg-red-600 rounded-full hidden group-hover:block cursor-pointer' onClick={() => handleDeleteProductImage(index)}>
//                         <MdDelete />
//                       </div>
//                     </div>
//                   )
//                 })}
//               </div>
//             ) : (
//               <p className='text-red-600 text-xs'>*Please upload product image</p>
//             )}
//           </div>

//           <label htmlFor='price' className='mt-3'>Price :</label>
//           <input
//             type='number'
//             id='price'
//             placeholder='enter price'
//             value={data.price}
//             name='price'
//             onChange={handleOnChange}
//             className='p-2 bg-slate-100 border rounded'
//             required
//           />

// <label htmlFor='colors'>Colors :</label>
//           <input
//             type='text'
//             id='colors'
//             name='colors'
//             value={data.colors}
//             placeholder='e.g., Red, Blue, Green'
//             onChange={handleOnChange}
//             className='p-2 bg-slate-100 border rounded'
//           />




//           <label htmlFor='stock'>Stock :</label>
//           <input
//             type='number'
//             id='stock'
//             name='stock'
//             value={data.stock}
//             onChange={handleOnChange}
//             className='p-2 bg-slate-100 border rounded'
//             required
//           />

//           <label htmlFor='sellingPrice' className='mt-3'>Selling Price :</label>
//           <input
//             type='number'
//             id='sellingPrice'
//             placeholder='enter selling price'
//             value={data.sellingPrice}
//             name='sellingPrice'
//             onChange={handleOnChange}
//             className='p-2 bg-slate-100 border rounded'
//             required
//           />

//           <label htmlFor='description' className='mt-3'>Description :</label>
//           <textarea
//             className='h-28 bg-slate-100 border resize-none p-1'
//             placeholder='enter product description'
//             rows={3}
//             onChange={handleOnChange}
//             name='description'
//             value={data.description}
//           >
//           </textarea>

//           {/* dfgg */}

//           <button className='px-3 py-2 bg-red-600 text-white mb-10 hover:bg-red-700'>
//             Upload Product
//           </button>

//           {openFullScreenImage && (
//           <DisplayImage onClose={() => setOpenFullScreenImage(false)} imgUrl={fullScreenImage} />
//         )}
//         </form>
//       </div>
//     </div>
//   );
// };

// export default UploadProduct;




// improvemet version new category 

// import React, { useState } from 'react';
// import { CgClose } from 'react-icons/cg';
// import { FaCloudUploadAlt } from 'react-icons/fa';
// import uploadImage from '../helpers/uploadImage';
// import DisplayImage from './DisplayImage';
// import { MdDelete } from 'react-icons/md';
// import SummaryApi from '../common';
// import { toast } from 'react-toastify';

// const UploadProduct = ({ onClose, fetchData }) => {
//   const [data, setData] = useState({
//     productName: '',
//     brandName: '',
//     category: '',
//     productImage: [],
//     description: '',
//     price: '',
//     sellingPrice: '',
//     stock: '',
//     availableSizes: [],
//     colors: '',
//   });

//   // Manage product categories dynamically
//   const [categories, setCategories] = useState([
//     { id: 1, label: 'Footwear', value: 'footwear' },
//     { id: 2, label: 'Camera', value: 'camera' },
//     { id: 3, label: 'Earphones', value: 'earphones' },
//     { id: 4, label: 'WesternWear', value: 'westernwear' },
//     { id: 5, label: 'Sportswear', value: 'sportswear' },
//   ]);

//   const [newCategory, setNewCategory] = useState('');
//   const [openFullScreenImage, setOpenFullScreenImage] = useState(false);
//   const [fullScreenImage, setFullScreenImage] = useState('');

//   const handleOnChange = (e) => {
//     const { name, value } = e.target;

//     setData((prev) => ({
//       ...prev,
//       [name]: value,
//     }));
//   };

//   const handleUploadProduct = async (e) => {
//     const file = e.target.files[0];
//     const uploadImageCloudinary = await uploadImage(file);

//     setData((prev) => ({
//       ...prev,
//       productImage: [...prev.productImage, uploadImageCloudinary.url],
//     }));
//   };

//   const handleAddCategory = () => {
//     if (newCategory.trim()) {
//       const categoryExists = categories.some(
//         (cat) => cat.value.toLowerCase() === newCategory.toLowerCase()
//       );

//       if (categoryExists) {
//         toast.error('Category already exists');
//         return;
//       }

//       const newCategoryObj = {
//         id: categories.length + 1, // Generate a new ID
//         value: newCategory.toLowerCase(),
//         label: newCategory,
//       };

//       setCategories((prevCategories) => [...prevCategories, newCategoryObj]);
//       setNewCategory('');
//       toast.success('Category added successfully');
//     } else {
//       toast.error('Please enter a valid category name');
//     }
//   };
//   const handleDeleteProductImage = async (index) => {
//     const newProductImage = [...data.productImage];
//     newProductImage.splice(index, 1);

//     setData((prev) => ({
//       ...prev,
//       productImage: [...newProductImage],
//     }));
//   };

//   const handleSizeChange = (e) => {
//     const { value, checked } = e.target;
//     setData((prevData) => {
//       const updatedSizes = checked
//         ? [...prevData.availableSizes, value]
//         : prevData.availableSizes.filter((size) => size !== value);
//       return { ...prevData, availableSizes: updatedSizes };
//     });
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();

//     const response = await fetch(SummaryApi.uploadProduct.url, {
//       method: SummaryApi.uploadProduct.method,
//       credentials: 'include',
//       headers: {
//         'content-type': 'application/json',
//       },
//       body: JSON.stringify(data),
//     });

//     const responseData = await response.json();

//     if (responseData.success) {
//       toast.success(responseData?.message);
//       onClose();
//       fetchData();
//     } else {
//       toast.error(responseData?.message);
//     }
//   };

//   return (
//     <div className='fixed w-full h-full bg-slate-200 bg-opacity-35 top-0 left-0 right-0 bottom-0 flex justify-center items-center'>
//       <div className='bg-white p-4 rounded w-full max-w-2xl h-full max-h-[80%] overflow-hidden'>
//         <div className='flex justify-between items-center pb-3'>
//           <h2 className='font-bold text-lg'>Upload Product</h2>
//           <div
//             className='w-fit ml-auto text-2xl hover:text-red-600 cursor-pointer'
//             onClick={onClose}
//           >
//             <CgClose />
//           </div>
//         </div>

//         <form className='grid p-4 gap-2 overflow-y-scroll h-full pb-5' onSubmit={handleSubmit}>
//           <label htmlFor='category' className='mt-3'>
//             Category :
//           </label>
//           <div className='flex items-center gap-2'>
//             <select
//               required
//               value={data.category}
//               name='category'
//               onChange={handleOnChange}
//               className='p-2 bg-slate-100 border rounded flex-1'
//             >
//               <option value=''>Select Category</option>
//               {categories.map((el) => (
//                 <option value={el.value} key={el.id}>
//                   {el.label}
//                 </option>
//               ))}
//             </select>
//             <input
//               type='text'
//               placeholder='Add new category'
//               value={newCategory}
//               onChange={(e) => setNewCategory(e.target.value)}
//               className='p-2 bg-slate-100 border rounded flex-1'
//             />
//             <button
//               type='button'
//               onClick={handleAddCategory}
//               className='px-3 py-2 bg-green-600 text-white hover:bg-green-700 rounded'
//             >
//               Add
//             </button>
//           </div>

//           {/* Other form fields */}

//           <div>
//             <label>Sizes:</label>
//             <div className='flex space-x-4 mt-2'>
//               {['S', 'M', 'L', 'XL'].map((size) => (
//                 <label key={size} className='flex items-center'>
//                   <input
//                     type='checkbox'
//                     value={size}
//                     checked={data.availableSizes.includes(size)}
//                     onChange={handleSizeChange}
//                     className='mr-2'
//                   />
//                   {size}
//                 </label>
//               ))}
//             </div>
//           </div>

//           {/* Rest of the form */}
//           {/* Product Image Upload */}
//           {/* Description */}
//           {/* Price, Colors, etc. */}

//           <label htmlFor='productImage' className='mt-3'>Product Image :</label>
//           <label htmlFor='uploadImageInput'>
//             <div className='p-2 bg-slate-100 border rounded h-32 w-full flex justify-center items-center cursor-pointer'>
//               <div className='text-slate-500 flex justify-center items-center flex-col gap-2'>
//                 <span className='text-4xl'><FaCloudUploadAlt /></span>
//                 <p className='text-sm'>Upload Product Image</p>
//                 <input type='file' id='uploadImageInput' className='hidden' onChange={handleUploadProduct} />
//               </div>
//             </div>
//           </label>
//           <div>
//             {data?.productImage[0] ? (
//               <div className='flex items-center gap-2'>
//                 {data.productImage.map((el, index) => {
//                   return (
//                     <div className='relative group' key={index}>
//                       <img
//                         src={el}
//                         alt={el}
//                         width={80}
//                         height={80}
//                         className='bg-slate-100 border cursor-pointer'
//                         onClick={() => {
//                           setOpenFullScreenImage(true);
//                           setFullScreenImage(el);
//                         }}
//                       />
//                       <div className='absolute bottom-0 right-0 p-1 text-white bg-red-600 rounded-full hidden group-hover:block cursor-pointer' onClick={() => handleDeleteProductImage(index)}>
//                         <MdDelete />
//                       </div>
//                     </div>
//                   )
//                 })}
//               </div>
//             ) : (
//               <p className='text-red-600 text-xs'>*Please upload product image</p>
//             )}
//           </div>

//           <label htmlFor='price' className='mt-3'>Price :</label>
//           <input
//             type='number'
//             id='price'
//             placeholder='enter price'
//             value={data.price}
//             name='price'
//             onChange={handleOnChange}
//             className='p-2 bg-slate-100 border rounded'
//             required
//           />

// <label htmlFor='colors'>Colors :</label>
//           <input
//             type='text'
//             id='colors'
//             name='colors'
//             value={data.colors}
//             placeholder='e.g., Red, Blue, Green'
//             onChange={handleOnChange}
//             className='p-2 bg-slate-100 border rounded'
//           />




//           <label htmlFor='stock'>Stock :</label>
//           <input
//             type='number'
//             id='stock'
//             name='stock'
//             value={data.stock}
//             onChange={handleOnChange}
//             className='p-2 bg-slate-100 border rounded'
//             required
//           />

//           <label htmlFor='sellingPrice' className='mt-3'>Selling Price :</label>
//           <input
//             type='number'
//             id='sellingPrice'
//             placeholder='enter selling price'
//             value={data.sellingPrice}
//             name='sellingPrice'
//             onChange={handleOnChange}
//             className='p-2 bg-slate-100 border rounded'
//             required
//           />

//           <label htmlFor='description' className='mt-3'>Description :</label>
//           <textarea
//             className='h-28 bg-slate-100 border resize-none p-1'
//             placeholder='enter product description'
//             rows={3}
//             onChange={handleOnChange}
//             name='description'
//             value={data.description}
//           >
//           </textarea>

//           {/* dfgg */}

//           <button className='px-3 py-2 bg-red-600 text-white mb-10 hover:bg-red-700'>
//             Upload Product
//           </button>

//           {openFullScreenImage && (
//           <DisplayImage onClose={() => setOpenFullScreenImage(false)} imgUrl={fullScreenImage} />
//         )}
//         </form>
//       </div>
//     </div>
//   );
// };

// export default UploadProduct;







