function arr2bin(arr){
return arr.every(el=>Number.isInteger(el))&&
  (arr.reduce((acc,curr)=>acc+curr,0)).toString(2)
}
