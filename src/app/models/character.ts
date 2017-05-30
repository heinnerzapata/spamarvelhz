class Thumbnail{
  path:string;
  extension:string;
  constructor(path,extension){
    this.extension = extension;
    this.path = path;
  }
}

class Items{
  resourceURI:string;
  name:string;
  selected:Boolean;
}

class Comics{
  items:Array<Items>;
}

export class Character{
  id:number;
  name:string;
  description:string;
  thumbnail:Thumbnail;
  comics:Comics;
  constructor(id:number,name:string,description:string,extension:string,path:string){
    this.id = id;
    this.name = name;
    this.description = description;
    this.thumbnail = new Thumbnail(path,extension);
  }
}
