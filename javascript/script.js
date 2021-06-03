document.getElementById("myBtn").addEventListener("mouseover", displayDate);

function displayDate() {
  document.getElementById("demo").innerHTML = Date();

}
console.log($("#myBtn").text())
$("#Jtext").text("The is after manipultion");
$("#Jtext").css("background-color","yellow");
// $("#Jtext").after("<button>CLick me</button>");
// $("#Jtext").before("<button>CLick me</button>");
// // $("#Jtext").after("<button>CLick me</button>");
// $("#Jtext").apend("<button>CLick me</button>");
// $("#Jtext").prepend("<button>CLick me</button>");

//Event Listener
$("#h2").mouseenter(function(){
    $("#h2").css("background-color","red");
})
$("#h2").mouseleave(function(){
    $("#h2").css("background-color","yellow");
})
$("p").mouseover(function(){
    $("h2").css("background-color", "yellow");
  });
n