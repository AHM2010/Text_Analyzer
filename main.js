const textArea = document.getElementById("input-text");
const AnalyzeInput = document.getElementById("analyzation-input");
const characterCount = document.getElementById("character-count");
const wordCount = document.getElementById("word-count");
const sentenceCount = document.getElementById("sentence-count");
const mostFrequentWord = document.getElementById("most-frequent-word");
const checkMessage = document.getElementById("check-message");
const replaceButton = document.getElementById("replace-button");
const searchLabel = document.getElementById("search-label");
const searchInput = document.getElementById("search-input");
const replaceLabel = document.getElementById("replace-label");
const replaceInput = document.getElementById("replace-input");
const convertUpperCase = document.getElementById("UpperCase");
const convertLowerCase = document.getElementById("LowerCase");

AnalyzeInput.addEventListener("click", () => {
  // Counting the characters in the text
  let countCharacters = textArea.value.length;
  characterCount.textContent = "Number of Characters: " + countCharacters;

  // Counting the words in the text
  let text = textArea.value;
  let words = text.split(" ");
  let countWords = words.length;
  wordCount.textContent = "Number of Words: " + countWords;

  // Counting the sentences in the text
  let sentences = text.split(". ");
  let countSentences = sentences.length;
  sentenceCount.textContent = "Number of Sentences: " + countSentences;

  // Check if the user entered some spaces or the user didn't enter a text
  if (text.trim() === "") {
    checkMessage.style.display = "block";
    wordCount.textContent = "Number of Words: 0";
    sentenceCount.textContent = "Number of Sentences: 0";
    return false;
  } else {
    return true;
  }
});

function getMostFrequentWord() {
  // Extract all the words from the text
  let words = textArea.value.split(/\W+/);

  const wordCounts = {};
  const originalWords = {};

  // Iterate through the words and count their occurrences
  words.forEach((word) => {
    const lowerCaseWord = word.toLowerCase();
    wordCounts[lowerCaseWord] = (wordCounts[lowerCaseWord] || 0) + 1;

    if (!originalWords[lowerCaseWord]) {
      originalWords[lowerCaseWord] = word;
    }
  });

  // Find the word with the highest frequency
  let getMostFrequentWord = "";
  let maxCount = 0;

  for (const word in wordCounts) {
    if (wordCounts[word] > maxCount) {
      maxCount = wordCounts[word];
      getMostFrequentWord = originalWords[word];
    }
  }

  mostFrequentWord.textContent = `Most Frequent Word: ${getMostFrequentWord}`;
}

replaceButton.addEventListener("click", () => {
  // display the search and replace inputs
  searchLabel.style.display = "block";
  searchInput.style.display = "block";
  replaceLabel.style.display = "block";
  replaceInput.style.display = "block";

  // Getting the textarea's value, search for the word or phrase and replace it
  let text = textArea.value;
  let searchValue = searchInput.value;
  let replaceValue = replaceInput.value;
  let replaceText = text.replace(searchValue, replaceValue);
  textArea.value = replaceText;
});

// Convert the text to uppercase
convertUpperCase.addEventListener("click", () => {
  let text = textArea.value;
  let upperCaseText = text.toUpperCase();
  textArea.value = upperCaseText;
});

// Convert the text to lowercase
convertLowerCase.addEventListener("click", () => {
  let text = textArea.value;
  let lowerCaseText = text.toLowerCase();
  textArea.value = lowerCaseText;
});
