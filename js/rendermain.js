let target = document.querySelector("#dynamic");

function randomString() {
    let stringArr = ["Learn To HTML", "Learn to Python", "Learn to ruby"];
    let selectString = stringArr[Math.floor(Math.random() * stringArr.length)];
    let selectStringArr = selectString.split("");
    return selectStringArr;
}

function asd() {
    target.textContent = "";
    dynamic(randomString());
}

function dynamic(randomArr) {
    if (randomArr.length > 0) {
        target.textContent += randomArr.shift();
        setTimeout(() => {
            dynamic(randomArr);
        }, 80);
    } else {
        setTimeout(asd, 3000);
    }
}
dynamic(randomString());

function blink() {
    target.classList.toggle("active");
}
setInterval(blink, 500);
