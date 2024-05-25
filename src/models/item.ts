interface item{
    id:number,
    title:string,
    text:string,
    fav:boolean,
    date:Date,
    color:string
}


export default class listItem implements item{
    constructor(
        private _id:number=0,
        private _title:string='',
        private _text:string='',
        private _fav:boolean=false,
        private _date:Date=new Date,
        private _color:string='yellow'){}

    get id():number{
        return this._id;
    }
    set id(id:number){
        this._id=id;
    }

    get title():string{
        return this._title;
    }
    set title(title:string){
        this._title=title;
    }
    get text():string{
        return this._text;
    }
    set text(text:string){
        this._text=text;
    }
    
    get fav():boolean{
        return this._fav;
    }
    set fav(fav:boolean){
        this._fav=fav;
    }

    get date():Date{
        return this._date;
    }
    set date(date:Date){
        this._date=date;
    }
    get color():string{
        return this._color;
    }
    set color(color:string){
        this._color=color;
    } 
}
