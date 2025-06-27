import React from 'react'
import new1 from "../../assets/new1.png"
import Badge from '../Badge/Badge'
import { FaHeart } from "react-icons/fa";
import { TfiReload } from "react-icons/tfi";
import { MdBookmarkAdd } from "react-icons/md";

const Product = ({ badge }) => {
  return (
    <div className="group"> {/* group class moved here */}
      <div className='relative'>
        <img src={new1} alt="" />
        {badge && <Badge tittle="New" />}
        
        <div className='absolute bottom-0  hidden group-hover:block bg-white w-full h-[40%]'>
          <div className='m-4'>
            {/* Wish List */}
            <div className='flex  items-center gap-2 justify-end cursor-pointer'>
              <p className='text-[#767676] font-DM font-normal text-[16px] hover:text-black group-hover:font-bold transition-all'>
                Add to Wish List
              </p>
              <FaHeart className='text-[#767676] hover:text-black transition-all' />
            </div>

            {/* Compare */}
            <div className='flex items-center gap-2 justify-end cursor-pointer'>
              <p className='text-[#767676] font-DM font-normal text-[16px] hover:text-black group-hover:font-bold transition-all'>
                Compare
              </p>
              <TfiReload className='text-[#767676] hover:text-black transition-all' />
            </div>

            {/* Add to Cart */}
            <div className='flex items-center gap-2 justify-end cursor-pointer'>
              <p className='text-[#767676] font-DM font-normal text-[16px] hover:text-black group-hover:font-bold transition-all'>
                Add to Cart
              </p>
              <MdBookmarkAdd className='text-[#767676] hover:text-black transition-all' />
            </div>
          </div>
        </div>
      </div>
      <div className='mt-3'>
        <div className='flex justify-between '>
          <p className='font-DM font font-bold text-[#262626] text-[20px]'>Basic Crew Neck Tee</p>
          <h4>$4400</h4>
        </div>
      </div>
    </div>
  )
}

export default Product
