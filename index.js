// add solution here

function theBeatlesPlay (musiciansArr, instrumentsArr) {
  
  let stringsArr = [];
  
  for (i = 0; i < musiciansArr.length; i++) {
    stringsArr.push(musiciansArr[i] + " plays " + instrumentsArr[i]);
  }
 
  return stringsArr; 
}

function johnLennonFacts(factsArr) {
  
  let factsExclArr = [];
  
  for (i = 0; i < factsArr.length; i++) {
    factsExclArr.push(factsArr[i] + "!!!");
  }
  
  return factsExclArr;
}

