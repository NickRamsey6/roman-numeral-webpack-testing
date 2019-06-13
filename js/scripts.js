//Business Logic section
//Declares arrays to compare and replace user number with.
var vals = [1000, 900, 500, 400, 100, 90, 50, 40, 10, 9, 5, 4, 1];
var symbols = ['M', 'CM', 'D', 'CD', 'C', 'XC','L', 'XL', 'X', 'IX', 'V', 'IV', 'I']

//Function that converts the input number to roman numerals by subtracting in a loop, according to it's location in the index.
function convertRomans(num){
  if(num > 3999 || num < 0) return "not a valid number to be converted";
	var result = [];
  for(let i = 0; i < vals.length; ++i){
    if(num-vals[i] >= 0){
      num -= vals[i]
      result.push(symbols[i])
    }
    if(num >= vals[i]){
      --i;
    }
  }
  return result.join("");
}

//User Interface Logic Section
$(document).ready(function() {
  $("form#roman").submit(function(event) {
    event.preventDefault();
    var input = $("#number").val()
    var result = convertRomans(input);
    $("#result").text("Your number is " + result + " in Roman Numeral.");
  });
});
