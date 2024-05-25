import listItem from "./item.js";
interface fulllist{
    list:listItem[],
    load():void,
    save():void,
    clearList():void,
    addItem(i:listItem):void,
    removeItem(id:number):void,
    editItem(id):void
}

export default class fullList implements fulllist{
    static instance:fullList= new fullList();
    constructor(private _list:listItem[]=[]){}

    get list(){
        return this._list;
    }
    set	list(l:listItem[]){
        this._list=l
    }
    load(){
        let storedList:string|null=localStorage.getItem('fullList');
        console.log(`list is ${storedList}`);
        if(storedList==null) {
            console.log('null');    
        }
        
        else{
            fullList.instance.clearList();
            const parsedList:{_id:number,_title:string,_text,_fav:boolean,_date:Date,_color:string}[]=JSON.parse(String(storedList));
            parsedList.forEach(object=>{
                const newListItem=new listItem(object._id,object._title,object._text,object._fav,object._date,object._color);
                fullList.instance.addItemLoad(newListItem);  
            })
            
        }
    }
    save(){
        localStorage.setItem('fullList',JSON.stringify(this._list))
    }
    clearList(){
        this._list=[];
        this.save();
    }
    addItem(i:listItem){
        this._list.unshift(i);
        this.save();
    }

    addItemLoad(i:listItem){
        this._list.push(i);
        this.save();
    }

    removeItem(id:number){
        this._list=this._list.filter(item=>item.id!=id);
        this.save();
        console.log('removed from list:', this._list);
    }
    editItem(id: number): void {
        console.log(`Edited ${this.list.find((object) => object.id == id)}`)
    }
}