function sum() {
  const arr = [...arguments]
  return arr.reduce((acc, curr) => acc+curr,0)
}
