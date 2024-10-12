
function greet(name) {
    return "Hello, " + name;
  }
  
  console.log(greet("Alice")); 
  

  function addNumbers(num1, num2) {
    return num1 + num2;
  }
  
  let result = addNumbers(5, 3);
  console.log(result);
  

  let x = 10;
  
  function changeValue() {
    let x = 20; 
    console.log(x);
  }
  
  changeValue();
  console.log(x);
  

  function outerFunction() {
    let count = 0;
    return function () {
      count = count + 1;
      return count;
    };
  }
  
  let myCounter = outerFunction();
  console.log(myCounter());
  console.log(myCounter());
  console.log(myCounter());
  