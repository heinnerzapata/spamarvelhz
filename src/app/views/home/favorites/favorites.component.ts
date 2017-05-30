import { Component , Input , OnChanges , SimpleChanges} from '@angular/core';
import { Favorite } from './../../../models/favorite';

@Component({
  selector: 'favorites-component',
  templateUrl: './favorites.component.html',
  styleUrls: ['./favorites.component.css']
})

export class FavoritesComponent{

  public favorites: Array<Favorite> = [];// = [new Favorite("1", "Available1","http://i.annihil.us/u/prod/marvel/i/mg/3/03/5601855c253f1.jpg"),new Favorite("2", "Available2","http://i.annihil.us/u/prod/marvel/i/mg/3/03/5601855c253f1.jpg"),new Favorite("3", "Available3","http://i.annihil.us/u/prod/marvel/i/mg/3/03/5601855c253f1.jpg")];

  @Input()
  newFavouriteJSON:string;

  constructor(){

      //this.setNewFavourite(new Favorite("4", "Available4","http://i.annihil.us/u/prod/marvel/i/mg/3/03/5601855c253f1.jpg"));

      // Read Localstorage
    if (typeof(Storage) !== "undefined") {

        var i = 0;
        for (i = 0; i < localStorage.length; i++){
           this.favorites.push(new Favorite(localStorage.key(i), localStorage.getItem(localStorage.key(i)).split('^')[0],localStorage.getItem(localStorage.key(i)).split('^')[1]));
        }

    }

  }

  ngOnChanges(changes: SimpleChanges) {

    if(this.newFavouriteJSON != undefined){

      let ObjNewFavouriteJSON = JSON.parse(this.newFavouriteJSON);

      let NewFavId:String = String(ObjNewFavouriteJSON.id);
      let NewFavTitle:String = String(ObjNewFavouriteJSON.title);
      let NewFavThumbnail:String = String(ObjNewFavouriteJSON.thumbnail);

      this.setNewFavourite(new Favorite(NewFavId,NewFavTitle,NewFavThumbnail));
    }


  }

  deleteFavorite(id:String){
    let i = 0;
    for(i = 0;i<this.favorites.length;i++){
      if(id == this.favorites[i].id){

        if (typeof(Storage) !== "undefined")
            localStorage.removeItem(String(this.favorites[i].id));

        this.favorites.splice(i,1);

      }


    }
  }

  setNewFavourite(newFavourite:Favorite){


    let isInrray:Boolean = false;
    let i = 0;


    for(i = 0;i<this.favorites.length;i++){
      if(newFavourite.id == this.favorites[i].id)
        isInrray =  true;
    }

    if(!isInrray){
      if(this.favorites.length < 3){
        this.favorites.push(newFavourite);

        if (typeof(Storage) !== "undefined")
            localStorage.setItem(String(newFavourite.id),String(newFavourite.title) + '^' + String(newFavourite.thumbnail));

    }



  }


}

}
