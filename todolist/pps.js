 loadEvents();
// load every event in the page
function loadEvents(){
  document.querySelector('form').addEventListener('submit',submit);
  document.getElementById('clear').addEventListener('click',clearList);
  document.querySelector('ul').addEventListener('click',deleteOrTick);
  document.getElementById('sdelete').addEventListener('click',dltlist);
}
// submit data function
function submit(e){
  e.preventDefault();
  let taskList;
  let input = document.querySelector('input#newtask');
  if(input.value != '')
    addTask(input.value);
  input.value = '';
}

// add tasks
function addTask(task){
  let ul = document.querySelector('ul');
  let li = document.createElement('li');
  li.innerHTML = `<span class="delete">×</span><input type="checkbox" name="checkbox" id="abc"><label>${task}</label>`;
  ul.appendChild(li);
  document.querySelector('.tasksBoard').style.display = 'block';
}

// clear the LIST
function clearList(e){
  let li = document.querySelector('ul').innerHTML = '';
}

// deleteTick
function deleteOrTick(e){
    console.log(e);
  if(e.target.className == 'delete')
    deleteTask(e);
  else {
    tickTask(e);
  }
}

// delete task
function deleteTask(e){
  let remove = e.target.parentNode;
  console.log(remove);
  let parentNode = remove.parentNode;
  console.log(parentNode);
  parentNode.removeChild(remove);
}

// tick a task
function tickTask(e){
  const task = e.target.nextSibling;
  
  if(e.target.checked){
    task.style.textDecoration = "line-through";
    task.style.color = "#ff0000";
  }else {
    task.style.textDecoration = "none";  
    task.style.color = "#2f4f4f";
    
  }
}
function dltlist(e){
  li=ul.children
    for (let index = 0; index < li.length; index++) {   
        const element = li[index];             
               while(li[index] && li[index].children[0].checked){      
            ul.removeChild(li[index])
        }
        
    }   
}
/*function dltlist(li){
  document.querySelectorAll('abc');
if(document.getElementById('abc').checked = true)
{
  document.getElementById("checkbox").removeChild('abc');
}
}*/
/*function dltlist(e){
  let items = document.querySelectorAll('#list li');
  console.log(items);
  tab = [];
  let liIndex;
        
        // populate tab with li data
        for(var i = 0; i < items.length; i++){
            tab.push(items[i].innerHTML);
        }
        console.log(tab);
        
        // get li index using tab array on li click event
        for(var i = 0; i < items.length; i++){
            
            items[i].click = function(){
                
               liIndex = tab.indexOf(this.innerHTML);
                console.log(this.innerHTML + " INDEX = " + liIndex);
            };
            
        }
            
         
               
                items[liIndex].parentNode.removeChild(items[liIndex]);

                

}*/
