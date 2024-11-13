



import React, { useEffect, useState } from 'react';
import image1 from '../assest/banner/img1.webp';
import image2 from '../assest/banner/img2.webp';
// import image3 from '../assest/banner/img3.jpg'
import image4 from '../assest/banner/img4.jpg';
import image5 from '../assest/banner/img5.webp';
import image6 from '../assest/banner/men_banner.jpg';
import image7 from '../assest/banner/womanbanner.webp';
import image8 from '../assest/banner/banner3.gif';
import image9 from '../assest/banner/banner4.avif';
import image10 from '../assest/banner/banner5.avif';
import image11 from '../assest/banner/banner7.avif';
import image12 from '../assest/banner/banner8.avif';
import image13 from '../assest/banner/bannerr1.avif'
import image14 from '../assest/banner/bannerr2.avif'
import image15 from '../assest/banner/bannerr3.jpg'
import image16 from '../assest/banner/bannerrr5.avif'
import image17 from '../assest/banner/babberr9.avif'
import image18 from '../assest/banner/bannerr8.jpg'

import { FaAngleRight } from "react-icons/fa6";
import { FaAngleLeft } from "react-icons/fa6";

const BannerProduct = () => {
    const [currentImage, setCurrentImage] = useState(0);

    const desktopImages = [
        image2, image7, image6, image5, image7, image8, image9, image10, image11,
    ];

    const mobileImages = [
        image7, image11, image13, image14, image15, image16, image17
    ];

    const nextImage = () => {
        setCurrentImage(prev => (prev + 1) % desktopImages.length);
    };

    const prevImage = () => {
        setCurrentImage(prev => (prev === 0 ? desktopImages.length - 1 : prev - 1));
    };

    useEffect(() => {
        const interval = setInterval(nextImage, 5000);
        return () => clearInterval(interval);
    }, [currentImage]);

    return (
        <div className='container mx-auto px-0 rounded'>
            <div className='h-60 md:h-[400px] w-full bg-gray-200 relative'>
                <div className='absolute z-10 h-full w-full md:flex items-center hidden'>
                    <div className='flex justify-between w-full text-2xl'>
                        <button onClick={prevImage} className='bg-white shadow-md rounded-full p-1'>
                            <FaAngleLeft />
                        </button>
                        <button onClick={nextImage} className='bg-white shadow-md rounded-full p-1'>
                            <FaAngleRight />
                        </button>
                    </div>
                </div>

                {/* Desktop and tablet version */}
                <div className='hidden md:flex h-full w-full overflow-hidden'>
                    {desktopImages.map((imageUrl, index) => (
                        <div className='w-full h-full min-w-full transition-all' key={imageUrl} style={{ transform: `translateX(-${currentImage * 100}%)` }}>
                            <img src={imageUrl} className='w-full h-full object-cover' />
                        </div>
                    ))}
                </div>


                 <div className='flex h-full w-full overflow-hidden md:hidden'>
                    {mobileImages.map((imageUrl, index) => (
                        <div className='w-full min-w-full transition-all' key={imageUrl} style={{ transform: `translateX(-${currentImage * 100}%)` }}>
                            <img src={imageUrl} className='w-full h-full object-contain' style={{ maxHeight: '400px' }} /> {/* Adjusted for full image view */}
                         </div>
                    ))}
                </div> 





            </div>
        </div>
    );
};

export default BannerProduct;




// import React, { useEffect, useState } from 'react';
// import image1 from '../assest/banner/img1.webp';
// import image2 from '../assest/banner/img2.webp';
// import image4 from '../assest/banner/img4.jpg';
// import image5 from '../assest/banner/img5.webp';
// import image6 from '../assest/banner/men_banner.jpg';
// import image7 from '../assest/banner/womanbanner.webp';
// import image8 from '../assest/banner/banner3.gif';
// import image9 from '../assest/banner/banner4.avif';
// import image10 from '../assest/banner/banner5.avif';
// import image11 from '../assest/banner/banner7.avif';
// import image12 from '../assest/banner/banner8.avif';
// import image13 from '../assest/banner/bannerr1.avif';
// import image14 from '../assest/banner/bannerr2.avif';
// import image15 from '../assest/banner/bannerr3.jpg';
// import image16 from '../assest/banner/bannerrr5.avif';
// import image17 from '../assest/banner/babberr9.avif';
// import image18 from '../assest/banner/bannerr8.jpg';

// import { FaAngleRight } from 'react-icons/fa6';
// import { FaAngleLeft } from 'react-icons/fa6';

// const BannerProduct = () => {
//   const [currentImage, setCurrentImage] = useState(0);

//   const desktopImages = [
//     image2, image7, image6, image5, image7, image8, image9, image10, image11,
//   ];

//   const mobileImages = [
//     image7, image11, image13, image14, image15, image16, image17,
//   ];

//   const nextImage = () => {
//     setCurrentImage((prev) => (prev + 1) % desktopImages.length);
//   };

//   const prevImage = () => {
//     setCurrentImage((prev) => (prev === 0 ? desktopImages.length - 1 : prev - 1));
//   };

//   useEffect(() => {
//     const interval = setInterval(nextImage, 5000);
//     return () => clearInterval(interval);
//   }, [currentImage]);

//   return (
//     <div className="w-full mx-auto overflow-hidden">
//       <div className="relative h-60 md:h-[400px] w-full bg-gray-200">
//         <div className="absolute z-10 h-full w-full md:flex items-center hidden">
//           <div className="flex justify-between w-full text-2xl">
//             <button onClick={prevImage} className="bg-white shadow-md rounded-full p-1">
//               <FaAngleLeft />
//             </button>
//             <button onClick={nextImage} className="bg-white shadow-md rounded-full p-1">
//               <FaAngleRight />
//             </button>
//           </div>
//         </div>

//         {/* Desktop and tablet version */}
//         <div className="hidden md:flex h-full w-full overflow-hidden">
//           {desktopImages.map((imageUrl, index) => (
//             <div
//               className="w-full h-full min-w-full transition-all duration-500 ease-in-out"
//               key={imageUrl}
//               style={{ transform: `translateX(-${currentImage * 100}%)` }}
//             >
//               <img
//                 src={imageUrl}
//                 alt={`Banner ${index}`}
//                 className="w-full h-full object-cover"
//               />
//             </div>
//           ))}
//         </div>

//         {/* Mobile version */}
//         <div className="flex h-full w-full overflow-hidden md:hidden">
//           {mobileImages.map((imageUrl, index) => (
//             <div
//               className="w-full min-w-full transition-all duration-500 ease-in-out"
//               key={imageUrl}
//               style={{ transform: `translateX(-${currentImage * 100}%)` }}
//             >
//               <img
//                 src={imageUrl}
//                 alt={`Banner ${index}`}
//                 className="w-full h-full object-cover"
//                 style={{ maxHeight: '400px' }}  // Ensures a full image view on mobile
//               />
//             </div>
//           ))}
//         </div>
//       </div>
//     </div>
//   );
// };

// export default BannerProduct;
