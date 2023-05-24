function getPow(num, degree) {
     if (num >= 1 && degree >= 1) {
    		return num ** degree;
  } 
  return num;
}
console.log(getPow(2, 3))