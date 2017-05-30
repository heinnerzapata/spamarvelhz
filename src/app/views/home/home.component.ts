import { Component } from '@angular/core';
import { SortNavComponent } from './sortnav/sortnav.component';
import { CardListComponent } from './cardlist/cardlist.component';
import { HeaderComponent } from './header/header.component';
import { FavoritesComponent } from './favorites/favorites.component'

@Component({
  selector: 'home-component',
  templateUrl : './home.component.html',
  styleUrls: ['./home.component.css'],
  entryComponents: [ SortNavComponent , CardListComponent , HeaderComponent , FavoritesComponent]
})

export class HomeComponent{

  searchFilter:string;
  orderFilter:string;
  newFavouriteJSON:string;


  onNotifySearch(message:string):void {
    this.searchFilter = message;
  }

  onNotifySort(message:string):void{
    this.orderFilter = message;
  }

  onNotyfyNewFavorite(message:string):void{
    this.newFavouriteJSON = message;
  }

}
