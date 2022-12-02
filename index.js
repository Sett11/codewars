function titleCase(str) {
  return str.toLowerCase().split(' ')
  .map(el=>el.charAt(0).toUpperCase() + el.slice(1))
  .join(' ')
}

titleCase("I'm a little tea pot");
