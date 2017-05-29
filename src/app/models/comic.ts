class Price{
  type:String;
  price:String;
}

class Thumbnail{
  path:String;
  extension:String;
}

export class Comic{
  id:String;
  title:String;
  description:String;
  prices:Array<Price>;
  thumbnail:Thumbnail;
}
