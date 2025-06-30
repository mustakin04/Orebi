import React from 'react'
import { MdNavigateNext } from "react-icons/md";
const Breadcrumbs = ({tittle}) => {
  return (
    <div>
         <div>
            <h2 className='font-DM font-bold text-[49px] text-black'>Products</h2>
             <div className='flex items-center'>
             <h3 className='font-DM font-normal text-[16px] text-black'>Home</h3>
             <MdNavigateNext />
             <p>{tittle}</p>
           </div>
          </div>
    </div>
  )
}

export default Breadcrumbs