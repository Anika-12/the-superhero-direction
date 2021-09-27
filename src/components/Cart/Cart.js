import React from 'react';
import './Cart.css'

const Cart = (props) => {
    const {cart} = props;
    let total=0;
    for(const member of cart){
        total= total + member.income;
    }
    return (
        <div>
             <h3>Added Summary</h3>
                <h5>Person Added: {props.cart.length}</h5>
                <br></br>
                <p>Total Income : {total}</p>
        </div>
    );
};

export default Cart;