import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { MetronomeComponent } from './metronome.component';
import { ErrorComponent } from './error.component';

import { RouterModule, Routes } from '@angular/router';

const appRoutes: Routes = [
  {
    path: 'tab1',
    component: AppComponent,
    data: { title: 'Tab 1' }
  },
  { path: '',
    redirectTo: '/heroes',
    pathMatch: 'full'
  },
  { path: '**', component: ErrorComponent }
];


@NgModule({
  imports:      [
    BrowserModule, 
    FormsModule,
    RouterModule.forRoot(
      appRoutes,
      { enableTracing: true } // <-- debugging purposes only
    )
  ],
  declarations: [ AppComponent, MetronomeComponent ],
  bootstrap:    [ AppComponent ]
})

export class AppModule { }
