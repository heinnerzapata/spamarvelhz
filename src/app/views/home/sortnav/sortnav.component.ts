import { EventEmitter, Output, Component } from '@angular/core';

@Component({
  selector: 'sortnav-component',
  templateUrl: './sortnav.component.html',
  styleUrls: [ './sortnav.component.css' ]
})

export class SortNavComponent{

  @Output() sortEvent = new EventEmitter();

  setOrder(order:string){
      this.sortEvent.emit(order);
  }

}
