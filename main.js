function warnTheSheep(queue) {
    let indexWolf = queue.indexOf('wolf')
    return indexWolf===queue.length-1?"Pls go away and stop eating my sheep":`Oi! Sheep number ${(queue.length-1) - indexWolf}! You are about to be eaten by a wolf!`
 }
  console.log(warnTheSheep(["sheep", "wolf", "sheep", "sheep", "sheep", "sheep", "sheep"]))