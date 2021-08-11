function divide(tbspInput, cup) {
  return tbspInput / cup; 
}

function divide2(literInput, gallon) {
  return literInput / gallon;
}

$(document).ready(function() {
  $("form#toCup").submit(function(event) {
    event.preventDefault();
    const tbspInput = parseFloat($("input#tablespoon1").val());
    const cup = (16);
    const result = divide(tbspInput, cup);
    $("#output").text(result);
  })
})

$(document).ready(function() {
  $("form#toGallon").submit(function(event) {
    event.preventDefault();
    const literInput = parseFloat($("input#liter1").val());
    const gallon = (3.785);
    const result = divide(literInput, gallon);
    $("#output2").text(result);
  })
})