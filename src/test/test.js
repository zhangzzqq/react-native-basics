function sum(...theArgs) {
    return theArgs.reduce((a, c) => {
      return a + c;
    });
  }
  
  console.log(sum(1, 2, 3));
  // expected output: 6
  
  console.log(sum(1, 2, 3, 4));
  // expected output: 10
  