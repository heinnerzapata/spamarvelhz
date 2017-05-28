class Thumbnail{
  path:String;
  extension:String;
  constructor(path,extension){
    this.extension = extension;
    this.path = path;
  }
}

class Items{
  resourceURI:String;
  name:String;
  selected:Boolean;
}

class Comics{
  items:Array<Items>;
}

export class Character{
  id:number;
  name:String;
  description:String;
  thumbnail:Thumbnail;
  comics:Comics;
  constructor(id:number,name:string,description:string,extension:string,path:string){
    this.id = id;
    this.name = name;
    this.description = description;
    this.thumbnail = new Thumbnail(path,extension);
  }
}
