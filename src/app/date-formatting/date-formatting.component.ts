import { Component, OnInit } from '@angular/core';
import { DateTime, Settings } from 'luxon';

@Component({
  selector: 'app-date-formatting',
  templateUrl: './date-formatting.component.html',
  styleUrls: ['./date-formatting.component.scss'],
})
export class DateFormattingComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {
    // this.time();
    this.utilities();
  }

  time() {
    // Convert existing date to another Timezone
    DateTime.local().setZone('America/New_York').toISO(); // 2023-04-19T15:25:54.023-04:00
    const dt2 = DateTime.local();
    console.log(dt2.toLocaleString()); // "4/19/2023, 3:25:54 PM"
    console.log(dt2.toFormat('yyyy-MM-dd')); // "2023-04-19"
    // pass Javascript date
    const tome1 = DateTime.fromISO('2024-05-21T15:16:12', { zone: 'utc' });
    DateTime.fromISO('2024-05-22T15:16:12', { zone: 'utc' }).hasSame(
      tome1,
      'day'
    );
    DateTime.now().toUTC();
    DateTime.now().toLocal();

    // Create a DateTime Object
    let dateTime = DateTime.local();
    console.log('Current Date', dateTime.toISO());

    // Create a DateTime in a Specific Timezone
    let zone = 'America/Denver';
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

    // Set a custom timezone by default
    Settings.defaultZone = 'America/Denver';

    dateTime = dateTime.set({
      hour: 15,
    });
    console.log('format', dateTime.toFormat('LLL dd, yyyy, h:mm a'));
    console.log('preset', dateTime.toLocaleString(DateTime.DATETIME_MED));

    // Validate a time zone
    const timeZone = 'America/Not_Defined_TZ';
    const myDateTime = DateTime.local().setZone(timeZone);
    console.log('timeZone valid', myDateTime.isValid);
  }

  utilities() {
    DateTime.fromISO('2024-05-24').day;
    DateTime.fromJSDate(new Date('2024-05-24'), { zone: 'utc' });
    DateTime.local().day;
    DateTime.local().toUTC().day;
    DateTime.utc().get('hour');
  }
}
