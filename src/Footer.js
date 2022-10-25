import React from 'react'

export default function Footer(props) { 
    
    const [isDisabled, setIsDisabled] = React.useState(false);
    function handleClick() {
        if(props.formData.player1 === '' || props.formData.player2 === '') return;
        !isDisabled && setIsDisabled(true);  
        props.isShown(true); 
    }
    
    return (
        <footer className='footer'>
            <div className="footer--names">
                <input
                    type="text"
                    placeholder="player one"
                    onChange={props.handler}
                    name="player1"
                    value={props.formData.player1}
                    disabled={isDisabled}
                />
                <button onClick={handleClick}>Play!</button>
                <input
                    type="text"
                    placeholder="player two"
                    onChange={props.handler}
                    name="player2"
                    value={props.formData.player2}
                    disabled={isDisabled}
                />
            </div>
            <small>test project</small>
        </footer>
    )
}