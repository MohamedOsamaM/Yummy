"use strict";
$("#loading").css("z-index", 99999999999999);
$(function () {
  
    async function getData() {
      let category = localStorage.getItem("categoryinfo");
      let response = await fetch(
        `https://www.themealdb.com/api/json/v1/1/filter.php?c=${category}`
      );
      let finaldata = await response.json();
      display(finaldata.meals);
    }
    function display(arr) {
      let box = "";
      for (let i = 0; i < arr.length; i++) {
        box += `<div id='${arr[i].idMeal}' class="lg:w-1/4 w-full p-1 group/parent cursor-pointer">
                      <div class='relative overflow-hidden'>
                        <img src="${arr[i].strMealThumb}" class="w-full h-full block">
                        <div class= 'p-3 text-black text-center overflow-hidden absolute top-0 left-0 bottom-0 right-0 bg-white/50 flex flex-col justify-center items-center translate-y-full group-hover/parent:translate-y-0 transition-all'>
                          <h3 class="font-black text-2xl">${arr[i].strMeal}</h3>
                        </div>
                      </div>
                    </div>`;
      }
      $("#categoryData-info").html(box);
      $("#categoryData-info > div").click(function (e) {
        let mealid = $(this).attr("id");
        localStorage.setItem("mealinfo", mealid);
        location.href = "search-meal-info.html";
      });
    }
    getData();
    $("#loading").fadeToggle(function(){$("#loading").remove();});
});
