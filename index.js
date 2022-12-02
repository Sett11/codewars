function getIndexToIns(arr, num) {
   arr.push(num)
  let newArr = arr.sort((a,b)=>a-b)
  return newArr.indexOf(num)
}

getIndexToIns([40, 60], 50);
