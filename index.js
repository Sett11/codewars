function multipleSplit(s,d=[]){
 if(d.length===1&&d[0]===' ')return s.split` `.filter(e=>e)
 if(!d.length)return [s].filter(e=>e)
  s=[...s]
  for(let i=0;i<s.length;i++)if(d.includes(s[i]))s[i]=' '
  return s.join``.split` `.filter(e=>e)
}

