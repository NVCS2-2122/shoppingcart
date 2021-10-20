import React from 'react'

function CartItem({name,id,price}) {
    return (
        <div className="CartItem">
            <h3>{name}     <span>${price}</span></h3>
        </div>
    )
}

export default CartItem
