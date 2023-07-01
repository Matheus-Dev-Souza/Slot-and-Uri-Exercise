const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

rl.question('Enter the value of R: ', (R) => {
  const pi = 3.14159;
  const area = pi * R * R;

  console.log(`A=${area.toFixed(4)}`);
  rl.close();
});
