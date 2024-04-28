"use strict";
$("#loading").css("z-index", 99999999999999);
$(function () {
  $("#loading").fadeToggle(1000, function () {
    $("#loading").remove();
    $("input").css("height", "50px");
    $("p").css("text-align", "center");
    document.querySelector('button').disabled=true;
    $('button').css('filter','grayscale(100%)');
  
    function regexes(ele) {
      let regex = {
        namevalid: /^[a-z]{3,15}$/i,
        emailvalid: /[^@ \t\r\n]+@[^@ \t\r\n]+\.[^@ \t\r\n]+/,
        phonevalid: /^[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4,6}$/,
        agevalid: /^[1-9][0-9]$/,
        passwordvalid:
          /^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$ %^&*-]).{8,}$/,
      };
      let regexmsg = {
        namevalid: "enter your name correct",
        emailvalid: "enter your email correct",
        phonevalid: "enter your phone number correct",
        agevalid: "your age should older than 9 years to submit",
        passwordvalid:
          "Minimum eight characters, at least one upper case English letter, one lower case English letter, one number and one special character",
      };
      if (regex[ele.id].test(ele.value) == false) {
        $(`#${ele.id} + p`).html(
          `<span class='text-red-600 text-lg'>${regexmsg[ele.id]}</span>`
        );
      } else if (regex[ele.id].test(ele.value) == true) {
        $(`#${ele.id} + p`).html(
          `<span class='text-green-600 text-2xl font-black'>Success</span>`
        );
      }
    }
    $(`input:not(input[id='repassword'])`).on("input", function (e) {
      regexes(e.target);
    });
    $(`#repassword`).on("input", function (e) {
      if (e.target.value != $(`#passwordvalid`).val()) {
        $(`#repassword + p`).html(
          `<span class='text-red-600 text-lg font-black'>this password must equal the password you just enter</span>`
        );
      } else {
        $(`#repassword + p`).html(
          `<span class='text-green-600 text-2xl font-black'>Success</span>`
        );
      }
    });
    $('input').on('keyup',function(){
        let count=0;
        for(let i=0 ; i<6;i++)
        {
            if($('p > span').eq(i).text()=='Success')
            {
                count++;
            }
            
        }
        if(count===6)
        {
            $('button').removeAttr('disabled');
            $('button').css('filter','grayscale(0)'); 
        }
        else
        {
            $('button').attr('disabled','disabled');
            $('button').css('filter','grayscale(100%)');
        }
    });
    $('button').click(function () { 
        $('button + span').text('Your are registered');
        $('button + span').fadeToggle(3000);
        let users = {
          username:$('#namevalid').val(),
          email:$('#emailvalid').val(),
          password:$('#passwordvalid').val(),
          age:$('#agevalid').val(),
          phone:$('#phonevalid').val(),
        }
        localStorage.setItem('userAccount',JSON.stringify(users));
    });
  });
});
