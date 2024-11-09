"use strict";
{
    const removeDuplicates = (numbers) => {
        let singleNumber = numbers.filter((number, index) => numbers.indexOf(number) === index);
        return singleNumber;
    };
    console.log(removeDuplicates([1, 1, 2, 2, 3, 3, 4, 4, 5, 5, 6, 6, 7, 7]));
}
