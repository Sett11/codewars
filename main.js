function vowelIndices(word){
    let arr = []
    word.split('').map((el,i)=>{
        el==='a' || el==='e' || el==='i' || el==='o' || el==='u' || el==='y' ||
        el==='A' || el==='E' || el==='I' || el==='O' || el==='U' || el==='Y' ? el[arr.push(i+1)]:null
    })
    return arr
  }
  console.log(vowelIndices("super"))