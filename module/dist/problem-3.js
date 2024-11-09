"use strict";
{
    const countWordOccurrences = (sentence, word) => {
        const lowercaseSentence = sentence.toLowerCase();
        const lowercaseWord = word.toLowerCase();
        const words = lowercaseSentence.split(" ");
        const occurrences = words.filter((wd) => wd === lowercaseWord).length;
        return occurrences;
    };
    const sentence = "Programming is on rock";
    const word = "rock";
    console.log(countWordOccurrences(sentence, word));
}
