// slider
$(".singer").click(function () {
  $(".desc").not($(this).next()).slideUp(500);
  $(this).next().slideToggle(500);
});
//date counter
window.onload = function () {
  countDownToTime("1 may 2024 9:56:00");
};

function countDownToTime(countTo) {
  let futureDate = new Date(countTo);
  futureDate = futureDate.getTime() / 1000;

  let now = new Date();
  now = now.getTime() / 1000;

  timeDifference = futureDate - now;

  let days = Math.floor(timeDifference / (24 * 60 * 60));
  let hours = Math.floor((timeDifference - days * (24 * 60 * 60)) / 3600);
  let mins = Math.floor(
    (timeDifference - days * (24 * 60 * 60) - hours * 3600) / 60
  );
  let secs = Math.floor(
    timeDifference - days * (24 * 60 * 60) - hours * 3600 - mins * 60
  );

  $(".days").html(`${days} Day`);
  $(".hours").html(`${hours} Hour`);
  $(".minutes").html(`${mins} Minute`);
  $(".seconds").html(`${secs} Second`);

  setInterval(function () {
    countDownToTime(countTo);
  }, 1000);
}
//Character counter
var maxLength = 100;
$("textarea").keyup(function () {
  var length = $(this).val().length;
  var AmountLeft = maxLength - length;
  if (AmountLeft <= 0) {
    $("#character").text("your available character finished");
  } else {
    $("#character").text(AmountLeft);
  }
});
