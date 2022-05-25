import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import axios from 'axios';
import { setproduct } from '../redux/action/productAction';
import ProductComponent from './productComponent';

const ProductListing = () => {
    const products = useSelector((state) => state);
    const dispatch = useDispatch();
    const fetgetData = async () => {
        const response = await axios.get('https://fakestoreapi.com/products')
            .catch((err) => { console.log(err); });
        dispatch(setproduct(response.data));
    }

    useEffect(() => { fetgetData() }, []);
    console.log(products)
    // const dispatch = useDispatch();
    return (
        <>
            <div className="container">
                <div className="row">
                    <ProductComponent />
                </div>
            </div>
        </>
    );
};
export default ProductListing