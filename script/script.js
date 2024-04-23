'use strict';

const articleHeader = document.getElementById('article-header');
const reverseElement = document.getElementById('reverse-string');

const vowelsCountContainer = document.getElementById('vowels-count');

const headingText = articleHeader.innerText;

const reverseText = (str) => {
  const output = str.split('').reverse().join('');

  reverseElement.innerText = output;
};

const findVowels = (str) => {
  const output = { a: 0, e: 0, i: 0, o: 0, u: 0 };

  const strArr = str.toLowerCase().replace(' ', '').split('');

  for (let i = 0; i < strArr.length; i++) {
    if (
      str[i] === 'a' ||
      str[i] === 'e' ||
      str[i] === 'i' ||
      str[i] === 'o' ||
      str[i] === 'u'
    ) {
      output[str[i]] = output[str[i]] + 1;
    }
  }

  vowelsCountContainer.innerText = JSON.stringify(output);
};

console.log(reverseText(headingText));
console.log(findVowels(headingText));
