// BIG BEN IMAGES ARE IN HTML
const BNimage = [  // add path to directory if necessary
"Core_int_studio/Workshop/The_Archive/Final/img/image-00.jpg", 
// 12am-1am
"Core_int_studio/Workshop/The_Archive/Final/img/image-01.jpg", 
// 1am-2am
"Core_int_studio/Workshop/The_Archive/Final/img/image-02.jpg", 
// 2am-3am
"Core_int_studio/Workshop/The_Archive/Final/img/image-03.jpg", 
// 3am-4am
"Core_int_studio/Workshop/The_Archive/Final/img/image-04.jpg", 
// 4am-5am
"Core_int_studio/Workshop/The_Archive/Final/img/image-05.jpg", 
// 5am-6am
"Core_int_studio/Workshop/The_Archive/Final/img/image-06.jpg", 
// 6am-7am
"Core_int_studio/Workshop/The_Archive/Final/img/image-07.jpg", 
// 7am-8am
"Core_int_studio/Workshop/The_Archive/Final/img/image-08.jpg", 
// 8am-9am
"Core_int_studio/Workshop/The_Archive/Final/img/image-09.jpg", 
// 9am-10am
"Core_int_studio/Workshop/The_Archive/Final/img/image-10.jpg", 
// 10am-11am
"Core_int_studio/Workshop/The_Archive/Final/img/image-11.jpg", 
// 11am-12pm
"Core_int_studio/Workshop/The_Archive/Final/img/image-12.jpg", 
// 12pm-1pm
"Core_int_studio/Workshop/The_Archive/Final/img/image-13.jpg", 
// 1pm-2pm
"Core_int_studio/Workshop/The_Archive/Final/img/image-14.jpg", 
// 2pm-3pm
"Core_int_studio/Workshop/The_Archive/Final/img/image-15.jpg", 
// 3pm-4pm
"Core_int_studio/Workshop/The_Archive/Final/img/image-16.jpg", 
// 4pm-5pm
"Core_int_studio/Workshop/The_Archive/Final/img/image-17.jpg", 
// 5pm-6pm
"Core_int_studio/Workshop/The_Archive/Final/img/image-18.jpg", 
// 6pm-7pm
"Core_int_studio/Workshop/The_Archive/Final/img/image-19.jpg", 
// 7pm-8pm
"Core_int_studio/Workshop/The_Archive/Final/img/image-20.jpg", 
// 8pm-9pm
"Core_int_studio/Workshop/The_Archive/Final/img/image-21.jpg", 
// 9pm-10pm
"Core_int_studio/Workshop/The_Archive/Final/img/image-22.jpg",
// 10pm-11pm
"Core_int_studio/Workshop/The_Archive/Final/img/image-23.jpg"
// 11pm-12am // NOTE: no comma after last entry
]
const currentDate = new Date(); 
const currentHour = currentDate.getHours(); // this will return a number between 0 and 23
const currentImage = BNimage[currentHour];
    
