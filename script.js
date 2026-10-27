// 1. get the textarea and the span that shows the number
// 2. when the user types in the textarea: count the characters and show the number on the page

const message = document.getElementById("message");
const chars = document.getElementById("chars");

message.addEventListener("input", function () {
    const num = message.value.length;
    chars.textContent = num;
    if (num > 100) {
        chars.style.color = "#ff6b6b";
    } else {
        chars.style.color = "";
    }
});