const body = document.getElementsByTagName('body')[0]
console.log(body)
const h1 = document.getElementsByTagName('h1')[0]
let bodyRGB = 0
let textRGB = 255
let bodyColor = setInterval(()=>{
    if(bodyRGB<256 && textRGB>0){
        bodyRGB++
        textRGB--
        // two ways on doing this 
        body.setAttribute('style', `background-color: rgb(${bodyRGB}, ${bodyRGB} , ${bodyRGB}`)
        h1.style.color = `rgb(${textRGB}, ${textRGB}, ${textRGB})`
    }else{
        clearInterval(bodyColor)
    }
},500)
