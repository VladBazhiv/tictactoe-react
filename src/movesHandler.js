export default function movesHandler(cells, moves, end) {
    
    for(let i = 0; i < 3; i++) {
        let sum = '';
        for(let j = 0; j < 3; j++) {
            if(cells[j+3*i] !== '') sum += cells[j+3*i];
        }
        if(sum === 'xxx' || sum === 'ooo') end(moves % 2);
    }
    
    for(let i = 0; i < 3; i++) {
        if(cells[i] === 'x' && cells[i+3] === 'x' && cells[i+6] === 'x') end(moves % 2);
        if(cells[i] === 'o' && cells[i+3] === 'o' && cells[i+6] === 'o') end(moves % 2);
    }
    

    if(cells[0] === 'x' && cells[4] === 'x' && cells[8] === 'x') end(moves % 2);
    if(cells[0] === 'o' && cells[4] === 'o' && cells[8] === 'o') end(moves % 2);
    if(cells[2] === 'x' && cells[4] === 'x' && cells[6] === 'x') end(moves % 2);
    if(cells[2] === 'o' && cells[4] === 'o' && cells[6] === 'o') end(moves % 2);

    if(moves === 9) end(-1);
}
