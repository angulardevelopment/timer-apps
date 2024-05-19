import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ClockComponent } from './clock/clock.component';
import { CardioComponent } from './pomodoro/cardio.component';
import { NewversionComponent } from './newversion/newversion.component';
import { TimesavingComponent } from './timesaving/timesaving.component';
import { FormsModule } from '@angular/forms';
import { TimeConverterComponent } from './time-converter/time-converter.component';
import { DateFormattingComponent } from './date-formatting/date-formatting.component';

@NgModule({
  declarations: [
    AppComponent,
    ClockComponent,
    TimesavingComponent,
    NewversionComponent,
    CardioComponent,
    TimeConverterComponent,
    DateFormattingComponent
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
