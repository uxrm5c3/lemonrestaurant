// BookingPage component
import React, { useState, useEffect } from "react";
import { Button, Text } from "components"; // Assuming Img component is not needed
import "./index.css";
import DropdownList from "../../components/DropdownList";
import Calendar from "../../components/calender"; // Correct import path for Calendar component

const BookingPage = () => {
  const [selectedTime, setSelectedTime] = useState("");
  const [selectedPax, setSelectedPax] = useState("");
  const [name, setName] = useState("");
  const [nameError, setNameError] = useState("");
  const [email, setEmail] = useState("");
  const [emailError, setEmailError] = useState("");
  const [selectedDate, setSelectedDate] = useState(null); // State for selected date
  const [submitEnabled, setSubmitEnabled] = useState(false);

  useEffect(() => {
    setSubmitEnabled(!!name && !!email && !!selectedTime && !!selectedPax && !!selectedDate);
  }, [name, email, selectedTime, selectedPax, selectedDate]);

  const handleSubmit = () => {
    if (!selectedTime || selectedTime === "-" || !selectedPax || selectedPax === "-" || !selectedDate) {
      alert("Please fill in all required fields");
      return;
    }
    console.log("Form submitted:", { name, email, selectedDate, selectedTime, selectedPax });
    // Redirect to homepage
    window.location.href = "/";
  };

  const handleBlur = () => {
    if (!name) {
      setNameError("Please enter your name");
    }
    if (!email) {
      setEmailError("Please enter your email");
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;

    if (name === "name") {
      setName(value);
      setNameError(value ? "" : "Please enter your name");
    }

    if (name === "email") {
      setEmail(value);
      setEmailError(value ? "" : "Please enter your email");
    }
  };

  const handleSelectDate = (date) => {
    setSelectedDate(date);
  };

  return (
    <div className="booking-page-container">
      <div className="booking-form-banner">
        <Text className="booking-page-heading" size="txtMarzakiMedium64">
          Book Your Dinner
        </Text>
      </div>

      <div className="form-field-container">
        <Text className="form-field-label" size="txtKarlaExtraBold20Black900">
          Name
        </Text>
        <input
          value={name}
          className="input-field"
          onBlur={handleBlur}
          onChange={handleChange}
          placeholder="Name"
          name="name"
        />
        {nameError && <div className="error-message">{nameError}</div>}
      </div>

      <div className="form-field-container">
        <Text className="form-field-label" size="txtKarlaExtraBold20Black900">
          Email
        </Text>
        <input
          value={email}
          className="input-field"
          onBlur={handleBlur}
          onChange={handleChange}
          placeholder="Email"
          name="email"
        />
        {emailError && <div className="error-message">{emailError}</div>}
      </div>

      <div className="form-field-container">
        <Text className="form-field-label" size="txtKarlaExtraBold20Black900">
          Select Date
        </Text>
        <Calendar onSelectDate={handleSelectDate} />
      </div>

      <div className="form-field-container">
        <Text className="form-field-label" size="txtKarlaExtraBold20Black900">
          Book Time
        </Text>
        <DropdownList
          options={["-", "6pm", "7pm", "8pm", "9pm"]}
          defaultOption="-"
          onSelect={setSelectedTime}
        />
        {selectedTime === "-" && <div className="error-message">Please select a time</div>}
      </div>

      <div className="form-field-container">
        <Text className="form-field-label" size="txtKarlaExtraBold20Black900">
          Number of Pax
        </Text>
        <DropdownList
          options={["-", "2 pax", "3-6 pax", "More than 6 pax"]}
          defaultOption="-"
          onSelect={setSelectedPax}
        />
        {selectedPax === "-" && <div className="error-message">Please select number of Pax</div>}
      </div>

      <div className="form-field-container">
        <Button
          className={`submit-button ${submitEnabled ? "enabled" : "disabled"}`}
          onClick={handleSubmit}
          disabled={!submitEnabled}
        >
          <div className="button-text">Submit</div>
        </Button>
      </div>
    </div>
  );
};

export default BookingPage;
