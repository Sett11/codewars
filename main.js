function calculateTip(amount, rating) {
    let r = rating.toUpperCase()
    if(r==="TERRIBLE"){
        return 0
    }
    if(r==="POOR"){
        return Math.ceil((amount/100)*5)
    }
    if(r==="GOOD"){
        return Math.ceil((amount/100)*10)
    }
    if(r==="GREAT"){
        return Math.ceil((amount/100)*15)
    }
    if(r==="EXCELLENT"){
        return Math.ceil((amount/100)*20)
    }
        return "Rating not recognised"
  }