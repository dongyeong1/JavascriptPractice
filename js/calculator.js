let form = document.querySelector(".form");
let result = document.querySelector(".resultinput");
let resultbutton = document.querySelector(".resultbutton");

resultbutton.addEventListener("click", function () {
    console.log(result.value);
});

function resultchange() {
    console.log(result.value);
}
function clears() {
    document.forms.output.value = 0;
    result.style.fontSize = "4rem";
}

function resultsss() {
    if (result.value.length > 10) {
        result.style.fontSize = "1.5rem";
    } else if (result.value.length > 5) {
        result.style.fontSize = "2rem";
    } else {
        result.style.fontSize = "4rem";
    }
}

function one() {
    if (result.value == 0) {
        result.value = 1;
        resultsss();
    } else {
        result.value += 1;
        resultsss();
    }
}
function two() {
    if (result.value == 0) {
        document.forms.output.value = 2;
        resultsss();
    } else {
        document.forms.output.value += 2;
        resultsss();
    }
}
function three() {
    if (result.value == 0) {
        document.forms.output.value = 3;
        resultsss();
    } else {
        document.forms.output.value += 3;
        resultsss();
    }
}
function four() {
    if (result.value == 0) {
        document.forms.output.value = 4;
        resultsss();
    } else {
        document.forms.output.value += 4;
        resultsss();
    }
}
function five() {
    if (result.value == 0) {
        document.forms.output.value = 5;
        resultsss();
    } else {
        document.forms.output.value += 5;
        resultsss();
    }
}
function six() {
    if (result.value == 0) {
        document.forms.output.value = 6;
        resultsss();
    } else {
        document.forms.output.value += 6;
        resultsss();
    }
}
function seven() {
    if (result.value == 0) {
        document.forms.output.value = 7;
        resultsss();
    } else {
        document.forms.output.value += 7;
        resultsss();
    }
}
function eight() {
    if (result.value == 0) {
        document.forms.output.value = 8;
        resultsss();
    } else {
        document.forms.output.value += 8;
        resultsss();
    }
}
function nine() {
    if (result.value == 0) {
        document.forms.output.value = 9;
        resultsss();
    } else {
        document.forms.output.value += 9;
        resultsss();
    }
}
function zero() {
    if (result.value == 0) {
        document.forms.output.value = 0;
        resultsss();
    } else {
        document.forms.output.value += 0;
        resultsss();
    }
}
