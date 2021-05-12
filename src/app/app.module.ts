import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ClockComponent } from './clock/clock.component';
import { CardioComponent } from './pomodoro/cardio.component';
import { NewversionComponent } from './newversion/newversion.component';
import { TimesavingComponent } from './timesaving/timesaving.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    ClockComponent,
    TimesavingComponent,
    NewversionComponent,
    CardioComponent
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
