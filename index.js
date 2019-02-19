// add solution here

function theBeatlesPlay (musicians_arr, instruments_arr) {
  
  let strings_arr = [];
  
  for (i = 0; i < musicians_arr.length; i++) {
    strings_arr.push(musicians_arr[i] + " plays " + instruments_arr[i]);
  }
 
  return strings_arr; 
}

