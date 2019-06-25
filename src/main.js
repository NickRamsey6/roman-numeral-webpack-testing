import {convertRomans} from './scripts.js';
import './styles.css';

//User Interface Logic Section
$(document).ready(function() {
  $("form#roman").submit(function(event) {
    event.preventDefault();
    var input = $("#number").val();
    var result = convertRomans(input);
    $("#result").text("Your number is " + result + " in Roman Numeral.");
  });
});
