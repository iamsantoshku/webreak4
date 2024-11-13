import React from 'react'
import CategoryList from '../components/CategoryList'
import BannerProduct from '../components/BannerProduct'
import BannerProduct1 from '../components/BannerProduct1'
import HorizontalCardProduct from '../components/HorizontalCardProduct'
import VerticalCardProduct from '../components/VerticalCardProduct'
import Background from '../components/Background'
import Img3banner from '../components/Img3banner'
import Banner3 from '../components/Banner3'

const Home = () => {
  return (
    <div>
      <CategoryList/>
      <BannerProduct/>
      <VerticalCardProduct category={"women"} heading={"Top's Woman Fashoin"}/>
      {/* <HorizontalCardProduct category={"woman"} heading={"Top's Woman Fasion"}/> */}
      <HorizontalCardProduct category={"footwear"} heading={"Top's Footwear"}/>
      <Banner3/>
      {/* <HorizontalCardProduct category={"watches"} heading={"Popular's Watches"}/> */}

      <VerticalCardProduct category={"westernwear"} heading={"WesternWear"}/>
      <VerticalCardProduct category={"sportswear"} heading={"Sportswear"}/>
      <Img3banner/>
      <VerticalCardProduct category={"home"} heading={"Furniture"}/>
      <VerticalCardProduct category={"jewellery"} heading={"Jewellery"}/>
      {/* <VerticalCardProduct category={"earphones"} heading={"Wired Earphones"}/> */}
      {/* <VerticalCardProduct category={"speakers"} heading={"Bluetooth Speakers"}/> */}
      <BannerProduct1/>
      {/* <VerticalCardProduct category={"refrigerator"} heading={"Refrigerator"}/> */}
      {/* <VerticalCardProduct category={"trimmers"} heading={"Trimmers"}/> */}
      <VerticalCardProduct category={"men"} heading={"Men's Fashion"}/>
      <VerticalCardProduct category={"women"} heading={"Women's Fashoin"}/>
      <VerticalCardProduct category={"kids"} heading={"Kid's Fashoin"}/>
      <Background/>
    </div>
  )
}

export default Home