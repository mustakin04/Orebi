import React from 'react'
import new1 from "../../assets/new1.png"
import Badge from '../Badge/Badge'
const Product = ({badge}) => {
  return (
    <div>
         <div className='relative'>
            <img src={new1} alt="" />
            {
                badge&& (<Badge tittle="New"></Badge>)
            }
        </div>
    </div>
  )
}

export default Product