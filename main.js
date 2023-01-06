function compose(s1, s2) {
   s1 = s1.split`\n`, s2 = s2.split`\n`, str = ''
    for(let i = 0, j = s2.length-1; i < s1.length, j >= 0; i++, j--){
        str += s1[i].slice(0,i+1) + s2[j].slice(0,j+1) + '\n'
    }
    return str.slice(0, str.length-1)
}
