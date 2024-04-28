"use strict";
$("#loading").css("z-index", 99999999999999);
$(function () {
  $("#loading").fadeToggle(1000, function () {
    $("#loading").remove();
    async function getData() {
      let response = await fetch(
        `https://www.themealdb.com/api/json/v1/1/list.php?a=list`
      );
      let finaldata = await response.json();
      display(finaldata.meals);
    }
    function display(arr) {
      let box = "";
      for (let i = 0; i < arr.length; i++) {
        box += `<div id='${arr[i].strArea}' class="lg:w-1/4 w-full p-1 group/parent cursor-pointer text-white">
                      <div class='relative overflow-hidden text-center p-1'>
                      <i class="fa-solid fa-house-laptop fa-4x"></i>
                      <h3 class="font-black text-2xl">${arr[i].strArea}</h3>
                      </div>
                    </div>`;
      }
      $("#area-info").html(box);
      $("#area-info > div").click(function (e) {
        let mealid = $(this).attr("id");
        localStorage.setItem("areainfo", mealid);
        location.href = "area-info.html";
      });
    }
    
    getData();
  });
});
