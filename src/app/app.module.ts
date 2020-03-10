import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { FormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { ItemsComponent } from './items/items.component';
import { ItemComponent } from './item/item.component';
import { HeaderComponent } from './header/header.component';
import { ErrorComponent } from './error.component';

import { MenubarModule } from 'primeng/menubar';

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
    redirectTo: '/items',
    pathMatch: 'full'
  },
  { path: '**', component: ErrorComponent }
];


@NgModule({
  imports:[
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    MenubarModule,
    HttpClientModule,
    RouterModule.forRoot(appRoutes),
  ],
  declarations: [ 
    AppComponent, 
    ItemsComponent,
    ItemComponent,
    HeaderComponent,
    ErrorComponent,
  ],
  bootstrap:    [ AppComponent ]
})

export class AppModule { }
