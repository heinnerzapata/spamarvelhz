import { EventEmitter, Output, Component } from '@angular/core';
import {FormsModule} from '@angular/forms';

@Component({
  selector: 'header-component',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})

export class HeaderComponent{

  constructor(){

  }

  @Output() searchEvent = new EventEmitter();

  value: string;

  updateSearchFilter(newFilter:string){
    //this.searchService.setSearchFilter(newFilter);
    this.searchEvent.emit(newFilter);
  }

}
