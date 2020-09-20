import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

// For Data
import { BrowserAnimationsModule } from '@angular/platform-browser/animations'
import { HttpClientModule } from '@angular/common/http'
import { FormsModule } from '@angular/forms'

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { InputTestingComponent } from './input-testing/input-testing.component';
import { TaskDataComponent } from './task-data/task-data.component';

import {CoreModule} from './core/core.module'

@NgModule({
  declarations: [
    AppComponent,
    InputTestingComponent,
    TaskDataComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    HttpClientModule,
    FormsModule,
    CoreModule
  ],
  providers: [],
  bootstrap: [
    AppComponent, 
    InputTestingComponent, 
    // To be commented if not used in index.html, 
    // otherwise the one below here that is present in index.html will not work
    TaskDataComponent
  ] //Needed to add in bootstrap, to get <input-testing> working in index.html
})
export class AppModule { }
