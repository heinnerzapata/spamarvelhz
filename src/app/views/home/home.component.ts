import { Component } from '@angular/core';
import { SortNavComponent } from './sortnav/sortnav.component';
import { CardListComponent } from './cardlist/cardlist.component';
import { HeaderComponent } from './header/header.component';


@Component({
  selector: 'home-component',
  templateUrl : './home.component.html',
  styleUrls: ['./home.component.css'],
  entryComponents: [ SortNavComponent , CardListComponent , HeaderComponent]
})

export class HomeComponent{

  searchFilter:String;

  onNotifySearch(message:string):void {
    this.searchFilter = message;
  }

}
