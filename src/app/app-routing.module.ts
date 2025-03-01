import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ClockComponent } from './clock/clock.component';
import { DateFormattingComponent } from './date-formatting/date-formatting.component';
import { NewversionComponent } from './newversion/newversion.component';
import { CardioComponent } from './pomodoro/cardio.component';
import { TimeConverterComponent } from './time-converter/time-converter.component';
import { TimesavingComponent } from './timesaving/timesaving.component';

const routes: Routes = [
  {path: 'ClockComponent', component: ClockComponent},
  {path: 'DateFormattingComponent', component: DateFormattingComponent},
  {path: 'NewversionComponent', component: NewversionComponent},
  {path: 'CardioComponent', component: CardioComponent},
  {path: 'TimeConverterComponent', component: TimeConverterComponent},
  {path: 'TimesavingComponent', component: TimesavingComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
