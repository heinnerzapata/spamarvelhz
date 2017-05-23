class Thumbnail{
  path:String;
  extension:String;
  constructor(path,extension){
    this.extension = extension;
    this.path = path;
  }
}

export class Character{
  id:number;
  name:String;
  description:String;
  thumbnail:Thumbnail;
  constructor(id:number,name:string,description:string,extension:string,path:string){
    this.id = id;
    this.name = name;
    this.description = description;
    this.thumbnail = new Thumbnail(path,extension);
  }
}
