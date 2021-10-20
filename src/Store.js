import React, { useState } from 'react'
import StoreItem from './StoreItem'

function Store({addToCart}) {
    const [items,setItems] = useState([
        {
            id: 1,
            name: "Banana (bunch)",
            price: 0.89,
            inventory: 7
        },
        {
            id: 2,
            name: "rasberries (pint)",
            price: 3.95,
            inventory: 10
        },
        {
            id: 3,
            name: "hot cocoa mix",
            price: 3.95,
            inventory: 1
        },
    ])
    const startAddToCart = (_id) => {
        //looks up item data using id
        const purchasedItem = items.find(item => item.id === _id)
        addToCart(purchasedItem)
    }
    return (
        <div>
            Buy my fruit!
            {items.map((item) => 
                <StoreItem 
                    name={item.name}
                    id={item.id}
                    price={item.price}
                    inventory={item.inventory}
                    key={item.id}
                    addToCart={startAddToCart}
                />
            )}
            
        </div>
    )
}

export default Store
