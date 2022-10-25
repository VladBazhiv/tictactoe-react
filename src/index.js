import React from 'react';
import ReactDOM from 'react-dom/client';
import Header from './Header';
import Board from './Board';
import Footer from './Footer';
import style from './style.css'

function App() {
  
  const [isShown, setIsShown] = React.useState(false);
  const [players, setPlayers] = React.useState({player1: '', player2: ''});
  const [result, setResult] = React.useState('');
  
  function formHandler(event) {
    const {name, value} = event.target;
    setPlayers(prev => {
      return {
        ...prev,
        [name]: value
      }
    })
  }
  
  const [isEnded, setIsEnded] = React.useState(false);

  function trigerEnd(winner) {
    if(winner === 1) winner = players.player1
    else if(winner === 0) winner = players.player2
    else winner = 'nobody';
    
    setResult(`${winner} won! yay!`)
    setIsEnded(true);
  }

  function reload() {
    window.location.reload(false)
  }

  return (
    <div className='wrapper'>
      <Header />
      {isShown && <Board  trigerEnd={trigerEnd}/>}
      {isEnded && <div className='endScreen' onClick={reload}><p>{result}</p></div>}
      <Footer handler={formHandler} formData={players} isShown={setIsShown}/>
    </div>
  );
}

ReactDOM.createRoot(document.getElementById('root')).render(<App />); 