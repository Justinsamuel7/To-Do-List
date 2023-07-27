let todoinp = document.getElementById('todoinp')
let mylistdisplay = document.getElementById('mylistdisplay')

let todoarray=[]

let btnaddtolist = document.getElementById('btnaddtolist')
btnaddtolist.addEventListener('click', addtolist)
function addtolist(){

    todoarray.push(todoinp.value)
    console.log(todoarray)
    todoinp.value=''
    showmylist()
    
}

function showmylist(){

    let tasks=``
    let taskhead=`<h3>ToDo List</h3>`
    let n=1
    todoarray.forEach(element => {
        tasks=tasks+`<div class="listandbtns" id="listbc${n}"><p>${element}</p><div><button onclick="deletefromlist('${element}')" class="delbtn">Delete</button>
        <button onclick="done(${n})" id="doneid${n}" class="done">Done</button>
        <button onclick="Inprogress(${n})" id="progressid${n}" class="inprog">In progress</button>
        </div></div>`
        n++
    });

    taskhead=taskhead+tasks
    mylistdisplay.innerHTML=taskhead
    
}

function deletefromlist(x){

    var idx = todoarray.findIndex(ele=> x===ele)
   
    todoarray.splice(idx,1)
    showmylist()
}
function done(n){
let listbc=document.getElementById('listbc'+n)
listbc.style.backgroundColor='green'
let idbtn = document.getElementById('doneid'+n)
idbtn.innerHTML=`<span>✓</span>`
idbtn.style.color='green'
idbtn.style.backgroundColor='none'
idbtn.style.border='none'
}

function Inprogress(n){
let listbc=document.getElementById('listbc'+n)
listbc.style.backgroundColor='orange'
let progressid = document.getElementById('progressid'+n)
progressid.innerHTML=`<span>⟳</span>`
progressid.style.color='orange'
progressid.style.backgroundColor='none'
progressid.style.border='none'

    
}
