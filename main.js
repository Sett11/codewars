function dashatize(num) {
    if(num < 0){
        num = Math.abs(num)
    }
    if(Number.isNaN(Math.abs(num))){
        return 'NaN'
    }
    const v = (''+num).split('').map(Number).map((el) => {
        if(el % 2 !== 0){
            el = '-' + el + '-'
            return el
        }else{
            return el
        }
    }).join('').split('')
    for(let i = 0; i < v.length; i++){
        if(v[i] === '-' && v[i + 1] === '-'){
            v[i] = '&'
        }
    }
    if(v[0] === '-'){
        v[0] = '&'
    }
    if(v[v.length - 1] === '-'){
        v[v.length - 1] = '&'
    }
    return v.filter(el => el !== '&').join('')
}
