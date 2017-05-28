import { Component } from '@angular/core';
import {Router} from '@angular/router';
import {FooterComponent} from './layout/footer/footer.component';

@Component({
  selector : 'app',
  templateUrl : './app.component.html',
  styleUrls: [ './app.component.css' ],
  entryComponents: [FooterComponent ]
})

export class AppComponent{

}
