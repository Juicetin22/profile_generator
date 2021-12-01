const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

let para = ""
rl.question('What is your name? ', (answer) => {
  para += `My name is ${answer} `;
  rl.question('What activities do you like doing? ', (answer) => {
    para += `and I enjoy ${answer} `;
    rl.question('What do you listen to while doing that? ', (answer) => {
      para += `while listening to ${answer}. `;
      rl.question('Which meal is your favourite (eg: breakfast)? ', (answer) => {
        para += `My favourite meal of the day is ${answer} `;
        rl.question('What\'s your favourite thing to eat for that meal? ', (answer) => {
          para += `and I love eating ${answer} for that meal! `;
          rl.question('Which sport is your absolute favourite? ', (answer) => {
            para += `I love watching ${answer}!!! `;
            rl.question('What is your superpower? In a few words, tell us what you are amazing at! ', (answer) => {
              para += `My superpower would be ${answer}!`;
              console.log(para);
            rl.close();
            });
          });
        });
      });
    });
  });
});
