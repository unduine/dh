import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { DynamicTableComponent } from './components/dynamic-table/dynamic-table.component';

@NgModule({
  imports: [
    BrowserModule
  ],
  declarations: [ 
    AppComponent,
    DynamicTableComponent
  ],
  bootstrap:[
    AppComponent
  ]
})
export class AppModule { }
