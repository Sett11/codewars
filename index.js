function chunkArrayInGroups(arr, size) {
  let newArr = []
  let count = 0
  while(count<arr.length){
    newArr.push(arr.slice(count, count += size))
  }
  return newArr
}

chunkArrayInGroups(["a", "b", "c", "d"], 2);
