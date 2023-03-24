function cleanItUp(s){
  if(!s)return ''
  s=s.replace(/[^a-zA-Z]/g,'')
  const a=[]
  for(let i=0;i<s.length;i+=5)a.push(s.slice(i,i+5))
  return a.filter(e=>e.length===5).map(e=>e.charAt(0).toUpperCase()+e.slice(1).toLowerCase()).join` `
}
