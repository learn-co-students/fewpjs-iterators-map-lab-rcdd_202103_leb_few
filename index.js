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

function titleCased() {
  return tutorials.map(function (row) {
    row= row.split(' ');
    for (var i = 0; i < row.length; i++) {
      row[i] = row[i].charAt(0).toUpperCase() + row[i].slice(1);
    }
    return row.join(' ');
  });
}
