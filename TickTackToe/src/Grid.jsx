import { useState } from "react"
import Card from "./Cards"
import "./Grid.css"
import isWinner from "./assets/checkWinner";

function Grid({ noOfCards }){
    const [board, setBoard] = useState(Array(noOfCards).fill(""));
    const [turn, setTurn] = useState(true);
    const [winner, setWinner] = useState(null);
    const [box, setBox] = useState(Array(3).fill(null));
    const [countX, setCountX] = useState(0);
    const [countO, setCountO] = useState(0);

    function play(index) {
        if(turn == true){
            board[index] = "O"
        }
        else if(turn == false){
            board[index] = "X"
        }
        const win = isWinner(board, turn ? "O" : "X");
        if(win) {
            if(win[4]=="X"){
                setCountX(countX+1)
            }
            else if(win[4]=="O"){
                setCountO(countO+1)
            }
            setBox([win[0], win[1], win[2]]);
            setWinner(win[3]);
        }
        setBoard([...board]);
        setTurn(!turn);
    }

    function reset() {
        setTurn(turn);
        setWinner(null);
        setBox([]);
        setBoard(Array(noOfCards).fill(""));
    }

    return(
        <>
        <div className="game">
            <div className="player">
                Player X: {countX}
            </div>
    
                <div className="grid-wrapper">
                    {
                        winner && (
                            <span className="winner">{winner}</span>
                        )
                    }
                    <span className="turn">Current Turn: {(turn) ? "O" : "X"}</span>
                
                    <div className="grid">
                        {board.map((i, idx) => <Card box={box} key={idx} endGame={winner} player={i} onPlay={play} index={idx}/>)}
                    </div>
                
                    <button className="reset" onClick={reset}> Reset Game </button>
                </div>

            <div className="player">
                Player O: {countO}
            </div>
            </div>     
        </>
    )

}

export default Grid