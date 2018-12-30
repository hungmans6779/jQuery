 var today = new Date();
   var hrs = today.getHours();
   var day= today.getDay();
  var dayname;
  if (day == 0) dayname="Sunday";
  if (day == 1) dayname="Monday";
  if (day == 2) dayname="Tuesday";
  if (day == 3) dayname="Wednesday";
  if (day == 4) dayname="Thursday";
  if (day == 5) dayname="Friday";
  if (day == 6) dayname="Saturday";
  dayStr = today.toLocaleString();
  var mytime=dayname+&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;+dayStr;
  