const display = document.getElementById("display")
function appendDisplay(input){
    display.value += input ;

}
function clearAll() {
    display.value= " ";
}
function calculate(){
    try{
    display.value= eval(display.value)

}
catch(error){
    display.value="Error"
    alert(error)
}
}
function del(){
    display.value = display.value.toString().slice(0,-1)
}