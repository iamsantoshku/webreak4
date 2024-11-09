

import React from 'react';
import banner from '../assest/bannerimage.avif';
import img1 from '../assest/imge1.avif';
import img2 from '../assest/img2.avif';
import img3 from '../assest/img3.avif';
import img4 from '../assest/img4.avif';
import img5 from '../assest/img5avif.avif';
import SummaryApi from '../common';
import { NavLink } from 'react-router-dom';

const Banner3 = () => {
  return (
    <div className="w-full bg-[#350e1a] p-4">
      {/* Main banner section with side image */}
      <div className="flex flex-col lg:flex-row gap-4 items-center">
        <div className="w-full lg:w-1/3">
          <img src={img1} alt="Linen Edit" className="w-full h-full object-cover rounded-lg" />
        </div>
        <div className="relative w-full lg:w-2/3">
          {/* Reduced height for the banner */}
          {/*  */}
          <img src={banner} alt="Luxe Edit" className="w-full h-48 lg:h-60 object-cover rounded-lg" />
          <div className="absolute inset-0 flex flex-col justify-center items-start p-8 md:p-12 lg:p-16 bg-gradient-to-r from-[#350e1a] via-[#350e1a]/70 to-transparent">
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-white">LUXE EDIT</h1>
            <p className="text-white text-lg md:text-xl mt-2">A Spectacular assortment of minimal yet alluring styles</p>
            <NavLink to={SummaryApi.front.url2 + "product-category?category=women"}><button className="mt-4 px-6 py-3 bg-black text-white text-lg font-semibold rounded hover:bg-gray-800 transition">
              Shop Now →
            </button></NavLink>
          </div>
        </div>
      </div>

      {/* Subcategory images section */}
      <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 mt-6">
        <div className="relative group">
          <img src={img2} alt="Under 20K Store" className="w-full h-full object-cover rounded-lg" />
          <p className="absolute bottom-2 left-2 text-white text-lg font-semibold bg-black bg-opacity-60 px-2 py-1 rounded"></p>
        </div>
        <div className="relative group">
          <img src={img3} alt="Travel Edit" className="w-full h-full object-cover rounded-lg" />
          <p className="absolute bottom-2 left-2 text-white text-lg font-semibold bg-black bg-opacity-60 px-2 py-1 rounded"></p>
        </div>
        <div className="relative group">
          <img src={img4} alt="The Bridesmaid Edit" className="w-full h-full object-cover rounded-lg" />
          <p className="absolute bottom-2 left-2 text-white text-lg font-semibold bg-black bg-opacity-60 px-2 py-1 rounded"></p>
        </div>
        <div className="relative group">
          <img src={img5} alt="Additional Edit" className="w-full h-full object-cover rounded-lg" />
          <p className="absolute bottom-2 left-2 text-white text-lg font-semibold bg-black bg-opacity-60 px-2 py-1 rounded"></p>
        </div>
      </div>
    </div>
  );
};

export default Banner3;
