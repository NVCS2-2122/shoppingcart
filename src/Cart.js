import React, {useState} from 'react'
import CartItem from './CartItem'

function Cart({inCart}) {
    
    return (
        <div>
            {inCart.map(cI =>
            <CartItem 
                name={cI.name}
                id={cI.id}
                key={cI.id}
                price={cI.price}
            />)}
        </div>
    )
}

export default Cart
