"use strict";
$("#loading").css("z-index", 99999999999999);
$(function () {
  
    async function mealinfo() {
      let mealid = localStorage.getItem("mealinfo");
      let response = await fetch(
        `https://themealdb.com/api/json/v1/1/lookup.php?i=${mealid}`
      );
      let data = await response.json();
      display(data);
    }
    function display(data) {
      $("#mealName").text(data.meals[0].strMeal);
      $("#mealPic").attr('src',data.meals[0].strMealThumb);
      $("#mealInst").text(data.meals[0].strInstructions);
      $("#mealArea").text(data.meals[0].strArea);
      $("#mealCate").text(data.meals[0].strCategory);
      data.meals[0].strTags != null?$("#mealTag").text(data.meals[0].strTags):$("#mealTag").text("No Tags");
      $("#mealSrc").attr("href", `${data.meals[0].strSource}`);
      $("#mealYoutube").attr("href", `${data.meals[0].strYoutube}`);
      let box = "";
      for (let i = 1; ; i++) {
        if (data.meals[0][`strIngredient${i}`] == "") {
          break;
        } else {
          box += `<span class='w-fit p-2 me-1 rounded-full bg-lime-400 text-lime-800'>${data.meals[0][`strMeasure${i}`]}${data.meals[0][`strIngredient${i}`]}</span>`;
        }
      }
      $("#mealRecip").html(box);
    }
    mealinfo();
    $("#loading").fadeToggle(1000,function(){$("#loading").remove();});
});
