function sequentialSizes(val) {
    let answer = "";
      // Only change code below this line
      switch (val) {
        case 1:
        case 2:
        case 3:
          answer = "High";
          break;
        case 4:
        case 5:
        case 6:
          answer = "Mid";
          break;
        case 7:
        case 8:
        case 9:
          answer = "Low";
  }
    return answer;
  }
  
  sequentialSizes(1);