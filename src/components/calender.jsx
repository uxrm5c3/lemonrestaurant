
import React, { useState } from 'react';
import "./calender.css";

const Calendar = ({ onSelectDate }) => {
  const [selectedDate, setSelectedDate] = useState(null);
  const [currentYear, setCurrentYear] = useState(new Date().getFullYear());
  const [currentMonth, setCurrentMonth] = useState(new Date().getMonth());

  const daysOfWeek = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
  const monthsOfYear = [
    'January', 'February', 'March', 'April', 'May', 'June',
    'July', 'August', 'September', 'October', 'November', 'December'
  ];

  const renderDaysOfMonth = () => {
    const date = new Date(currentYear, currentMonth, 1);
    const daysInMonth = new Date(currentYear, currentMonth + 1, 0).getDate();
    const firstDayOfMonth = date.getDay();
    const blankDays = Array(firstDayOfMonth).fill(null);

    const days = [...blankDays, ...Array.from({ length: daysInMonth }, (_, i) => i + 1)];

    return days.map((day, index) => {
      const currentDate = new Date(currentYear, currentMonth, day);
      const isDisabled = currentDate < new Date(); // Check if the date is before today
      const isSelected = selectedDate && currentDate.toDateString() === selectedDate.toDateString();

      return (
        <div
          key={index}
          id={`day-${day}`}
          className={`day ${isDisabled ? 'disabled' : ''} ${isSelected ? 'selected-day' : ''}`}
          onClick={() => !isDisabled && handleSelectDay(currentDate)}
        >
          {day}
        </div>
      );
    });
  };

  const handleSelectDay = (date) => {
    setSelectedDate(date);
    onSelectDate(date);
  };

  const handlePrevMonth = () => {
    setCurrentMonth(prevMonth => {
      if (prevMonth === 0) {
        setCurrentYear(year => year - 1);
        return 11;
      } else {
        return prevMonth - 1;
      }
    });
  };

  const handleNextMonth = () => {
    setCurrentMonth(prevMonth => {
      if (prevMonth === 11) {
        setCurrentYear(year => year + 1);
        return 0;
      } else {
        return prevMonth + 1;
      }
    });
  };

  return (
    <div className="calendar">
      <div className="calendar-header">
        <div className="arrow" onClick={handlePrevMonth}>&lt;</div>
        <div className="month-year">{monthsOfYear[currentMonth]} {currentYear}</div>
        <div className="arrow" onClick={handleNextMonth}>&gt;</div>
      </div>
      <div className="calendar-days">
        {daysOfWeek.map((day) => (
          <div key={day} className="day-of-week">{day}</div>
        ))}
        {renderDaysOfMonth()}
      </div>
    </div>
  );
};

export default Calendar;
