secondLargest=a=>{
  if(!a||!Array.isArray(a)||a.every((e,i,v)=>e===v[0]))return undefined
  let x=a.filter(e=>typeof e==='number'||typeof e==='string'&&+e==e).sort((a,b)=>b-a)[1]
  return typeof x!=='number'?+x:x
}

