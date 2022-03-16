var current= new Date()
var day_night=current.getHours()
if (day_night<=12)
    document.write("<img src='Day.jpeg'>")
else
    document.write("<img src='Night.jpeg'>")