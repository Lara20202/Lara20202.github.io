console.log("Hello")
var slides = document.getElementsByClassName("hiddenSlide");
var index = 0

function buttonClick(){
    console.log("button has been clicked")
    document.getElementById("buttonID").innerHTML = "Changed button"
}

function changeSlide(number){
    console.log("changing slides by:" + String(number))
    slides[index].setAttribute("id", "")
    //console.log(number)

    index += number
    if (index < 0){
        index = slides.length-1
    }
    if (index > slides.length-1){
        index = 0
    }
    console.log(index)
    slides[index].setAttribute("id", "activeSlide")
function startSlide(){
    console.log("automatically changing slides")
    changeSlide(1)
    setTimeout(startSlide, 4000)
}

window.onload = () => {
    console.log("start of load!")
    setTimeout(startSlide,4000);
}
}