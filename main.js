function counterEffect(h) {
 return h.split('').map(el => el = [Number(el)]).map(el => {
     let counter = 0
     if(el[0] !== counter){
         while(counter <= el[0]){
             el.push(counter)
             counter++
         }
     }
     return el
 }).map((el) => {
     if(el[0] === 0 && el.length === 1){
         return el
     } else{
         el.shift()
         return el
     }
 })
}
