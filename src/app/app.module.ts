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
/*
import { TableModule } from 'primeng/table';
import { MenubarModule } from 'primeng/menubar';
*/

import { MatInputModule } from '@angular/material/input';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatSortModule } from '@angular/material/sort';
import { MatTableModule } from '@angular/material/table';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatSliderModule } from '@angular/material/slider';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { MatButtonToggleModule } from '@angular/material/button-toggle';
import { MatSelectModule } from '@angular/material/select';


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
    /*MenubarModule,
    TableModule,*/
    HttpClientModule,

    MatInputModule,
    MatPaginatorModule,
    MatProgressSpinnerModule,
    MatSortModule,
    MatTableModule,
    MatIconModule,
    MatButtonModule,
    MatCardModule,
    MatFormFieldModule,
    MatSliderModule,
    MatSlideToggleModule,
    MatButtonToggleModule,
    MatSelectModule,

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

export class AppModule { 
  constructor() {
  }
}
