const ZERO_WIDTH_SPACE = "​";


/** @type {HTMLSpanElement} */
const congratulationSpan = document.querySelector('#congratulation');

let clickCount = 0;

congratulationSpan.addEventListener("click", () => {
    clickCount++;
    if (clickCount === 1) {
        congratulationSpan.textContent = `CLICK ON ME TO ROLL A DICE)))`;
    } 
    if (clickCount >1) {
        congratulationSpan.textContent += `)`;
    } 
    if (clickCount === 5) {
        window.location.href = "https://www.google.com";
    }
});

/** @type {HTMLTemplateElement} */
const balloonsTemplate = document.querySelector("template#balloons");

[...Array(10).keys()]
    .forEach((_, i) => {
        /** @type {HTMLImageElement} */
        const balloonsElem = balloonsTemplate.content.cloneNode(true).querySelector('img');
        const left = `${i * 10}%`;
        const delay = `${Math.random() * 2.5}s`;
        const zIndex = Math.random() > .75 ? "100" : "0";
        balloonsElem.style.cssText += `--left: ${left}; --delay: ${delay}; --z-index: ${zIndex}`;
        document.body.appendChild(balloonsElem);
    });


function updatePageTitle() {
    document.title = document.title.includes("❤️") 
        ? document.title.replace(" ❤️", "")
        : document.title + " ❤️"
}

setInterval(updatePageTitle, 500);
