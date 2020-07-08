$(document).ready(() => {
  // This file just does a GET request to figure out which user is logged in
  // and updates the HTML on the page
  $.get("/api/user_data").then(data => {
    $(".member-name").text(data.email);
  });
});

  const { DateTime } = require("luxon");
  let output = document.getElementById('output');
  //output.textContent = JSON.stringify(luxon.DateTime.DATETIME_FULL);

  //base object in Luxon
  //DateTime 
  // - diff(dateTime), diffNow(), equals(dateTime), hasSame(dateTime, unit), 
  // minus(duration|object|ms), plus(duration|object|ms), setLocale(), setZone(),
  // toUTC() , until(DateTime)
  // https://moment.github.io/luxon/docs/class/src/datetime.js~DateTime.html
  let today = DateTime.local();
  let f = {month: 'long', day: '2-digit'};
  let m = today.get('month');
  let tz = today.zoneName;
  //output.textContent = f;
  let newDt = today.set({month: 12});
  //for people - toLocaleString
  //output.textContent = newDt.setLocale('de').toLocaleString(f);
  //output.textContent = newDt.setLocale('fr-CA').toLocaleString(f);
  //output.textContent = today.toLocaleString();
  //output.textContent = today.toLocaleString(DateTime.DATETIME_FULL_WITH_SECONDS);
  //output.textContent = today.toFormat('yyyy LLL dd');
  $(".output").int(today);
