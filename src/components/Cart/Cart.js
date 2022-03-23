import React from 'react';

const Cart = ({cart}) => {
    return (
        <div>
             <h3> Total Cart selected: {cart.length}</h3>
                  { cart.map(userName=> <p> {userName.name} </p>)}
                
        </div>
    );
};

export default Cart;