let todoItems=[];
//we just captured in input
function addtodo(){
    let heading= document.getElementsByClassName("newitem").value;
    if(heading!="")
    {
        const todo={
            heading,
            completed:false,
            subtask:[],
            id:Date.now(),
        };
        todoItems.push(todo);
      //  toggle();
       // goback(); 
       rendertodo();
    }
}


//to show the card
function rendertodo(todo){
    const list=document.querySelector("newc");
    var child=list.lastElementChild;
    while(child)
    {
        list.removeChild(child);
        child=list.lastElementChild;
    }
    for(let i=0;i<todoItems.length;i++)
    {
        const node=document.createElement("div");
        node.setAttribute("class",'card');
        node.setAttribute("id",todoItems[i].id);
        node.innerHTML= '<p class="card-heading" onclick="redirect(this)">${todoItems[i].heading}</p><button >add Item</button>';
        list.append(node);
    }
} 
//="toggleAddItem(thisonclick)"
