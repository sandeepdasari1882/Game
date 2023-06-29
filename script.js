
let countEl = document.getElementById("count_el");
console.log(countEl);

let count = 0
function increment(){
   count = count + 1
   countEl.innerText = count
}
function decrement(){
    count = count - 1
    countEl.innerText = count
 }
 
 function save(){
   alert("Saved")
   console.log(count)
 }