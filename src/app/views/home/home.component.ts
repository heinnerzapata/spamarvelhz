import { Component } from '@angular/core';
import { SortNavComponent } from './sortnav/sortnav.component';

@Component({
  selector: 'home-component',
  templateUrl : './home.component.html',
  styleUrls: ['./home.component.css'],
  entryComponents: [ SortNavComponent ]
})

export class HomeComponent{

}
