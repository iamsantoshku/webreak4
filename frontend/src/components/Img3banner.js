

// import React from "react";
// import img1 from "../assest/banner/2.avif";
// import img2 from "../assest/banner/7e6c8800-9a28-4d03-a159-c6a678c5f226.avif";
// import img3 from "../assest/banner/man babber.avif";
// import { NavLink } from "react-router-dom";
// import SummaryApi from "../common";

// const Img3banner = () => {
//     return (
//         <div className="flex flex-wrap justify-between mx-auto">
//             <div className="w-full sm:w-1/3 md:w-[29vw] h-auto mb-4">
//                 <NavLink to={SummaryApi.front.url2 + "product-category?category=women"}>
//                     <img src={img1} alt="Women Category" className="w-full h-full object-cover" />
//                 </NavLink>
//             </div>
//             <div className="w-full sm:w-1/3 md:w-[29vw] h-auto mb-4">
//                 <NavLink to={SummaryApi.front.url2 + "product-category?category=women"}>
//                     <img src={img2} alt="Women Category" className="w-full h-full object-cover" />
//                 </NavLink>
//             </div>
//             <div className="w-full sm:w-1/3 md:w-[29vw] h-auto mb-4">
//                 <NavLink to={SummaryApi.front.url2 + "product-category?category=men"}>
//                     <img src={img3} alt="Men Category" className="w-full h-full object-cover" />
//                 </NavLink>
//             </div>
//         </div>
//     );
// };

// export default Img3banner;



// import React from "react";
// import img1 from "../assest/banner/2.avif";
// import img2 from "../assest/banner/7e6c8800-9a28-4d03-a159-c6a678c5f226.avif";
// import img3 from "../assest/banner/man babber.avif";
// import { NavLink } from "react-router-dom";
// import SummaryApi from "../common";

// const Img3banner = () => {
//     return (
//         <div className="flex flex-wrap justify-between gap-x-1 mx-auto">
//             <div className="w-full sm:w-1/3 md:w-[29vw] h-auto mb-2">
//                 <NavLink to={SummaryApi.front.url2 + "product-category?category=women"}>
//                     <img src={img1} alt="Women Category" className="w-full h-full object-cover" />
//                 </NavLink>
//             </div>
//             <div className="w-full sm:w-1/3 md:w-[29vw] h-auto mb-2">
//                 <NavLink to={SummaryApi.front.url2 + "product-category?category=women"}>
//                     <img src={img2} alt="Women Category" className="w-full h-full object-cover" />
//                 </NavLink>
//             </div>
//             <div className="w-full sm:w-1/3 md:w-[29vw] h-auto mb-2">
//                 <NavLink to={SummaryApi.front.url2 + "product-category?category=men"}>
//                     <img src={img3} alt="Men Category" className="w-full h-full object-cover" />
//                 </NavLink>
//             </div>
//         </div>
//     );
// };

// export default Img3banner;



// import React from "react";
// import img1 from "../assest/banner/2.avif";
// import img2 from "../assest/banner/7e6c8800-9a28-4d03-a159-c6a678c5f226.avif";
// import img3 from "../assest/banner/man babber.avif";
// import { NavLink } from "react-router-dom";
// import SummaryApi from "../common";

// const Img3banner = () => {
//     return (
//         <div className="flex flex-wrap gap-6 mx-auto mt-[5vw]">
//             <div className="w-full sm:w-1/3 md:w-[30vw] h-auto mb-0 lg:ml-10 ">
//                 <NavLink to={SummaryApi.front.url2 + "product-category?category=women"}>
//                     <img src={img1} alt="Women Category" className="w-full h-full object-cover" />
//                 </NavLink>
//             </div>
//             <div className="w-full sm:w-1/3 md:w-[30vw] h-auto mb-0">
//                 <NavLink to={SummaryApi.front.url2 + "product-category?category=women"}>
//                     <img src={img2} alt="Women Category" className="w-full h-full object-cover" />
//                 </NavLink>
//             </div>
//             <div className="w-full sm:w-1/3 md:w-[30vw] h-auto mb-0">
//                 <NavLink to={SummaryApi.front.url2 + "product-category?category=men"}>
//                     <img src={img3} alt="Men Category" className="w-full h-full object-cover" />
//                 </NavLink>
//             </div>
            
//         </div>
//     );
// };

// export default Img3banner;




import React, { useState, useEffect } from "react";
import img1 from "../assest/banner/2.avif";
import img2 from "../assest/banner/7e6c8800-9a28-4d03-a159-c6a678c5f226.avif";
import img3 from "../assest/banner/man babber.avif";
import { NavLink } from "react-router-dom";
import SummaryApi from "../common";

const Img3banner = () => {
  const [isCtrlPressed, setIsCtrlPressed] = useState(false);

  // Event listeners to detect Ctrl key press
  useEffect(() => {
    const handleKeyDown = (event) => {
      if (event.ctrlKey) {
        setIsCtrlPressed(true);
      }
    };
    const handleKeyUp = () => {
      setIsCtrlPressed(false);
    };

    window.addEventListener("keydown", handleKeyDown);
    window.addEventListener("keyup", handleKeyUp);

    return () => {
      window.removeEventListener("keydown", handleKeyDown);
      window.removeEventListener("keyup", handleKeyUp);
    };
  }, []);

  return (
    <div
      className={`flex flex-wrap gap-6 mx-auto mt-[5vw] ${
        isCtrlPressed ? "px-2" : "px-0"
      }`}
    >
      {/* Image 1 - Women Category */}
      <div className="w-full sm:w-1/3 md:w-[30vw] lg:w-[32vw] h-auto mb-4">
        <NavLink to={SummaryApi.front.url2 + "product-category?category=women"}>
          <img
            src={img1}
            alt="Women Category"
            className="w-full h-full object-cover rounded-lg"
          />
        </NavLink>
      </div>

      {/* Image 2 - Women Category */}
      <div className="w-full sm:w-1/3 md:w-[30vw] lg:w-[31.5vw] h-auto mb-4">
        <NavLink to={SummaryApi.front.url2 + "product-category?category=women"}>
          <img
            src={img2}
            alt="Women Category"
            className="w-full h-full object-cover rounded-lg"
          />
        </NavLink>
      </div>

      {/* Image 3 - Men Category */}
      <div className="w-full sm:w-1/3 md:w-[30vw] lg:w-[32vw] h-auto mb-4">
        <NavLink to={SummaryApi.front.url2 + "product-category?category=men"}>
          <img
            src={img3}
            alt="Men Category"
            className="w-full h-full object-cover rounded-lg"
          />
        </NavLink>
      </div>
    </div>
  );
};

export default Img3banner;
