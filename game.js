const readline = require('readline');
const reader = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
  terminal: false
});

class Game {
  constructor (){
    this.stacks = [[3,2,1], [], []];
  }
  promptMove() {
    console.log(this.stacks);
    reader.question("Pick a stack to move from:  ", start => {
      const fromTower = start;
    reader.question("Pick a stack to move to:  ", end => {
      const toTower = end;
    });
  });
  }
}

const a = new Game();
a.promptMove();
