const sentence = "Hello there from lighthouse labs";
let increasingTime = 0
for (const char of sentence)  {
  setTimeout(() => {
    process.stdout.write(char);
  }, increasingTime);
  increasingTime += 100;
}
return `${sentence} + \n`
