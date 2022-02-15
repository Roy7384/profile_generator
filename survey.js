const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

let d = [];
rl.question("What's your name? Nicknames are also acceptable :", (answer) => {
  d.push(answer);
  rl.question("What's an activity you like doing? :", (answer) => {
    d.push(answer);
    rl.question("What do you listen to while doing that? :", (answer) => {
      d.push(answer);
      rl.question("Which meal is your favourite (eg: dinner, brunch, etc.) :", (answer) => {
        d.push(answer);
        rl.question("What's your favourite thing to eat for that meal? :", (answer) => {
          d.push(answer);
          rl.question("Which sport is your absolute favourite? :", (answer) => {
            d.push(answer);
            console.log(`${d[0]} loves listening to ${d[2]} while ${d[1]}, devouring ${d[4]} for ${d[3]}, prefers ${d[5]} over any other sport.`);
            rl.close();
          });
        });
      });
    });
  });
});




