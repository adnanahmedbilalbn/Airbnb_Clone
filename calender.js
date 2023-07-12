$(document).ready(function() {
    var currentDate = new Date();
    var currentMonth = currentDate.getMonth();
    var currentYear = currentDate.getFullYear();
  
    displayMonths(currentMonth, currentYear);
  
    $('.prev-btn').on('click', function() {
      currentMonth--;
      if (currentMonth < 0) {
        currentMonth = 11;
        currentYear--;
      }
      displayMonths(currentMonth, currentYear);
    });
  
    $('.next-btn').on('click', function() {
      currentMonth++;
      if (currentMonth > 11) {
        currentMonth = 0;
        currentYear++;
      }
      displayMonths(currentMonth, currentYear);
    });
  
    function displayMonths(month, year) {
      $('.calendar-dates').empty();
      var startDate = new Date(year, month, 1);
      var endDate = new Date(year, month + 1, 0);
      var prevMonthEndDate = new Date(year, month, 0).getDate();
      var startDay = startDate.getDay();
      var prevMonthDays = startDay > 0 ? startDay - 1 : 6;
  
      var prevMonthDate = prevMonthEndDate - prevMonthDays + 1;
      for (var i = 0; i < prevMonthDays; i++) {
        $('.calendar-dates').append('<div class="calendar-date prev-month">' + prevMonthDate + '</div>');
        prevMonthDate++;
      }
  
      var currentDate = 1;
      while (currentDate <= endDate.getDate()) {
        if (currentDate === new Date().getDate() && month === new Date().getMonth() && year === new Date().getFullYear()) {
          $('.calendar-dates').append('<div class="calendar-date current-day">' + currentDate + '</div>');
        } else {
          $('.calendar-dates').append('<div class="calendar-date">' + currentDate + '</div>');
        }
        currentDate++;
      }
  
      var nextMonthDate = 1;
      while ($('.calendar-date').length % 7 !== 0) {
        $('.calendar-dates').append('<div class="calendar-date next-month">' + nextMonthDate + '</div>');
        nextMonthDate++;
      }
  
      $('.month-year').text(monthName(month) + ' ' + year);
    }
  
    function monthName(month) {
      var monthNames = [
        'January', 'February', 'March', 'April', 'May', 'June',
        'July', 'August', 'September', 'October', 'November', 'December'
      ];
      return monthNames[month];
    }
  });
  