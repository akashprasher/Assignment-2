var regInstructions = [
    "Should contain a uppercase",
    "Should contain a lowercase",
    "Should be atleast 10 character in length",
    "Should have @ symbol in the end",
];

document.getElementById("isUpper").innerHTML = regInstructions[0];
document.getElementById("isLower").innerHTML = regInstructions[1];
document.getElementById("isLen").innerHTML = regInstructions[2];
document.getElementById("isAt").innerHTML = regInstructions[3];

var headings = [
    "How we Organize?",
    "Meet Our Team!",
    "Our Data",
    "Let's Validate and Oraganize.",
    "We Folow Time For Better Management",
];

for (var i = 1; i <= 5; i++) {
    getId = "heading-" + i;
    document.getElementById(getId).innerHTML = headings[i - 1];
}

var cautionMessage = `Please Make an input, it'll show the instructions automatically.`;
document.getElementById("caution").innerHTML = cautionMessage;
