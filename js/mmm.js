let target = document.querySelector("#dynamic");

function randomString() {
    let stringArr = ["Learn To HTML"];
    let selectString = stringArr[Math.floor(Math.random() * stringArr.length)];
    let selectStringArr = selectString.split("");
    return selectStringArr;
}

function dynamic() {
    target.textContent = "";
    typing(randomString());
}

function typing(randomArr) {
    if (randomArr.length > 0) {
        target.textContent += randomArr.shift();
        // setTimeout(()=>typing(randomArr), 100);
        setTimeout(function () {
            return typing(randomArr);
        }, 100);
    } else {
        setTimeout(dynamic, 3000);
    }
}
typing(randomString());

function blink() {
    target.classList.toggle("active");
}
setInterval(blink, 500);
