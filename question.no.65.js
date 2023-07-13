// Setup
function testStrictNotEqual(val) {
  if (val!==20) { // Change this line
    return "Not Equal";
  }
  return "Equal";
}

testStrictNotEqual(20);