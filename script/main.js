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

// Form validation
$(document).ready(function () {
    var message = "Please Follow the Guidline";

    $("#regex_input").keyup(function () {
        var regValue = $(this).val();
        i = 0;
        isUpper = 0;
        isLower = 0;
        isAtLast = 0;
        while (i <= regValue.length) {
            character = regValue.charAt(i);
            if (character == character.toUpperCase()) {
                isUpper++;
                // alert("upper case true");
            }
            if (character == character.toLowerCase()) {
                isLower++;
                // alert("lower case true");
            }
            if (regValue.charAt(regValue.length - 1) == "@") {
                isAtLast++;
            }
            i++;
        }
        if (regValue.length >= 10) {
            if (isUpper > 0 && isLower && isAtLast) {
                message = "Validated";
                alert("Validated");
            }
        } else {
            console.log("len");
        }
        // console.log(message);
    });
    // $(this).find("#regMsg").html(message);

    // console.log(message);
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
