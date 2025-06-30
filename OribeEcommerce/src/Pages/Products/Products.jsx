import React from 'react'
import { useLocation } from "react-router-dom";
import Container from '../../Component/Container/Container';

import Breadcrumbs from '../../Component/Breadcrumbs/Breadcrumbs';
const Products = () => {
    const location = useLocation();
    const path=(location.pathname.split("/")[1])
  return (
    <div>
       <Container>
         <div>
            <Breadcrumbs tittle={path}></Breadcrumbs>
         </div>
       </Container>
    </div>
  )
}

export default Products