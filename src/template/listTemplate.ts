import fullList from "../models/fullList.js";

interface domList{
    cont:HTMLDivElement,
    clear():void,
    render(fulllist:fullList):void
}

export default class listTemplate implements domList{
    cont:HTMLDivElement;
    static instance:listTemplate=new listTemplate();
    private constructor(){
        this.cont=document.getElementById('note-container') as HTMLDivElement ;//*********************/
    }
    clear(): void {
        this.cont.innerHTML='';
    }
    render(fulllist: fullList): void {
        this.clear();
        
        fulllist.list.forEach((object)=>{
            const note=document.createElement('DIV') as HTMLDivElement;
            note.className='note';
            note.classList.add(object.color);

            const clickArea=document.createElement('DIV') as HTMLDivElement;
            clickArea.className='click-area';
            clickArea.id='clickArea';

            
            
            const noteTitle=document.createElement('h3');
            noteTitle.innerHTML=object.title;
            const noteText=document.createElement('p');
            noteText.innerHTML=object.text;
            
            clickArea.addEventListener('click',()=>{
                if(!note.classList.contains('selected')){
                    note.classList.add('selected');
                    let overlay=document.getElementById('overlay') as HTMLDivElement;
                    overlay.classList.add('blure');
                    noteTitle.setAttribute('contenteditable','true');
                    noteText.setAttribute('contenteditable','true');
                }
            })

            noteTitle.addEventListener('click',()=>{
                if(!note.classList.contains('selected')){
                    note.classList.add('selected');
                    let overlay=document.getElementById('overlay') as HTMLDivElement;
                    overlay.classList.add('blure');
                    noteTitle.setAttribute('contenteditable','true');
                    noteText.setAttribute('contenteditable','true');
                }
            })
            
            noteText.addEventListener('click',()=>{
                if(!note.classList.contains('selected')){
                    note.classList.add('selected');
                    let overlay=document.getElementById('overlay') as HTMLDivElement;
                    overlay.classList.add('blure');
                    noteTitle.setAttribute('contenteditable','true');
                    noteText.setAttribute('contenteditable','true');
                }
            })

            noteTitle.addEventListener('focusout',()=>{
                object.title=noteTitle.innerText;
                fulllist.save();
            })

            noteText.addEventListener('focusout',()=>{
                object.text=noteText.innerText;
                fulllist.save();
            })

            const x=document.createElement('i') as HTMLElement;
            x.classList.add("fa-solid", "fa-circle-xmark",'x');
            x.id=object.id.toString();
            x.addEventListener('click',()=>{
                note.classList.remove('selected')
                let overlay=document.getElementById('overlay') as HTMLDivElement;
                overlay.classList.remove('blure');
                
            })

            const iFav=document.createElement('i') as HTMLElement;
            iFav.classList.add("fa-regular","fa-bookmark","bookmark");
            iFav.id='fav';
            if(object.fav==true){iFav.classList.add('fav');}
            else{iFav.classList.remove('fav');}
            
            iFav.addEventListener('click',()=>{
                fulllist.list[fulllist.list.indexOf(object)].fav=!fulllist.list[fulllist.list.indexOf(object)].fav;
                fulllist.save();
                iFav.classList.toggle('fav')
            })

            const iDel=document.createElement('i') as HTMLElement;
            iDel.classList.add("fa-solid","fa-trash","del");
            iDel.id=object.id.toString();
            iDel.addEventListener('click',()=>{
                fulllist.removeItem(object.id);
                this.render(fulllist);
            })

            

            
            note.append(clickArea);
            note.append(iFav);
            note.append(iDel);
            note.append(noteTitle);
            note.append(noteText);
            note.append(x);
           
            this.cont.append(note);
            
        })
    }
    renderFilter(fulllist: fullList): void {
        console.log('renderfilter');
        fulllist.list=fulllist.list.filter(item=>item.fav===true);
        console.log(fulllist.list);
        fulllist.list.forEach((object)=>{
            const note=document.createElement('DIV') as HTMLDivElement;
            note.className='note';
            note.classList.add(object.color);
            note.addEventListener('click',()=>{
                note.classList.add('selected');
            })
            
            const x=document.createElement('i') as HTMLElement;
            x.classList.add("fa-solid", "fa-circle-xmark",'x');
            x.id=object.id.toString();
            x.addEventListener('click',()=>{
                note.classList.remove('selected')
            })

            const iFav=document.createElement('i') as HTMLElement;
            iFav.classList.add("fa-regular","fa-bookmark","bookmark");
            iFav.id='fav';
            if(object.fav==true){iFav.classList.add('fav');}
            else{iFav.classList.remove('fav');}
            
            iFav.addEventListener('click',()=>{
                fulllist.list[fulllist.list.indexOf(object)].fav=!fulllist.list[fulllist.list.indexOf(object)].fav;
                fulllist.save();
                iFav.classList.toggle('fav')
            })

            

            const iDel=document.createElement('i') as HTMLElement;
            iDel.classList.add("fa-solid","fa-trash","del");
            iDel.id=object.id.toString();
            iDel.addEventListener('click',()=>{
                fulllist.removeItem(object.id);
                this.renderFilter(fulllist);
            })

            const noteTitle=document.createElement('h3');
            noteTitle.innerHTML=object.title;
            const noteText=document.createElement('p');
            noteText.innerHTML=object.text;
            note.append(x);
            note.append(iFav);
            note.append(iDel);
            note.append(noteTitle);
            note.append(noteText);
            
            this.cont.append(note);
            
        })
    }
}