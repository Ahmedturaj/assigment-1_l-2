{
  const sumArray = (number: number[]): number => {
    const sumNumber = number.reduce((acc, cur) => acc + cur, 0);
    return sumNumber;
  };
  console.log(sumArray([1, 2, 3, 4, 5]));
}
