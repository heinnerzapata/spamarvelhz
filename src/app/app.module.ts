
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { HttpModule } from '@angular/http';
import {RouterModule} from '@angular/router';
import {FormsModule} from '@angular/forms';


import {FooterComponent} from './layout/footer/footer.component';

import {HomeComponent} from './views/home/home.component';
import {SortNavComponent} from './views/home/sortnav/sortnav.component';
import { CardListComponent } from './views/home/cardlist/cardlist.component';
import {HeaderComponent} from './views/home/header/header.component';

import { routes } from './app.routes'

@NgModule({
   imports: [
     BrowserModule,
     RouterModule,
     HttpModule,
     routes,
     FormsModule
   ],
   declarations: [
      AppComponent,
      HeaderComponent,
      FooterComponent,
      HomeComponent,
      SortNavComponent,
      CardListComponent
   ],
   providers: [],
   bootstrap: [ AppComponent ]
 })

 export class AppModule { }
