function frankenSplice(arr1, arr2, n) {
  let res = arr2.slice()
  for(let i = 0; i < arr1.length; i++){
    res.splice(n+i, 0, arr1[i])
  }
  return res
}

frankenSplice([1, 2, 3], [4, 5, 6], 1);
