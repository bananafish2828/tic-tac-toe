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