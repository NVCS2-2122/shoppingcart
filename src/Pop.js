import React, {useState} from 'react'

const Pop = ({addClick}) => {
    const chooseColor = () => `rgb(${Math.floor(Math.random()*256)},${Math.floor(Math.random()*256)},${Math.floor(Math.random()*256)})`
    const [color,setColor] = useState(chooseColor)
    const [isPopped,setPopped] = useState(false)
    
    return (
        <div 
            className="Pop"
            style={{backgroundColor:color}}
            onClick={()=>{
                setPopped(!isPopped)
                setColor(chooseColor())
                addClick()
            }}
        >
            {isPopped ? 'X' : 'O'}
        </div>
    )
}

export default Pop
