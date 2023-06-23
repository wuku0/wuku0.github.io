function buttonClick(number) {
    var result = document.getElementById("result");
    result.value += number;
  }
  
  function clearResult() {
    var result = document.getElementById("result");
    result.value = "";
  }
  
  function calculateResult() {
    var result = document.getElementById("result");
    var expression = result.value;
    var answer = eval(expression);
    result.value = answer;
  }
  