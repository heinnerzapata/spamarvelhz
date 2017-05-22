import { Component } from '@angular/core';
import {Router} from '@angular/router';
import {HeaderComponent} from './layout/header/header.component';
import {FooterComponent} from './layout/footer/footer.component';

@Component({
  selector : 'app',
  templateUrl : './app.component.html',
  styleUrls: [ './app.component.css' ],
  entryComponents: [ HeaderComponent , FooterComponent ]
})

export class AppComponent{

}
