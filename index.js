function mutation(arr) {
  let result = null
  let newArr = [arr[0].toLowerCase(), arr[1].toLowerCase()]
  let ar1 = newArr[0].split('')
  let ar2 = newArr[1].split('')
  for(let i = 0; i<ar2.length; i++){
    if(ar1.indexOf(ar2[i])>=0){
      result = true
    }
    else if(ar1.indexOf(ar2[i])<0){
      result = false
      break
    }
  }
  return result
}
