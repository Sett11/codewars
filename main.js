function solve(a, b) {
  console.log(a,b)
  const F=x=>{if(x<2)return false;if(x===2)return true;for(let i=2;i<Math.sqrt(x)+1;i++){if(x%i===0)return false}return true}
  let c=0
  for(let i=a;i<=b;i++){
    if(F(i)){
      let tmp=[...i+''],val=true
      while(val){
        tmp=tmp.map(e=>e**2).reduce((a,c)=>a+c)
        if([...tmp+''].length===1&&tmp===1){
          c+=1
          val=false
        }
        if([...tmp+''].length===1&&tmp!==1&&tmp!==7&&tmp!==8&&tmp!==9&&tmp!==5&&tmp!==6){
          val=false
        }
        else{
          tmp=[...tmp+'']
        }
      }
    }
  }return c
}
