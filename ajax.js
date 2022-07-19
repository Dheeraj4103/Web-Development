function printOne(){
    console.log(1);
  }
  
  function printTwo(){
    console.log(2);
  }
  
  function printThree(){
    console.log(3);
  }
  
  // call printOne after delay of 1000ms
  setTimeout(printOne, 1000);
  // call printTwo after delay of 1 ms
  setTimeout(printTwo, 2000);
  // call printThree normally
  printThree();