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
  
  i = 0;
  while (i < factsArr.length) {
    factsExclArr.push(factsArr[i] + "!!!");
    i++;
  }
  
  return factsExclArr;
}

function iLoveTheBeatles(num) {
  
}