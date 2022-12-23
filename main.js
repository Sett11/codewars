function nthChar(words){
 return words.map((el, i) => {
   el = el.charAt(i)
   return el
 }).join('')
}
