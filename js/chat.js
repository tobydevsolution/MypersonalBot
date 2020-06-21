var questions = [
  'whats your name ?',
  'where are you from',
  'what\s your age ',
  'what profile are you working on?',
  'It was nice talking to you :)'

];
    var num = 0;
    var output = document.querySelector("#result");
    output.innerHTML = questions[0];
    var inputBox = document.querySelector("#ans");

    function showResponse() {
      var input = inputBox.value;
      if(inputBox.value = "") {

      }else{
        if(num == 0) {
          output.innerHTML = `Hello ${input} nice meeting you`
          inputBox.value = "";
          inputBox.setAttribute("placeholder" , "wait for 2 secs")
          ++num;
          setTimeout(changeQuestion, 2000);
        } else if(num == 1) {
          output.innerHTML = ` ${input} is an awesome place`
          inputBox.value = "";
          inputBox.setAttribute("placeholder" , "wait for 2 secs")
          ++num;
          setTimeout(changeQuestion, 2000);

        } else if (num == 2) {
          output.innerHTML = `It means you are born in  ${2020 - input}`
          inputBox.value = "";
          inputBox.setAttribute("placeholder" , "wait for 2 secs")
          ++num;
          setTimeout(changeQuestion, 2000);
        } else if (num == 3) {
          output.innerHTML = `${input} is nice language`
          inputBox.value = "";
          inputBox.setAttribute("placeholder" , "wait for 2 secs")
          ++num;
          setTimeout(changeQuestion, 2000);
        }
      }
    }
    function changeQuestion() {
      output.innerHTML = questions[num];
      if(num == 4) {
        inputBox.style.display == "none";
      }
    }
    alert(true);
    

    $(document).on('keypress', function(e) {
      if(e.which == 13) {
          showResponse();
      }
    })