function reverse(str) 
{
  return str.split('').reduce((rev, char) => char + rev, '');   
}

console.log(reverse("talib"));
console.log(reverse("love"));
console.log(reverse("JavaScript"));