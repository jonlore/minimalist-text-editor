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
        const selection = window.getSelection();
        if (!selection.rangeCount) return;

        const parent = selection.anchorNode?.parentElement;
        const isInsideList = parent && (
            parent.closest("ul") || parent.closest("ol")
        );

        if (!isInsideList) {
            e.preventDefault();
            document.execCommand("insertHTML", false, `<${textType}><br></${textType}>`);
        }
    }
});


//Bold and italic functions
document.getElementById("btn-bold").addEventListener("click", () => {
    document.execCommand("bold", false, null);
    textContent.focus();
});

document.getElementById("btn-italic").addEventListener("click", () => {
    document.execCommand("italic", false, null);
    textContent.focus();
});

//Unordered & Ordered list functions
document.getElementById("btn-list-ordered").addEventListener("click", () => {
    document.execCommand("insertOrderedList");
    textContent.focus();
})

document.getElementById("btn-list-unordered").addEventListener("click", () => {
    document.execCommand("insertUnorderedList");
    textContent.focus();
})

// Text color functionality
document.getElementById("btn-text-color").addEventListener("click", () => {
    const colorPicker = document.getElementById("color-picker");
    colorPicker.click();
});

// Apply color to selected text immediately when color is picked
document.getElementById("color-picker").addEventListener("input", (e) => {
    const color = e.target.value;
    if (window.getSelection().toString()) {
        document.execCommand("foreColor", false, color);
    }
});