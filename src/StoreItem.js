import React from 'react'

function StoreItem({name,price,inventory}) {
    return (
        <div>
            <h1>{name}</h1>
            <span>${price}</span>   
            <span>   {inventory}</span>
        </div>
    )
}

export default StoreItem
