import React, { useEffect } from 'react';
import axios from 'axios'
import { useParams } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux';
import { selectproduct, removeproduct } from '../redux/action/productAction'

const ProductDetails = () => {
    const product = useSelector((state) => state.product);
    const { title, image, price, category, description } = product;
    const { ProuductId } = useParams();
    const dispatch = useDispatch()//action file refer this

    //fetch data
    const fetchData = async () => {
        const response = await axios
            .get(`https://fakestoreapi.com/products/${ProuductId}`)
            .catch((err) => {
                console.log("Err", err);
            });
        dispatch(selectproduct(response.data));
    };
    useEffect(() => {
        if (ProuductId && ProuductId !== '') fetchData();
        return () => {
            dispatch(removeproduct());
        }
    }, [ProuductId]);

    return (
        <div>
            { Object.keys(product).length === 0 ? (<div>...loading</div>) : (<div>
                        <div className="col-md-6">
                        <div class="card">
     <div class="card-body">
     	<img src={image} alt={title} className="img-fluid" style={{width:'250px'}} />
     </div>
     <div class="card-footer">
     <h3>{title}</h3>
                            <h5>${price}</h5>
                            <h6>{category}</h6>
                            <p>{description}</p>
       </div>
  </div>
                        </div>
                        {/* <div className="col-md-6">
                            <h3>{title}</h3>
                            <h5>${price}</h5>
                            <h6>{category}</h6>
                            <p>{description}</p>
                        </div> */}
                    </div>)
            }
        </div>
    )
}
export default ProductDetails;