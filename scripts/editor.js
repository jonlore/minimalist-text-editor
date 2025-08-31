let textStyle = document.getElementById("text-style");
let textContent = document.getElementById("text-content");
let textType = "p"; //Default element type

textStyle.addEventListener("change", (e) => {
    textType = e.target.value;
    textContent.focus();
    document.execCommand("formatBlock", false, textType);
});

textContent.addEventListener("keydown", (e) => {
    if (e.key === "Enter") {
        e.preventDefault();
          document.execCommand("insertHTML", false, `<${textType}><br></${textType}>`);
    }
})