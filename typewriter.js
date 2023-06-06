const sentence = "hello there from lighthouse labs";
let time = 500;
let sSentence = sentence.split('');

const typewrite = () => {
 
  for (let char of sSentence) {

    setTimeout(() => {
      
    //console.log(char);
    process.stdout.write(char);
  }, time)
  time += 100;
}

  setTimeout(() => {
    process.stdout.write('\n');
  },time)

}

typewrite(sentence);