const list = document.querySelector(".list");

let picked = null;
let pickedIndex = null;

list.addEventListener("dragstart", (e) => {
    const obj = e.target;
    pickedIndex = [...obj.parentNode.children].indexOf(obj);
    picked = obj;
});

list.addEventListener("dragover", (e) => {
    e.preventDefault();
});
list.addEventListener("drop", (e) => {
    // e.target.before(picked);
    const obj = e.target;
    const index = [...obj.parentNode.children].indexOf(obj);

    if (pickedIndex > index) {
        obj.before(picked);
    } else {
        obj.after(picked);
    }
});
