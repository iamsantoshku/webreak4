// import React from 'react'
// import backimg from '../assest/banner/banner9.avif'
// import { NavLink } from 'react-router-dom'

// const Background = () => {
//   return (
//     <div className='mt-[2vw]'>
//         <NavLink ><img src={backimg} alt="" />   </NavLink>  
//     </div>
//   )
// }

// export default Background


// import React from 'react';
// import backimg from '../assest/banner/banner9.avif';
// import { NavLink } from 'react-router-dom';

// const Background = () => {
//   return (
//     <div className="mt-[2vw] px-4 flex justify-center">
//       <NavLink to="#">
//         <img
//           src={backimg}
//           alt="Banner"
//           className="w-full max-w-screen-lg h-auto object-cover rounded-lg"
//         />
//       </NavLink>
//     </div>
//   );
// };

// export default Background;



import React from 'react';
import backimg from '../assest/banner/banner9.avif';
import { NavLink } from 'react-router-dom';

const Background = () => {
  return (
    <div className="flex justify-center w-screen overflow-hidden">
      <NavLink to="#">
        <img
          src={backimg}
          alt="Banner"
          className="w-full h-auto object-cover rounded-lg"
        />
      </NavLink>
    </div>
  );
};

export default Background;




