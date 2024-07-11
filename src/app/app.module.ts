import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { EventLernComponent } from './Learnig-topics/event-lern/event-lern.component';
import { TwoWayBindingComponent } from './Learnig-topics/two-way-binding/two-way-binding.component';

@NgModule({
  declarations: [
    AppComponent,
    EventLernComponent,
    TwoWayBindingComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
