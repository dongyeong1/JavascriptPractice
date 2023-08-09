const container = document.querySelector(".image-container");
const startButton = document.querySelector(".start-button");
const gameText = document.querySelector(".game-text");
const playTime = document.querySelector(".play-time");
const tiieCount = 16;

let isPlaying = false;

let tiles = [];

let timeInterval = null;
let time = 0;

const dragged = {
    el: null,
    class: null,
    index: null,
};

function setGame() {
    clearInterval(timeInterval);
    gameText.style.display = "none";
    time = 0;
    isPlaying = true;
    container.innerHTML = "";

    tiles = createImageTiles();

    tiles.forEach((tile) => {
        container.appendChild(tile);
    });

    setTimeout(() => {
        container.innerHTML = "";
        shuffle(tiles).forEach((tile) => {
            container.appendChild(tile);
        });
        timeInterval = setInterval(() => {
            playTime.innerText = time;
            time++;
        }, 1000);
    }, 3000);
}

function createImageTiles() {
    const tempArray = [];
    Array(tiieCount)
        .fill()
        .forEach((_, i) => {
            // console.log(i);
            const li = document.createElement("li");
            li.setAttribute("data-index", i);
            li.setAttribute("draggable", "true");
            li.classList.add(`list${i}`);
            // container.appendChild(li);
            tempArray.push(li);
        });
    return tempArray;
}

function shuffle(array) {
    let index = array.length - 1;
    while (index > 0) {
        const randomIndex = Math.floor(Math.random() * (index + 1));
        [array[index], array[randomIndex]] = [array[randomIndex], array[index]];

        index--;
    }
    return array;
}

function checkStatus() {
    const currentList = [...container.children];
    const unMatchedList = currentList.filter(
        (child, index) => Number(child.getAttribute("data-index")) !== index
    );
    if (unMatchedList.length === 0) {
        gameText.style.display = "block";
        isPlaying = false;
        clearInterval(timeInterval);
    }
}

container.addEventListener("dragstart", (e) => {
    if (!isPlaying) return;
    console.log(e.target);
    dragged.el = e.target;
    dragged.class = e.target.className;
    dragged.index = [...e.target.parentNode.children].indexOf(e.target);
});
container.addEventListener("dragover", (e) => {
    e.preventDefault();
});
container.addEventListener("drop", (e) => {
    if (!isPlaying) return;

    const index = [...e.target.parentNode.children].indexOf(e.target);
    if (e.target.className !== dragged.class) {
        let originPlace;
        let isLast = false;

        if (dragged.el.nextSibling) {
            originPlace = dragged.el.nextSibling;
        } else {
            originPlace = dragged.el.previousSibling;
            isLast = true;
        }

        if (dragged.index > index) {
            e.target.before(dragged.el);
        } else {
            e.target.after(dragged.el);
        }

        isLast ? originPlace.after(e.target) : originPlace.before(e.target);
    }
    checkStatus();
});

startButton.addEventListener("click", () => {
    setGame();
});
