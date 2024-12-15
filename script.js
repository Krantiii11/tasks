const button = document.getElementById("colorButton");

button.addEventListener("click", function() {
    const colors = ["#f4f4f4", "#ff7f7f", "#7f7fff", "#7fff7f", "#fffb7f"];
    const currentColor = document.body.style.backgroundColor;
    let newColor;

    do {
        newColor = colors[Math.floor(Math.random() * colors.length)];
    } while (newColor === currentColor);

    document.body.style.backgroundColor = newColor;
});
