import React from 'react'

function StoreItem({name,price,inventory,addToCart}) {
    return (
        <div>
            <h1>{name}</h1>
            <span>${price}</span>   
            <span>   {inventory}</span>
            <button onClick={addToCart}>Buy me!</button>
        </div>
    )
}

export default StoreItem
