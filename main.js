function prime(n) {
  const F=x=>{if(x<2)return false;if(x===2)return true;for(let i=2;i<Math.sqrt(x)+1;i++){if(x%i===0)return false}return true}
  let arr=[],c=2
  while(c<=n){if(F(c))arr.push(c);c++}
  return arr
}
