import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FormsModule }   from '@angular/forms';

import { ChartsModule } from 'ng2-charts';

import { AppComponent } from './app.component';
import { NavComponent } from './nav/nav.component';
import { AboutComponent } from './about/about.component';
import { LagrangComponent } from './lagrang/lagrang.component';
import { PracticComponent } from './practic/practic.component';
import { NewtoonComponent } from './newtoon/newtoon.component';
import { SplainComponent } from './splain/splain.component';
import { RazionalComponent } from './razional/razional.component';

const appRoutes: Routes = [
  { path: '', component: AboutComponent },
  { path: 'about', component: AboutComponent,  pathMatch: 'full' },
  { path: 'lagrang', component: LagrangComponent,  pathMatch: 'full' },
  { path: 'practic', component: PracticComponent, pathMatch: 'full' },
  { path: 'newtoon', component: NewtoonComponent, pathMatch: 'full' },
  { path: 'spline', component: SplainComponent, pathMatch: 'full' },
  { path: 'razional', component: RazionalComponent, pathMatch: 'full' }
];



@NgModule({
  declarations: [
    AppComponent,
    NavComponent,
    AboutComponent,
    LagrangComponent,
    PracticComponent,
    NewtoonComponent,
    SplainComponent,
    RazionalComponent
  ],
  imports: [
    
    BrowserModule,
    FormsModule,
    RouterModule.forRoot(
      appRoutes
    ),
    ChartsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
