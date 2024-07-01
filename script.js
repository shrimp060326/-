const box1 = document.getElementById('box1');
const box2 = document.getElementById('box2');
const box3 = document.getElementById('box3');
const box4 = document.getElementById('box4');
const box5 = document.getElementById('box5');
const box6 = document.getElementById('box6');
const box7 = document.getElementById('box7');
const box8 = document.getElementById('box8');
const box9 = document.getElementById('box9');
const button = document.getElementById('button');

var answer = []

function click_box(id) {
    if(answer.includes(id)) {
        document.getElementById(id).style.border = "0px solid #568EFA";
        answer.splice(answer.indexOf(id),1);
    }
    else {
        document.getElementById(id).style.border = "4px solid #568EFA";
        answer.push(id);
    }
    console.log(answer);

}

function change_page()  {
    location.href = "game_stage_1.html"
  }

  function check_answer()  {
    if(answer.includes("box1") && answer.includes("box2") && answer.includes("box3") && answer.includes("box4") && !answer.includes("box5") && !answer.includes("box6") && !answer.includes("box7") && !answer.includes("box8") && !answer.includes("box9")) {
        location.href = "game_stage_2.html"
    }
    else {
        setTimeout(function() {
            document.getElementById('top_blue_box').style.backgroundColor = "#568EFA";
            document.getElementById('button').style.backgroundColor = "#568EFA";
          }, 1000);
        document.getElementById('top_blue_box').style.backgroundColor = "#F17474";
        document.getElementById('button').style.backgroundColor = "#F17474";
        box1.style.border = "0px solid #F17474"
        box2.style.border = "0px solid #F17474"
        box3.style.border = "0px solid #F17474"
        box4.style.border = "0px solid #F17474"
        box5.style.border = "0px solid #F17474"
        box6.style.border = "0px solid #F17474"
        box7.style.border = "0px solid #F17474"
        box8.style.border = "0px solid #F17474"
        box9.style.border = "0px solid #F17474"
        answer = []
    }
  }



  function complete_input()  {
    var input_value = document.getElementById('input_form').value;
    if(input_value == "종촌고 화이팅") {
        location.href = "presentation1.html"
    }
    else {
        setTimeout(function() {
            document.getElementById('first_box2').style.backgroundColor = "#D9D9D9";
            document.getElementById('first_box2').style.border = "0.6944vw #F2F2F2 solid";
            document.getElementById('text2').textContent = '위의 글자를 입력해주세요 :';
            document.getElementById('text2').style.color = 'black';    
          }, 1000);
        document.getElementById('first_box2').style.backgroundColor = "#ECE0E0";
        document.getElementById('first_box2').style.border = "0.6944vw #F17474 solid";
        document.getElementById('text2').textContent = '틀렸습니다!';
        document.getElementById('text2').style.color = '#F17474';
    }
  }

  function getCheckboxValue() {
    setTimeout(function() {
        document.getElementById('check_box').remove();
      }, 500);
      setTimeout(function() {
        document.getElementById('loading').style.border = "10px solid #ABABAB"; 
        document.getElementById('loading').style.borderTop = "10px solid transparent";
        document.getElementById('loading').style.width = "4.9444vw";
        document.getElementById('loading').style.height = "4.9444vw ";
      }, 500);
      setTimeout(function() {
        location.href = "CAPTCHA_game_start.html";
      }, 3500);
  }

