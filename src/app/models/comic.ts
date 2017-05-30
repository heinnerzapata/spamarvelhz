class Price{
  type:string;
  price:string;
}

class Thumbnail{
  path:string;
  extension:string;
}

export class Comic{
  id:string;
  title:string;
  description:string;
  prices:Array<Price>;
  thumbnail:Thumbnail;
}
