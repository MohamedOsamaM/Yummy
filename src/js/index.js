"use strict";
$("#loading").css("z-index", 99999999999999);
$(function () {
    async function getData() {
        let response = await fetch("https://www.themealdb.com/api/json/v1/1/search.php?s");
        let finaldata = await response.json();
        display(finaldata.meals);
    }
    getData();
    function display(arr) {
      let box = "";
      for (let i = 0; i < arr.length; i++) {
        box += `<div id='${arr[i].idMeal}' class="lg:w-1/4 w-full p-1 group/parent cursor-pointer">
                      <div class='relative overflow-hidden'>
                        <img src="${arr[i].strMealThumb}" class="w-full h-full block">
                        <div class= 'absolute top-0 left-0 bottom-0 right-0 bg-white/50 flex justify-center items-center translate-y-full group-hover/parent:translate-y-0 transition-all'>
                          <h3 class="font-black text-2xl">${arr[i].strMeal}</h3>
                        </div>
                      </div>
                    </div>`;
      }
      $("#randomData").html(box);
      $("#randomData > div").click(function (e) {
        let mealid = $(this).attr("id");
        localStorage.setItem("mealinfo", mealid);
        location.href = "src/search-meal-info.html";
      });
    }
    $("#loading").fadeToggle(function(){$("#loading").remove();});
    
});
