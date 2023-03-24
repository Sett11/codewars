function squareIt(n){
  n=[...n+'']
  if(Number.isInteger(Math.sqrt(n.length))){
     let a=[],c=Math.sqrt(n.length)
    for(let i=0;i<n.length;i+=c)a.push(n.slice(i,i+c).join``)
    return a.join`\n`
  }
	return 'Not a perfect square!';
}

