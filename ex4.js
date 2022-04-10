let sentence =
  "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing 2 Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.";

function findAllIndex(sentence, word) {
  let result = [];
  let firstOfSentenceIndex = 0;
  while (true) {
    let index = sentence.indexOf(word);
    if (index !== -1) {
      result.push(index + firstOfSentenceIndex);
      let currentSentenceLength = sentence.length;
      sentence = sentence.substring(index + word.length);
      firstOfSentenceIndex += currentSentenceLength - sentence.length;
    } else {
      break;
    }
  }
  return result;
}
console.log(findAllIndex(sentence, "Lorem"));
