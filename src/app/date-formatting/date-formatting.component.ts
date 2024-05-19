import { Component, OnInit } from '@angular/core';
import { DateTime } from 'luxon';

@Component({
  selector: 'app-date-formatting',
  templateUrl: './date-formatting.component.html',
  styleUrls: ['./date-formatting.component.scss']
})
export class DateFormattingComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    this.getLocal();
  }

  getLocal(){
    const dt = DateTime.local();
console.log(dt.toISO(), 'getLocal'); // 2

const dt1 = DateTime.local().setZone('America/New_York');
console.log(dt1.toISO()); // 2023-04-19T15:25:54.023-04:00

const dt2 = DateTime.local();
console.log(dt2.toLocaleString()); // "4/19/2023, 3:25:54 PM"
console.log(dt2.toFormat('yyyy-MM-dd')); // "2023-04-19"
  }

}
