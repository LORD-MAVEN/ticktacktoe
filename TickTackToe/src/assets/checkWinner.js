function isWinner(board, symbol) {

    if(board[0]==board[1] && board[1]==board[2] && board[2]==symbol) return [0,1,2,symbol+" WINS!",symbol];
    if(board[3]==board[4] && board[4]==board[5] && board[5]==symbol) return [3,4,5,symbol+" WINS!",symbol];
    if(board[6]==board[7] && board[7]==board[8] && board[8]==symbol) return [6,7,8,symbol+" WINS!",symbol];

    if(board[0]==board[3] && board[3]==board[6] && board[6]==symbol) return [0,3,6,symbol+" WINS!",symbol];
    if(board[1]==board[4] && board[4]==board[7] && board[7]==symbol) return [1,4,7,symbol+" WINS!",symbol];
    if(board[2]==board[5] && board[5]==board[8] && board[8]==symbol) return [2,5,8,symbol+" WINS!",symbol];

    if(board[0]==board[4] && board[4]==board[8] && board[4]==symbol) return [0,4,8,symbol+" WINS!",symbol];
    if(board[2]==board[4] && board[4]==board[6] && board[4]==symbol) return [2,4,6,symbol+" WINS!",symbol];

    if(board[0]!="" && board[1]!="" && board[2]!="" && 
    board[3]!="" && board[4]!="" && board[5]!="" && 
    board[6]!="" && board[7]!="" && board[8]!="") return [-1,-1,-1,"MATCH TIED!!!"];

    return "";
}

export default isWinner;
