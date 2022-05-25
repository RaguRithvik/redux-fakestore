import React from 'react';
import { Link } from 'react-router-dom'
import { useSelector } from 'react-redux';
import '../css/app.css';

const ProductComponent = () => {
const products = useSelector((state) => state.allProduct.products);
const Renderlist = products.map((product) => {
const {title, image, price, category} = product;    
return(
<div className="col-md-3" key={product.id}>
    <Link to={`/productDetails/${product.id}/`}>
        <div className="border">
            <img src={image} alt={title} className="img-fluid" />
            <div className="border-small">
            <h5>{title}</h5>
            <p>${price}</p>
            <p>{category}</p>
        </div>
    </div>
    </Link>
</div>
    )}) 
    return(
       <>{Renderlist}</>
    )
};
export default ProductComponent