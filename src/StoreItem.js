import React from 'react'

function StoreItem({id,name,price,inventory,addToCart}) {
    return (
        <div>
            <h1>{name}</h1>
            <span>${price}</span>   
            <span>   {inventory}</span>
            <button onClick={()=>{
                addToCart(id)
            }}>
                Buy me!
            </button>
        </div>
    )
}

export default StoreItem
