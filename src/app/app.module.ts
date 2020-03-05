import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { AppComponent } from './app.component';
import { Tab1Component } from './tab1.component';
import { Tab2Component } from './tab2.component';
import { Tab3Component } from './tab3.component';
import { ErrorComponent } from './error.component';

const appRoutes: Routes = [
  {
    path: 'tab1',
    component: Tab1Component,
    data: { title: 'Tab 1' }
  },
  {
    path: 'tab2',
    component: Tab2Component,
    data: { title: 'Tab 2' }
  },
  {
    path: 'tab3',
    component: Tab3Component,
    data: { title: 'Tab 3' }
  },
  /*{ path: '',
    redirectTo: '/tab1',
    pathMatch: 'full'
  },*/
  { path: '**', component: ErrorComponent }
];


@NgModule({
  imports:      [
    BrowserModule, 
    FormsModule,
    NgbModule,
    RouterModule.forRoot(
      appRoutes,
      { enableTracing: true } // <-- debugging purposes only
    )
  ],
  declarations: [ 
    AppComponent, 
    Tab1Component, 
    Tab2Component, 
    Tab3Component, 
    ErrorComponent 
  ],
  bootstrap:    [ AppComponent ]
})

export class AppModule { }
