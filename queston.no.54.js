function myLocalScope() {
    // Only change code below this line
  
    console.log('inside myLocalScope', myVar);
    var myVar;
    
  }
  myLocalScope();
  
  // Run and check the console
  // myVar is not defined outside of myLocalScope
  console.log('outside myLocalScope', myVar);