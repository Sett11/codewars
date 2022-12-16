function dbSort(a){
   let arr = []
    let arr2 = []
    for(let i = 0; i < a.length; i++){
        if(typeof a[i] === 'number'){
            arr.push(a[i])
        } else{
            arr2.push(a[i])
        }
    }
    arr.sort((a,b) => a - b)
    arr2.sort()
    return arr.concat(arr2)
}
