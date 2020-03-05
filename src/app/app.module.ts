import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';
//import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { ItemsComponent } from './items/items.component';
import { ErrorComponent } from './error.component';

const appRoutes: Routes = [
  {
    path: 'items',
    component: ItemsComponent
  },
  {
    path: 'item/:id',
    component: ItemComponent
  },
  { path: '',
    redirectTo: '/item',
    pathMatch: 'full'
  },
  { path: '**', component: ErrorComponent }
];


@NgModule({
  imports:      [
    BrowserModule, 
    FormsModule,
    //NgbModule,
    HttpClientModule,
    RouterModule.forRoot(appRoutes)
  ],
  declarations: [ 
    AppComponent, 
    ItemsComponent,
    ErrorComponent 
  ],
  bootstrap:    [ AppComponent ]
})

export class AppModule { }
