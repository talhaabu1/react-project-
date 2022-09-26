import React from 'react';
import './Cart.css'

const Cart = (props) => {
    
    console.log(props)
    return (
        <div>
           <h2>Order Summary</h2>
             <hr/>
            <h2>Selected Items:{props.cart.length}</h2>  
        </div>
    );
};

export default Cart;