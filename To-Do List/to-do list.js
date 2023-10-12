let inputBox = document.getElementById("input");
let taskList = document.getElementById("list");
let form =document.querySelector('form');

function addTask(){
    if (inputBox.value == ''){
        alert("You must write something");
    }
    else {
    form.addEventListener("submit", function (e) {
    e.preventDefault()
        let li = document.createElement("li");
        li.innerHTML=inputBox.value;
        inputBox.value="";
        taskList.append(li);
        saveData();
        // let span = document.createElement("span");
        // span.innerHTML="\u00d7"
        // li.append(span);
    })
}}
// taskList.addEventListener("click",function(e){
//    if(e.target.tagName === "LI"){
//        e.target.classList.toggle("checked");
//        }
//        else if(e.target.tagName === "SPAN"){
//            e.target.parentElement.remove();
//        }

//    },false);

//    function saveData(){
//        localStorage.setItem("data",taskList.innerHTML);
//    }
//    function showTask(){
//        taskList.innerHTML = localStorage.getItem("data")
//    }
//    showTask();
