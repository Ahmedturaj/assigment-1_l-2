{
  const countWordOccurrences = (sentence: string, word: string): number => {
    const lowercaseSentence = sentence.toLowerCase();
    const lowercaseWord = word.toLowerCase();
    const words = lowercaseSentence.split(" ");
    const occurrences = words.filter((wd) => wd === lowercaseWord).length;
    return occurrences;
  };
  console.log(countWordOccurrences("I love typescript", "typescript"));
}
