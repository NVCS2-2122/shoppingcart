import React, { useState } from 'react'

function Store() {
    const [items,setItems] = useState([
        {
            id: 1,
            name: "Banana (bunch)",
            price: 0.89,
            inventory: 7
        },
        {
            id: 2,
            name: "Banana (bunch)",
            price: 0.89,
            inventory: 7
        },
    ])

    return (
        <div>
            
        </div>
    )
}

export default Store
