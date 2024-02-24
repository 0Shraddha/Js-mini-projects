document.addEventListener("DOMContentLoaded", function () {
    var calendarEl = document.getElementById("calendar");
    let draggableEl = document.getElementById("mydraggable");
    var calendar = new FullCalendar.Calendar(calendarEl, {
      initialView: "dayGridMonth",
      selectable: true,
      titleFormat: { year: "numeric", month: "long" },
      headerToolbar: {
        left: "prev,next",
        center: "title",
        right: "dayGridMonth,timeGridWeek,timeGridDay,listWeek", // user can switch between the two
      },
      dayMaxEventRows: true, // for all non-TimeGrid views
      views: {
        timeGrid: {
          dayMaxEventRows: 2, // adjust to 2 only for timeGridWeek/timeGridDay
        },
      },
      events: [
        {
          title: "Internship",
          start: "2024-02-20",
          end: "2024-02-23",
          allDay: false,
          url: "http://www.google.com",
        },
        {
          title: "Assignment",
          start: "2024-02-24",
          color: "yellow",
          textColor: "black",
        },
        {
          title: "Bath",
          start: "2024-02-24",
          color: "yellow",
          textColor: "black",
        },
        {
          title: "Cleaning",
          start: "2024-02-24",
          color: "yellow",
          textColor: "black",
        },
        {
          title: "Rest and chill",
          start: "2024-02-24",
          color: "yellow",
          textColor: "black",
        },
      ],
      droppable: true,
    });
    calendar.render();
    let draggable = new Draggable(draggableEl);
    new Draggable(draggableEl, {
      eventData: {
        title: "Internship",
        duration: "02:00",
      },
    });
  });