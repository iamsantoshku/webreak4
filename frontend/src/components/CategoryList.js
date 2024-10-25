

import React, { useEffect, useState } from 'react';
import SummaryApi from '../common';
import { Link, useNavigate } from 'react-router-dom';

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
    <div className='container mx-auto p-4'>
      <div className='flex items-center gap-4 justify-between overflow-scroll scrollbar-none'>
        {loading ? (
          categoryLoading.map((_, index) => (
            <div
              className='h-16 w-16 md:w-20 md:h-20 rounded-full overflow-hidden bg-slate-200 animate-pulse'
              key={`categoryLoading-${index}`}
            />
          ))
        ) : (
          categoryProduct.map((product) => (
            <div
              key={product?.category}
              className='cursor-pointer'
              onClick={() => handleCategoryClick(product?.category)}
            >
              <div className='w-16 h-16 md:w-20 md:h-20 rounded-full overflow-hidden p-4 bg-slate-200 flex items-center justify-center'>
                <img
                  src={product?.productImage[0]}
                  alt={product?.category}
                  className='h-full object-scale-down mix-blend-multiply hover:scale-125 transition-all'
                />
              </div>
              <p className='text-center text-sm md:text-base capitalize'>{product?.category}</p>
            </div>
          ))
        )}
      </div>
    </div>
  );
};

export default CategoryList;
