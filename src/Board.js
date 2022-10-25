import React from 'react';
import Cell from './Cell';
import movesHandler from "./movesHandler"

export default function Board(props) {
    
    const [movesCount, setMovesCount] = React.useState(0);
    const [cellsStatus, setCellsStatus] = React.useState(['', '', '', '', '', '', '', '', '']);

    function move(id) {
        setCellsStatus(prev => {
            return prev.map((el, i) => {
                return i === id-1 ? movesCount % 2 ? 'x' : 'o' : prev[i]
            })
        })
    };
    
    React.useEffect(() => movesHandler(cellsStatus, movesCount, props.trigerEnd), [movesCount]);
    
    const cellElements = [];
    for(let i = 0; i < 9; i++) {
        cellElements.push(
            <Cell
                key={i+1}
                id={i+1}
                moveIncrease={setMovesCount}
                moves={movesCount}
                move={move}
            />
        )
    }
    
    return (
        <section className='board'>
            {cellElements}
        </section>
    )
}