function capitalize(s,arr){
  let newStr = s.split('')
    for(let i = 0; i < arr.length; i++){
        if(arr[i] > newStr.length){
            let w = arr.indexOf(arr[i])
            arr.splice(w,1)
        } else{
            newStr[arr[i]] = newStr[arr[i]].toUpperCase()
        }
    }
    return newStr.join('')
}
