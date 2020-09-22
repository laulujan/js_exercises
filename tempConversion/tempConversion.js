const ftoc = function(temp) {
  const celcious =((temp - 32) * 5/9).toFixed(1)
  return parseFloat(celcious); 

}

const ctof = function(temp) {
  const fahrenheit = ((temp * 9 / 5) + 32).toFixed(1)
  return parseFloat(fahrenheit);
}

module.exports = {
  ftoc,
  ctof
}
