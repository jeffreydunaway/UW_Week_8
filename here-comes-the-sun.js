/*
const animateFn = function() {
    //in a conditional,
        //call requestAnimationFrame(animateFn)
}
*/

//animate the background-color of the body so that it changes 
//from black rgb(0, 0, 0) 
//to white rgb(255, 255, 255)

let colorIndex = 0
const lighten = function() {
    if (colorIndex < 255) {
        colorIndex++
        document.body.style.backgroundColor = `rgb(${colorIndex}, ${colorIndex}, ${colorIndex})`
        requestAnimationFrame(lighten)
    }
}

requestAnimationFrame(lighten)
