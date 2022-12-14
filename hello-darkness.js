let color = 255;
let body = document.getElementsByTagName('body')[0]
const darkness = setInterval(()=>{
    if(color >=0){
        body.style.backgroundColor = `rgb(${color},${color},${color} )`
        color--

    }else{
        clearInterval(darkness)
    }
},100)

timerFunc()
