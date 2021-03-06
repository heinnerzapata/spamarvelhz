
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
import {FavoritesComponent} from './views/home/favorites/favorites.component';


import { Ng2OrderModule } from 'ng2-order-pipe';
import {Ng2PaginationModule} from 'ng2-pagination'; // <-- import the module

import { BootstrapModalModule } from 'ng2-bootstrap-modal';
import { ConfirmComponent } from './views/home/modals/confirm.component';

import { routes } from './app.routes'

@NgModule({
   imports: [
     BrowserModule,
     RouterModule,
     HttpModule,
     routes,
     FormsModule,
     Ng2OrderModule,
     Ng2PaginationModule,
     BootstrapModalModule
   ],
   declarations: [
      AppComponent,
      HeaderComponent,
      FooterComponent,
      HomeComponent,
      SortNavComponent,
      CardListComponent,
      ConfirmComponent,
      FavoritesComponent
   ],
   entryComponents: [
        ConfirmComponent
   ],
   providers: [],
   bootstrap: [ AppComponent ]
 })

 export class AppModule { }
