import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-time-converter',
  templateUrl: './time-converter.component.html',
  styleUrls: ['./time-converter.component.scss']
})
export class TimeConverterComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}


// timezone
// https://www.worldtimebuddy.com/
//  https://www.worldtimebuddy.com/ist-to-est-converter

// https://www.worldtimeserver.com/time-zones/aoe/

//  how you can find the time in different parts of the world.

// 100 years ago several countries agreed on a standard imaginary line called prime meridian(GMT)

// passing through great Britain. Greenwich is a city in great Britain.

// This was standardized because to avoid confusion and wrong calculations of time



// GMT is located at 0-degree longitude.

// India is located 82.5 degrees east of Great Britain.

// UTC(Coordinated Universal Time) is the best way to find a time zone. Currently 37 Different Local Times in Use. UTC is the common time standard across the world. (UTC) is the same as Greenwich Mean Time (GMT)/prime meridian.

// Example - IST (UTC/GMT +5:30)

// This time is used In Sri Lanka and India means  5 and half hours ahead of universal time.

// How this UTC is calculated-

// GMT line cross in London

// Time- GMT- 0degree

// date- IDL( International date line)- 180degree

// 15 degree= 1 hour= 60 minutes

// IST- 82.5 east

// GMT(0 degree)->IST(82.5degree)

// 82.5/15= 5.30

// +5:30 ahead



// Time zones are often represented by alphabetic abbreviations such as "EST", "WST", ECT and "CST". but these are not standard they may be ambiguous.  There are 24 time zones total on earth.

// some time zones are 30 or 45 minutes apart.

// How abbreviations are an ambiguous example-

// "ECT" could be interpreted as "Eastern Caribbean Time" (UTC−4h),

// "Ecuador Time" (UTC−5h) "

// European Central Time" (UTC+1h).

// PST (UTC -8)



// You can calculate time using longitude.



// "time in zone B" = "time in zone A" − "UTC offset for zone A" + "UTC offset for zone B".

// Suppose time in  new York is 9:30 EST (UTC -5). So in delhi is  9:30 - (-5) + (+5:30)= 20:00 = 8:pm

// Suppose time in india is 1:45 pm then the time in new York is 1:45 – (+5:30) + (-5) = 1:15



// 15 degree per hour= 360/24

// 12times- 0 - 12 times

// 180-150-...   0 --30 - 180

// -             /       +

// lesss - west  :  more -  east



// EGA- east gain add

// WLS - west less subtract





// Daylight saving time-



//  mobile application

// ‎Miranda — Time Zone Converter, World Clock & Meeting Scheduler

// https://countrycode.org/ 
// https://www.iban.com/country-codes 
// IST time - time zone is 10 hours, 30 minutes ahead of cst time
// US has 4 time zones				Eastern, Central, Mountain, and Pacific Standard Time.

