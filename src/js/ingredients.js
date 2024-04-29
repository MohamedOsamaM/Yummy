"use strict";
$("#loading").css("z-index", 99999999999999);
$(function () {
  
    $("#loading").remove();
    async function getData() {
      let response = await fetch(
        `https://www.themealdb.com/api/json/v1/1/list.php?i=list`
      );
      let finaldata = await response.json();
      display(finaldata.meals);
    }
    function display(arr) {
      let box = "";
      for (let i = 1; i <25; i++) {
        box += `<div id='${arr[i].strIngredient}' class="lg:w-1/4 w-full p-1 group/parent cursor-pointer text-white">
                      <div class='relative overflow-hidden text-center p-1'>
                      <i class="fa-solid fa-drumstick-bite fa-4x"></i>
                      <h3 class="font-black text-2xl">${arr[i].strIngredient}</h3>
                      <p class='line-clamp-3'>${arr[i].strDescription}</p>
                      </div>
                    </div>`;
      }
      $("#ingredients-data").html(box);
      $("#ingredients-data > div").click(function (e) {
        let mealid = $(this).attr("id");
        localStorage.setItem("areainfo", mealid);
        location.href = "ingre-info.html";
      });
    }
    
    getData();
    $("#loading").fadeToggle(function(){$("#loading").remove();});
});
