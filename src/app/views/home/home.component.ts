import { Component } from '@angular/core';
import { SortNavComponent } from './sortnav/sortnav.component';
import { CardListComponent } from './cardlist/cardlist.component';

@Component({
  selector: 'home-component',
  templateUrl : './home.component.html',
  styleUrls: ['./home.component.css'],
  entryComponents: [ SortNavComponent , CardListComponent]
})

export class HomeComponent{

}
