function tailSwap(arr) {
   const strLinc = arr.map(el => el.split(':'))
    const u = strLinc[0][1]
    const o = strLinc[1][1]
   strLinc[0][1] =   o
    strLinc[1][1] =  u
  return strLinc.map(el => el.join(':'))
}
