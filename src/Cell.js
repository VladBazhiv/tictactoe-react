import React from "react"

export default function Cell(props) {
    
    const [styles, setStyles] = React.useState ({
        backgroundColor: "#FFD372"
    })
    
    function changeBg() {
        if(styles.backgroundColor !== "#FFD372") return;
        props.moveIncrease(prev => { return prev + 1 })
        setStyles({
            backgroundColor: props.moves % 2 === 0 ? '#eee' : "#333"
        })
    }
    
    return (
        <div 
            style={styles} 
            className="board--cell"
            onClick={() => {
                props.move(props.id);
                changeBg();
            }}
        >
        </div>
    )
}