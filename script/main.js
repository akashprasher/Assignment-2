// for table
$("tr:even").css("background-color", "yellow");

$("#rmOdd").on("click", function () {
    $("tr:odd").addClass("display-none");
});

$(document).ready(function () {
    $("tr").each(function () {
        var fullName = "";
        var firstName = "";
        var lastName = "";
        $(this)
            .find(".f-name")
            .each(function () {
                firstName = $(this).text();
                fullName = firstName + " ";
            });
        $(this)
            .find(".l-name")
            .each(function () {
                lastName = $(this).text();
                // console.log(lastName);
                fullName += lastName;
            });

        $(this).find("#fname").html(fullName);
    });
});

// Form Validation Below

// Regex for VAlidation: ^[a-z|A-Z]+@    --- Important
var regexPattern = /[a-z|A-Z]+@/;
$("#inputString").keyup(function () {
    // var regexPattern = /[a-z|A-Z]+@/;
    var inputString = $("#inputString").val();
    var isRegTrue = checkReg(inputString);
    // console.log(isRegTrue);
    function checkReg(inputString) {
        var regUpper = /[A-Z]/;
        var regLower = /[a-z]/;
        var isUpper = false;
        var isLower = false;
        var isAt = false;
        var isLen = false;

        if (inputString.length > 0) {
            if (regUpper.test(inputString)) {
                $("#isUpper").css("color", "green");
                isUpper = true;
            } else {
                $("#isUpper").css("color", "red");
                isUpper = false;
            }

            if (regLower.test(inputString)) {
                $("#isLower").css("color", "green");
                isLower = true;
            } else {
                $("#isLower").css("color", "red");
                isLower = false;
            }

            if (inputString.charAt(inputString.length - 1) == "@") {
                $("#isAt").css("color", "green");
                isAt = true;
            } else {
                $("#isAt").css("color", "red");
                isAt = false;
            }

            if (inputString.length >= 10) {
                $("#isLen").css("color", "green");
                isLen = true;
            } else {
                $("#isLen").css("color", "red");
                isLen = false;
            }

            if (isUpper && isLower && isAt && isLen) {
                $("#emsg").show();
            } else {
                $("#emsg").hide();
            }
        } else {
            $("#isUpper").css("color", "black");
            $("#isLower").css("color", "black");
            $("#isAt").css("color", "black");
            $("#isLen").css("color", "black");
            $("#emsg").hide();
        }
    }
});

//  Clock below

$(document).ready(function () {
    clockUpdate();
    setInterval(clockUpdate, 1000);
});

function clockUpdate() {
    var date = new Date();
    $(".digital-clock");
    // .css({ color: "#fff", "text-shadow": "0 0 6px #ff0" });
    function addZero(x) {
        if (x < 10) {
            return (x = "0" + x);
        } else {
            return x;
        }
    }

    function twelveHour(x) {
        if (x > 12) {
            return (x = x - 12);
        } else if (x == 0) {
            return (x = 12);
        } else {
            return x;
        }
    }

    var h = addZero(twelveHour(date.getHours()));
    var m = addZero(date.getMinutes());
    var s = addZero(date.getSeconds());
    var ampm = date.getHours() >= 12 ? "PM" : "AM";

    $(".digital-clock").text(h + ":" + m + ":" + s + " " + ampm);
}
