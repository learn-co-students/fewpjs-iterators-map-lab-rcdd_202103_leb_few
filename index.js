const tutorials = [
  'what does the this keyword mean?',
  'What is the Contutorialuctor OO pattern?',
  'implementing Blockchain Web API',
  'The Test Driven Development Workflow',
  'What is NaN and how Can we Check for it',
  'What is the difference between stopPropagation and preventDefault?',
  'Immutable State and Pure Functions',
  'what is the difference between == and ===?',
  'what is the difference between event capturing and bubbling?',
  'what is JSONP?'
];
//
// const titleCased = () => {
//   return tutorials
// }
const titleCased = () => {
  let result = tutorials.map(function(title){
    let modified = title.split(" ").map(function(word){
      let letter = word.split("");
      letter[0] = letter[0].toUpperCase();
      return letter.join("");
    })
    return modified.join(" ");
  })
  return result;
}
