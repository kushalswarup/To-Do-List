let input = document.querySelector('#input');
let listContainer = document.querySelector('#list-container');
  function addTask(){
    if(input.value===''){
        alert("you must write something")
    }
    else{
        let li = document.createElement('li');
        li.innerHTML=input.value;
        let d = new Date();
        let time = d.toLocaleTimeString();
        listContainer.appendChild(li, time);
        let span = document.createElement("span");
        span.innerHTML="\u00d7";
        
        li.appendChild(span );
    }
    input.value='';
    saveData();
}


listContainer.addEventListener('click',(e)=>{
    if(e.target.tagName==="LI"){
        e.target.classList.toggle("checked");
        saveData();
    }
    else if(e.target.tagName==="SPAN"){
        e.target.parentElement.remove();
        saveData();
    }
})

function saveData(){
    localStorage.setItem("data",listContainer.innerHTML);
}


function showData(){
    listContainer.innerHTML=localStorage.getItem("data");
}
showData();