function bouncer(arr) {
  return arr.filter(el=>!!el!==false)
}

bouncer([7, "ate", "", false, 9]);
