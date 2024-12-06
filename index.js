const calendarContainer = document.getElementById('calendar');

// Create an array of day objects
const days = Array.from({ length: 24 }, (_, i) => ({
  id: i + 1,
  isOpen: false,
}));

for (let i = 1; i <= 24; i++) {
  let box = document.createElement('li');
  box.classList.add('calendar-box');
  let number = document.createElement('p');
  number.innerHTML = i;
  const icon = document.createElement('i');
  icon.classList.add('fas', 'fa-gift');
  let description = document.createElement('p');
  description.innerHTML = "Open me!";
  box.appendChild(number);
  box.appendChild(icon);
  box.appendChild(description);
  calendarContainer.appendChild(box);
}

// Update the day objects when a day is clicked
calendarContainer.addEventListener('click', (event) => {
  if (event.target.closest('.calendar-box')) {
    const dayId = event.target.closest('.calendar-box').querySelector('p').textContent;
    const day = days.find((day) => day.id === parseInt(dayId));
    if (day) {
      day.isOpen = !day.isOpen;
      // Update the UI to reflect the new state
      event.target.closest('.calendar-box').classList.toggle('open');
    }
  }
});

// Update the UI to reflect the initial state of the days
days.forEach((day) => {
  const dayElement = calendarContainer.querySelector(`.calendar-box p:contains(${day.id})`).closest('.calendar-box');
  if (dayElement) {
    if (day.isOpen) {
      dayElement.classList.add('open');
    }
  }
});