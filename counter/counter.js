const decreasebtn = document.getElementById("decreasebtn")
const increasebtn = document.getElementById("increasebtn")
const Resetbtn = document.getElementById("resetbtn")
const countlabel = document.getElementById("countlabel")

let count = 0

increasebtn.onclick = function(){
    count++
    countlabel.textContent= count 
}
decreasebtn.onclick = function(){
    count--
    countlabel.textContent=count
}
Resetbtn.onclick =function(){
    count=0
    countlabel.textContent=count
}