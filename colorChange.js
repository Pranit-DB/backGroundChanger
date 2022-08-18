const btn1 = document.querySelector(".container button")
const body = document.body;
const h1 = document.querySelector("h1");
const h3 = document.querySelector("h3");
const span= document.querySelector(".currentColor")
const hexspan= document.querySelector(".hexcolor")


btn1.addEventListener("click",(e)=>{
    // body.style.backgroundColor = `rgb(${Math.random()*255},
    // ${Math.random()*255},${Math.random()*255})`;
    const randomColor = randomColorGenerate();
    body.style.backgroundColor = randomColor;
    span.textContent = randomColor;
    // h3.color = randomColor;
    console.log(h3);
});

// function randomColorGenerate(){
//     return `rgb(${Math.ceil(Math.random()*255)},${Math.ceil(Math.random()*255)},${Math.ceil(Math.random()*255)})`;
// }

function randomColorGenerate() {
    const red = Math.ceil(Math.random()*255)
    const green = Math.ceil(Math.random()*255)
    const blue = Math.ceil(Math.random()*255)
    const color = `rgb(${red},${green},${blue})`;
    const rgbToHex = (r, g, b) => '#' + [r, g, b]
        .map(x => {
            const hex = x.toString(16)
            return hex.length === 1 ? '0' + hex : hex
        })
        .join('')
    const hexA = rgbToHex(red, green, blue);
    hexspan.textContent = hexA;
    // console.log(hexspan.textContent);
    return color;
}


