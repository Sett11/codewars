function lowercaseCount(str){
    if(!str) 0
     let newStr = str.match(/[a-z]/g)
     return !newStr?0:newStr.length
}
console.log(lowercaseCount(""))