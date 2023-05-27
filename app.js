var display = document.getElementById("display")
function getVal (num){
    display.value += num

}
function calVal (){
    display.value = eval(display.value)
}
function clearVal (){
    display.value = ""
}