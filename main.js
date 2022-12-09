function multiples(m, n){
  let arr = []
    let newN = n
  for(let i = 0; i < m; i++){
    arr.push(n)
    n+=newN
  }
    return arr
}
