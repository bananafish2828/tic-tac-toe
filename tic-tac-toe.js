let board = {
  1: ' ',
  2: ' ',
  3: ' ',
  4: ' ',
  5: ' ',
  6: ' ',
  7: ' ',
  8: ' ',
  9: ' ',

  count: 0,

  showBoard: () => {
    console.log(' ' + board[1] + ' | ' + board[2] + ' | ' + board[3]);
    console.log('-----------');
    console.log(' ' + board[4] + ' | ' + board[5] + ' | ' + board[6]);
    console.log('-----------');
    console.log(' ' + board[7] + ' | ' + board[8] + ' | ' + board[9]);
  },

  markBoard: (position) => {
    if (!(position >= 1 && position <= 9)) {
      console.log('please enter 1 - 9');
      board.showBoard();
      return;
    }
    if (board[position] !== ' ') {
      console.log('position ' + position + ' already taken, please try again');
      board.showBoard();
      return;
    }
    if (board.count % 2 === 0) {
      board[position] = 'X';
    } else {
      board[position] = 'O';
    }
    board.count ++;
  },

  checkBoard: (position) => {
    let marker = board[position]
    let win = false;
    for (let idx = 0; idx < 3; idx ++) {
      if (board[idx * 3 + 1] === marker && board[idx * 3 + 2] === marker && board[idx * 3 + 3] === marker) {
        win = true;
      }
      if (board[1 + idx] === marker && board[4 + idx] === marker && board[7 + idx] === marker) {
        win = true;
      }
    }
    if ((board[1] === marker && board[5] === marker && board[9] === marker) ||
      (board[3] === marker && board[5] === marker && board[7] === marker)) {
        win = true;
      }
    if (win) console.log(marker + ' wins');
    return win;  
  }




}

board.showBoard();

board.markBoard(5);
board.showBoard();
board.markBoard(7);
board.markBoard(8);
board.showBoard();
board.markBoard(0);
board.markBoard(11);
board.markBoard('a');
board.markBoard(7);
board.markBoard(6);
board.showBoard();
board.checkBoard(6);
board.markBoard(2);
board.showBoard();
board.checkBoard(2);
