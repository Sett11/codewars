function stringTransformer(str) {
  return str.split(' ').map((el) => {
    return [...el].map((el) => {
          if(el === el.toUpperCase()){
          el = el.toLowerCase()
          return el
      } else{
          el = el.toUpperCase()
          return el
      }
      }).join('')
  }).reverse().join(' ')
}
