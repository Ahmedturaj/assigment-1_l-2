{
  const removeDuplicates = (numbers: number[]): number[] => {
    let singleNumber = numbers.filter(
      (number, index) => numbers.indexOf(number) === index
    );
    return singleNumber;
  };
  console.log(removeDuplicates([1, 2, 2, 3, 4, 4, 5]));
}
