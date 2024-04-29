"use strict";
$("#loading").css("z-index", 99999999999999);
$(function () {
  
    async function SearchNameFunc(s) {
      let response = await fetch(
        `https://www.themealdb.com/api/json/v1/1/search.php?s=${s}`
      );
      let finaldata = await response.json();
      display(finaldata);
    }
    async function SearchLetterFunc(f) {
      let response = await fetch(
        `https://www.themealdb.com/api/json/v1/1/search.php?f=${f}`
      );
      let finaldata = await response.json();
      display(finaldata);
    }
    function display(arr) {
      let box = "";
      for (let i = 0; i < arr.meals.length; i++) {
        box += `<div id='${arr.meals[i].idMeal}' class="lg:w-1/4 w-full p-1 group/parent cursor-pointer">
                        <div class='relative overflow-hidden'>
                          <img src="${arr.meals[i].strMealThumb}" class="w-full h-full block">
                          <div class= 'absolute top-0 left-0 bottom-0 right-0 bg-white/50 flex justify-center items-center translate-y-full group-hover/parent:translate-y-0 transition-all'>
                            <h3 class="font-black text-2xl">${arr.meals[i].strMeal}</h3>
                          </div>
                        </div>
                      </div>`;
      }
      $("#SearchOutput").html(box);
      $('#SearchOutput > div').click(function(e){
        let mealid=$(this).attr('id');
        localStorage.setItem("mealinfo",mealid);
        location.href="search-meal-info.html";
      });
    }
    $("#SearchName").on("input", function () {
      $(function () {
        SearchNameFunc($("#SearchName").val());
      });
    });
    $("#SearchLetter").on("input", function () {
      SearchNameFunc($("#SearchLetter").val());
    });
  
    $("#loading").fadeToggle(function(){$("#loading").remove();});
});