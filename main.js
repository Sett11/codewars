function solve(s){
    const arr = []
s.split('').map((el) => {
     if(el === 'a' || el === 'u' || el === 'i' || el === 'e' || el === 'o'){
         return el
     } else{
         el = 0
         return el
     }
 }).join('').split(/0/g).map((el) => arr.push(el.split('').length))
    const res = arr.sort((a,b) => b - a)
    return res[0]
}
