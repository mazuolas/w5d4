const readline = require('readline');
const reader = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
  terminal: false
});

function addNumbers(sum, numsLeft, completionCallback){
  if (numsLeft > 0) {
    reader.question("Enter a number:", function(number){
      let num = parseInt(number);
      sum+=num;
      numsLeft -= 1;
      console.log(sum);
      addNumbers(sum, numsLeft, completionCallback);
    } );
  } else {
    completionCallback(sum);
  }
}

addNumbers(0, 3, sum => console.log(`Total Sum: ${sum}`));
