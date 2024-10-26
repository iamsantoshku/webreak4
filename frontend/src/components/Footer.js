


// import React from 'react';
// import { FaFacebookF, FaInstagram } from 'react-icons/fa';
// import { NavLink } from 'react-router-dom';
// import googleplay from "../assest/googleplay.png";
// import appstore from "../assest/appstore.png";

// const Footer = () => {
//   return (
//     <footer className="font-sans bg-pink-100 text-black mt-12">
//       <div className="container mx-auto px-4 py-8">
//         {/* App Download Section */}
//         <div className="bg-gray-700 flex justify-between items-center py-6 mb-6 text-white">
//           <div className="flex  items-center gap-4 ml-[5vw]">
//             <h3 className="text-lg font-semibold">Download Our App</h3>
//             <NavLink to='https://play.google.com/store/games?hl=en'>
//               <button className="bg-black text-white px-4 py-1 rounded flex items-center">
//                 <img src={googleplay} className="w-19 h-10" alt="Google Play" />
//               </button>
//             </NavLink>
//             <NavLink to='https://www.apple.com/app-store/'>
//               <button className="bg-black text-white px-3 py-1 rounded flex items-center">
//                 <img src={appstore} className="w-19 h-10" alt="App Store" />
//               </button>
//             </NavLink>
//           </div>

//           <div className="text-right mr-[5vw]">
//             <p className="text-sm">FOR ANY HELP, YOU MAY CALL US AT <strong>1800-266-3333</strong></p>
//             <p className="text-xs">(Monday to Saturday: 10 am - 10 pm, Sunday: 10 am - 7 pm)</p>
//           </div>
//         </div>

//         {/* Footer Sections */}
//         <div className="bg-pink-200 flex flex-wrap justify-between py-6 px-4 mb-[2vw]">
//           <div className="w-full sm:w-1/4 mb-4">
//             <h3 className="text-lg font-semibold">Who Are We</h3>
//             <ul className="mt-2">
//               <li>About Us</li>
//               <li>Careers</li>
//               <li>Press</li>
//             </ul>
//           </div>
//           <div className="w-full sm:w-1/4 mb-4">
//             <h4 className="text-lg font-semibold">Help</h4>
//             <ul className="mt-2">
//               <li>Shipping & Return Policy</li>
//               <li>Help Center</li>
//               <li>Terms & Conditions</li>
//             </ul>
//           </div>
//           <div className="w-full sm:w-1/4 mb-4">
//             <h4 className="text-lg font-semibold">Quick Links</h4>
//             <ul className="mt-2">
//               <li>Offers</li>
//               <li>Sitemap</li>
//               <li>Style Files</li>
//             </ul>
//           </div>
//           <div className="w-full sm:w-1/4 mb-4">
//             <h4 className="text-lg font-semibold">Follow Us</h4>
//             <div className="flex gap-4 mt-2">
//               <FaInstagram className="text-xl" />
//               <FaFacebookF className="text-xl" />
//             </div>
//           </div>
//         </div>

//         {/* Footer Categories */}
//         <div className="bg-pink-50 flex flex-wrap justify-between py-6 px-4 mt-6">
//           <div className="w-full sm:w-1/4 mb-4">
//             <h4 className="text-lg font-semibold">Women</h4>
//             <ul className="mt-2">
//               <li>Women's Indianwear</li>
//               <li>Women's Westernwear</li>
//               <li>Bags</li>
//               <li>Women's Footwear</li>
//               <li>Women's Jewellery</li>
//               <li>Lingerie</li>
//               <li>Women's Sportswear</li>
//               <li>Women's Sleep & Lounge</li>
//               <li>Women's Watches</li>
//               <li>Fashion Accessories</li>
//             </ul>
//           </div>
//           <div className="w-full sm:w-1/4 mb-4">
//             <h4 className="text-lg font-semibold">Men</h4>
//             <ul className="mt-2">
//               <li>Topwear</li>
//               <li>Bottomwear</li>
//               <li>Ethnicwear</li>
//               <li>Men's Footwear</li>
//               <li>Men's Accessories</li>
//               <li>Innerwear & Sleepwear</li>
//               <li>Men's Watches</li>
//               <li>Bags & Backpacks</li>
//               <li>Athleisure</li>
//               <li>Sports & Fitness</li>
//             </ul>
//           </div>
//           <div className="w-full sm:w-1/4 mb-4">
//             <h4 className="text-lg font-semibold">Kids</h4>
//             <ul className="mt-2">
//               <li>Kids Indianwear</li>
//               <li>Kids Westernwear</li>
//               <li>Kids Footwear</li>
//               <li>Kids Jewellery</li>
//               <li>Feeding</li>
//               <li>Kids Sportswear</li>
//               <li>Kids Sleepwear</li>
//               <li>Kids Accessories</li>
//               <li>Toys & Games</li>
//               <li>Innerwear</li>
//             </ul>
//           </div>
//           <div className="w-full sm:w-1/4 mb-4">
//             <h4 className="text-lg font-semibold">House of WebReak</h4>
//             <ul className="mt-2">
//               <li>Twenty Dresses By Nykaa Fashion</li>
//               <li>Nykd by Nykaa</li>
//               <li>RSVP by Nykaa Fashion</li>
//               <li>Gajra Gang by Nykaa Fashion</li>
//               <li>Likha by Nykaa Fashion</li>
//               <li>Mixt by Nykaa Fashion</li>
//               <li>IYKYK</li>
//               <li>Kica</li>
//               <li>Pipa Bella By Nykaa Fashion</li>
//               <li>Azai by Nykaa Fashion</li>
//             </ul>
//           </div>
//         </div>

//         {/* Footer Bottom */}
//         <div className="text-center rounded-2xl bg-black mt-6 text-sm text-white">
//           <p>&copy; 2024 WebReak Fashion. All rights reserved.</p>
//         </div>
//       </div>
//     </footer>
//   );
// };

// export default Footer;





import React from 'react';
import { FaFacebookF, FaInstagram } from 'react-icons/fa';
import { NavLink } from 'react-router-dom';
import googleplay from "../assest/googleplay.png";
import appstore from "../assest/appstore.png";

const Footer = () => {
  return (
    <footer className="font-sans bg-pink-100 text-black mt-12">
      <div className="container mx-auto px-4 py-8">
        {/* App Download Section */}
        <div className="bg-gray-700 flex flex-col sm:flex-row justify-between items-center py-6 text-white">
          <div className="flex flex-col items-center sm:items-start gap-2 sm:gap-4 ml-[5vw]">
            <h3 className="text-lg font-semibold">Download Our App</h3>
            <div className="flex gap-4">
              <NavLink to='https://play.google.com/store/games?hl=en'>
                <button className="bg-black text-white px-4 py-1 rounded flex items-center">
                  <img src={googleplay} className="w-19 h-10" alt="Google Play" />
                </button>
              </NavLink>
              <NavLink to='https://www.apple.com/app-store/'>
                <button className="bg-black text-white px-3 py-1 rounded flex items-center">
                  <img src={appstore} className="w-19 h-10" alt="App Store" />
                </button>
              </NavLink>
            </div>
          </div>

          <div className="text-right mr-[5vw] mt-4 sm:mt-0">
            <p className="text-sm">FOR ANY HELP, YOU MAY CALL US AT <strong>1800-266-3333</strong></p>
            <p className="text-xs">(Monday to Saturday: 10 am - 10 pm, Sunday: 10 am - 7 pm)</p>
          </div>
        </div>

        {/* Footer Sections */}
        <div className="bg-pink-200 flex flex-wrap justify-between py-6 px-4">
          <div className="w-full sm:w-1/4 mb-4">
            <h3 className="text-lg font-semibold">Who Are We</h3>
            <ul className="mt-2">
              <li>About Us</li>
              <li>Careers</li>
              <li>Press</li>
            </ul>
          </div>
          <div className="w-full sm:w-1/4 mb-4">
            <h4 className="text-lg font-semibold">Help</h4>
            <ul className="mt-2">
              <li>Shipping & Return Policy</li>
              <li>Help Center</li>
              <li>Terms & Conditions</li>
            </ul>
          </div>
          <div className="w-full sm:w-1/4 mb-4">
            <h4 className="text-lg font-semibold">Quick Links</h4>
            <ul className="mt-2">
              <li>Offers</li>
              <li>Sitemap</li>
              <li>Style Files</li>
            </ul>
          </div>
          <div className="w-full sm:w-1/4 mb-4">
            <h4 className="text-lg font-semibold">Follow Us</h4>
            <div className="flex gap-4 mt-2">
              <FaInstagram className="text-xl" />
              <FaFacebookF className="text-xl" />
            </div>
          </div>
        </div>

        {/* Footer Categories */}
        <div className="bg-pink-50 flex flex-wrap justify-between py-6 px-4">
          <div className="w-full sm:w-1/4 mb-4">
            <h4 className="text-lg font-semibold">Women</h4>
            <ul className="mt-2">
              <li>Women's Indianwear</li>
              <li>Women's Westernwear</li>
              <li>Bags</li>
              <li>Women's Footwear</li>
              <li>Women's Jewellery</li>
              <li>Lingerie</li>
              <li>Women's Sportswear</li>
              <li>Women's Sleep & Lounge</li>
              <li>Women's Watches</li>
              <li>Fashion Accessories</li>
            </ul>
          </div>
          <div className="w-full sm:w-1/4 mb-4">
            <h4 className="text-lg font-semibold">Men</h4>
            <ul className="mt-2">
              <li>Topwear</li>
              <li>Bottomwear</li>
              <li>Ethnicwear</li>
              <li>Men's Footwear</li>
              <li>Men's Accessories</li>
              <li>Innerwear & Sleepwear</li>
              <li>Men's Watches</li>
              <li>Bags & Backpacks</li>
              <li>Athleisure</li>
              <li>Sports & Fitness</li>
            </ul>
          </div>
          <div className="w-full sm:w-1/4 mb-4">
            <h4 className="text-lg font-semibold">Kids</h4>
            <ul className="mt-2">
              <li>Kids Indianwear</li>
              <li>Kids Westernwear</li>
              <li>Kids Footwear</li>
              <li>Kids Jewellery</li>
              <li>Feeding</li>
              <li>Kids Sportswear</li>
              <li>Kids Sleepwear</li>
              <li>Kids Accessories</li>
              <li>Toys & Games</li>
              <li>Innerwear</li>
            </ul>
          </div>
          <div className="w-full sm:w-1/4 mb-4">
            <h4 className="text-lg font-semibold">House of WebReak</h4>
            <ul className="mt-2">
              <li>Twenty Dresses By Nykaa Fashion</li>
              <li>Nykd by Nykaa</li>
              <li>RSVP by Nykaa Fashion</li>
              <li>Gajra Gang by Nykaa Fashion</li>
              <li>Likha by Nykaa Fashion</li>
              <li>Mixt by Nykaa Fashion</li>
              <li>IYKYK</li>
              <li>Kica</li>
              <li>Pipa Bella By Nykaa Fashion</li>
              <li>Azai by Nykaa Fashion</li>
            </ul>
          </div>
        </div>

        {/* Footer Bottom */}
        <div className="text-center rounded-2xl bg-black text-sm text-white py-4">
          <p>&copy; 2024 WebReak Fashion. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;





