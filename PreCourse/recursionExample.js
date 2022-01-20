function getLength(str, n, len) {
  if (str[n] === undefined) {
      return len;
  }
  return (getLength(str, n + 1, len + 1));
}
​
getLength('fast', 0, 0);