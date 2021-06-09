// Have the function LongestWord(sen) take the sen
// parameter being passed and return the largest
// word in the string. If there are two or more
// words that are the same length, return the first
// word from the string with that length. Ignore
// punctuation and assume sen will not be empty.

var regex = /[!"#$%&'()*+,-./:;<=>?@[\]^_`{|}~]/g;

function removePunctuation(str) {
  console.log(str.replace(regex, ""));
  return str.replace(regex, "");
}

function LongestWord(sen) {
  words = sen.split(" ");
  //   console.log(words);
  let currentLongestWord = removePunctuation(words[0]);
  //   console.log(currentLongestWord);

  for (let i = 1; i < words.length; i++) {
    wordWithoutPunctuation = removePunctuation(words[i]);
    if (currentLongestWord.length < wordWithoutPunctuation.length) {
      currentLongestWord = wordWithoutPunctuation;
    }
    console.log("currentLongestWord", currentLongestWord);
  }

  return currentLongestWord;
}

sen = "I love dogs";
console.log(LongestWord(sen));
