import listTemplate from "./template/listTemplate.js";
import listItem from "./models/item.js";
import fullList from "./models/fullList.js";

let write =document.getElementById('write');
let titleInput=document.getElementById('title-input') as HTMLInputElement;
let textInput=document.getElementById('text-input') as HTMLInputElement;
let button=document.getElementById('filter')as HTMLButtonElement;
let startIcon=document.getElementById('add-icone') as HTMLElement;
//Functions
function randomColor(){

  if(fullList.instance.list.length!=0){

    if(fullList.instance.list[0].color=='red'){
      let colors:string[]=['yellow','navy'];
      let i=Math.floor(Math.random()*2);
      return 'yellow'
    }
    else if(fullList.instance.list[0].color=='yellow'){
      let colors:string[]=['red','navy'];
      let i=Math.floor(Math.random()*2);
      return 'navy';
    }
    else{
      let colors:string[]=['yellow','red'];
      let i=Math.floor(Math.random()*2);
      return 'red';
    }
  }
  else{
    let colors:string[]=['navy','yellow','red'];
      let i=Math.floor(Math.random()*3);
      return colors[i];
  }
}

function startInsert(){
  write?.classList.add('show');
  startIcon.classList.add('hide')
}

function getid():number{
  if(fullList.instance.list.length!=0){
  console.log (fullList.instance.list[0] );
  return  (fullList.instance.list[0].id)+1 ;
  }
  else console.log('0');
  return 0;
}

function insertNote(){
  if(titleInput.value=='' || textInput.value==''){
    alert('insert title and text')
  }
  else{
    fullList.instance.addItem(new listItem(getid(), titleInput.value.trim(), textInput.value.trim(),false,new Date,randomColor()));
    console.log(`from add :${fullList.instance.list.length}`)
    listTemplate.instance.render(fullList.instance);
    titleInput.value='';
    textInput.value='';
    textInput.style.height="32px";
  }
}

function filtering(){

  button.classList.toggle('filtered');

  if(button.classList.contains('filtered')){
    listTemplate.instance.clear();
    listTemplate.instance.renderFilter(fullList.instance);
    console.log('filtered')
  }
  else if(!button.classList.contains('filtered')){
    listTemplate.instance.clear();
    fullList.instance.load();
    console.log(fullList.instance.list)
    listTemplate.instance.render(fullList.instance);
    console.log('un filtered')
  }
}

const initApp=():void=>{
  console.log('loaded')
  const fulllist=fullList.instance;
  const listtemplate=listTemplate.instance;

  fulllist.load();
  console.log(`From inint---------------------------------${fulllist.list}`)
  listtemplate.render(fulllist);
  console.log('loaded')
}

function textResize(){

}


//Event Handler
button?.addEventListener('click',filtering);
document.getElementById('text-box')?.addEventListener("click",startInsert);
document.getElementById('insert')?.addEventListener("click",insertNote);
textInput.addEventListener('keyup',e=>{
  let scHeight= textInput.scrollHeight;
  textInput.height=scHeight;
  textInput.style.height=`${scHeight}px`;
  console.log(textInput.style.height);
});
initApp();