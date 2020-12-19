window.onload = () => {
    console.log("page load")
}
function submitFood(){
    console.log("button has been pressed.")
    let food = document.getElementById("foodInput").value
    console.log(food)
    localStorage.setItem("favfood",food)
}

function loadFood(){
    const food = localStorage.getItem("favefood")
    console.log(food)
    if (food){
        document.getElementById(foodDisplay).innerHTML = "My favourite food is:" + food
    }
}