import { Component, OnInit } from '@angular/core';
import { DateTime, Settings } from 'luxon';

@Component({
  selector: 'app-date-formatting',
  templateUrl: './date-formatting.component.html',
  styleUrls: ['./date-formatting.component.scss']
})
export class DateFormattingComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    // this.getLocal();
    this.jhgbvhj();
  }

  getLocal(){
    const dt = DateTime.local();
console.log(dt.toISO(), 'getLocal'); // 2

const dt1 = DateTime.local().setZone('America/New_York');
console.log(dt1.toISO()); // 2023-04-19T15:25:54.023-04:00

const dt2 = DateTime.local();
console.log(dt2.toLocaleString()); // "4/19/2023, 3:25:54 PM"
console.log(dt2.toFormat('yyyy-MM-dd')); // "2023-04-19"

const tome = "2024-05-21T15:16:12";
const tome1 = DateTime.fromISO(tome, {zone: 'utc'})
const tome4 = "2024-05-22T15:16:12";
const tome5 = DateTime.fromISO(tome4, {zone: 'utc'})
const tome3 =  tome5.hasSame(tome1, 'day')
const tome6 = DateTime.now().toUTC();
const tome7 = DateTime.now().toLocal();

console.log(tome6,tome7, 'tome');



// Create a DateTime Object
let dateTime = DateTime.local();
console.log("Current Date", dateTime.toISO());

// Create a DateTime in a Specific Timezone
let zone = "America/Denver";
// let dateTime2 = DateTime.fromObject({
//   zone
// });
// console.log("Current Date", zone, dateTime2.toISO());

// // Create a custom date in a specific Timezone
// dateTime = DateTime.fromObject({
//   zone
// }).set({
//   day: 1,
//   month: 5,
//   year: 2021
// });
// console.log("Custom date", dateTime.toISO());

// Convert existing date to another Timezone
let dateTim3e = dateTime.setZone("America/La_Paz");
console.log("Custom date, America/La_Paz", dateTim3e.toISO());

// Set a custom timezone by default
Settings.defaultZone = "America/Denver";



dateTime = dateTime.set({
  hour: 15
});
console.log("format", dateTime.toFormat("LLL dd, yyyy, h:mm a"));
console.log("preset", dateTime.toLocaleString(DateTime.DATETIME_MED));

// Validate a time zone
const timeZone = "America/Not_Defined_TZ";
const myDateTime = DateTime.local().setZone(timeZone);
console.log("timeZone valid", myDateTime.isValid);


  }

  jhgbvhj(){
//     var d1 = DateTime.fromISO('2024-05-24').day;
//     var d2 = DateTime.fromJSDate(new Date('2024-05-24'), {zone: 'utc'});

//     let dateTime = DateTime.local().day;
    
// console.log("Configured defaultZoneName", d1 == dateTime, dateTime, d1,
//  d2.day == DateTime.local().toUTC().day);
// pass Javascript date
const jnjk = DateTime.fromISO("2024-05-24T03:16:12");
let dateTime = DateTime.local();
console.log(jnjk >= dateTime, jnjk, dateTime)

  }

}
