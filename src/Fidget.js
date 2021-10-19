import React,{useState} from 'react'
import Pop from './Pop'

const Fidget = () => {
    const [numClicks,setNumClicks] = useState(0)
    const addClick = () => {
        setNumClicks(numClicks+1)
    }
    const numPops = 9
    const table = []
    for (let r = 0; r < 3; r++) {
        const row = []
        for (let c = 0; c < 3; c++) {
            row[c] = 1
        }
        table[r] = row
    }

    return (
        <>
            {numClicks}
            <div className="Fidget">
                {table.map(row => row.map(p => <Pop addClick={addClick} />))}
            </div>
        </>
    )
}

export default Fidget
