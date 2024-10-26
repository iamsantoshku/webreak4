


import React, { useContext } from 'react';
import scrollTop from '../helpers/scrollTop';
import displayINRCurrency from '../helpers/displayCurrency';
import Context from '../context';
import addToWishlist from '../helpers/addToWishlist';
import { Link } from 'react-router-dom';
import { toast } from 'react-toastify';
import { FaHeart } from 'react-icons/fa';

const VerticalCard = ({ loading, data = [] }) => {
    const loadingList = new Array(13).fill(null);
    const { fetchUserAddToWishlist } = useContext(Context);

    const handleAddToWishlist = async (e, id) => {
        e.stopPropagation();
        const response = await addToWishlist(e, id);
        if (response.success) {
            toast.success("Product added to wishlist");
        } else {
            toast.error(response.message || "Failed to add to wishlist");
        }
    };

    return (
        <div className='grid grid-cols-2 md:grid-cols-5 gap-4 justify-center'>
            {loading ? (
                loadingList.map((_, index) => (
                    <div
                        key={index}
                        className='w-full min-w-[150px] md:min-w-[180px] bg-white rounded-sm shadow'
                    >
                        <div className='bg-slate-200 h-64 md:h-80 flex justify-center items-center animate-pulse'></div>
                        <div className='p-4 grid gap-2'>
                            <h2 className='font-medium text-base md:text-lg bg-slate-200 animate-pulse rounded-full h-6'></h2>
                            <p className='capitalize bg-slate-200 animate-pulse rounded-full h-4'></p>
                            <div className='flex gap-3'>
                                <p className='text-red-600 font-medium bg-slate-200 animate-pulse rounded-full h-5 w-full'></p>
                                <p className='text-slate-500 line-through bg-slate-200 animate-pulse rounded-full h-5 w-full'></p>
                            </div>
                        </div>
                    </div>
                ))
            ) : (
                data.map((product, index) => (
                    <Link
                        key={index}
                        to={"/product/" + product?._id}
                        className='relative w-full min-w-[150px] md:min-w-[180px] bg-white rounded-sm shadow'
                        onClick={scrollTop}
                    >
                        {/* Wishlist Button Icon on the top-right corner */}
                        <button
                            className='absolute top-3 right-3 bg-white p-1 rounded-full shadow-md z-10'
                            onClick={(e) => handleAddToWishlist(e, product?._id)}
                        >
                            <FaHeart className='text-red-500 text-lg' />
                        </button>
                        <div className='h-64 md:h-80 p-2 flex justify-center items-center'>
                            <img
                                src={product?.productImage[0]}
                                className='object-cover h-full w-full rounded-sm transition-all transform hover:scale-105'
                                alt={product?.productName}
                            />
                        </div>
                        <div className='p-4 grid gap-2'>
                            <h2 className='font-medium text-base md:text-lg text-ellipsis line-clamp-1 text-black'>
                                {product?.productName}
                            </h2>
                            <p className='capitalize text-slate-500'>
                                {product?.category}
                            </p>
                            <div className='flex gap-3'>
                                <p className='text-red-600 font-medium'>
                                    {displayINRCurrency(product?.sellingPrice)}
                                </p>
                                <p className='text-slate-500 line-through'>
                                    {displayINRCurrency(product?.price)}
                                </p>
                            </div>
                        </div>
                    </Link>
                ))
            )}
        </div>
    );
};

export default VerticalCard;
