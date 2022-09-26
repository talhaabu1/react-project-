import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCartPlus,} from '@fortawesome/free-solid-svg-icons'
import './Product.css';

const Product = (props) => {
    const {CartAdd, product} = props;
    const {img,name,price,seller,ratings } = props.product;
    let cut;
    if(name.length < 27){
        cut = name;
    }
    else{
        cut = name.substring(0,27) + '...';
    }
   
    return (
        <div className='cart'>
            <img src={img} alt="" srcset="" />
            <h3 className='name'>{cut}</h3>
            <h4>Price:${price}</h4>
            <h4>Manufacturer:{seller}</h4>
            <h4>Rating:{ratings}</h4>
            
           <button onClick={() => CartAdd(product)} className='btn-card'>
            <p>ADD TO CART</p>
            <FontAwesomeIcon className='icon' icon={faCartPlus}></FontAwesomeIcon>
          </button>
            
        </div>
    );
};

export default Product;