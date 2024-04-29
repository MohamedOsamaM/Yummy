let w = $("#sidebar").innerWidth();
let w1 =$('#sidebar > div').innerWidth();
$("#sidebar").css("left", -(w-w1));
$("#close").click(function () {
  $("#close").hide();
  $("#open").show();
  $("#sidebar").animate({ left: -(w-w1) }, 1000,function(){
  });
  
});
$("#open").click(function () {
  $("#sidebar").css("z-index", 99999999);
  $("#open").hide();
  $("#close").show();
  $("#sidebar").animate({ left: 0 }, 1000);
  $("li").css("top", "50%");
  $("li").eq(0).animate({ top: "0px" }, 1000);
  $("li").eq(1).animate({ top: "0px" }, 1500);
  $("li").eq(2).animate({ top: "0px" }, 2000);
  $("li").eq(3).animate({ top: "0px" }, 2500);
  $("li").eq(4).animate({ top: "0px" }, 3000);
});