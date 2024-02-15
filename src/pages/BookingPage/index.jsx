import React, { useState, useEffect } from "react";
import { Button, Img, Text } from "components";
import Form, { Field } from 'rc-field-form';
import { Link } from "react-router-dom"; // Import Link from react-router-dom
import "./index.css"; // Import the CSS file

const Input = ({ value = "", focused, errorMessage, ...props }) => (
  <div className={`input-wrapper ${focused && !value && 'focused-empty'}`}>
    <input value={value} className="input-field" {...props} />
    {focused && !value && <div className="error-message">{errorMessage}</div>}
  </div>
);

const BookingPage = () => {
  const [focused, setFocused] = useState(false);
  const [name, setName] = useState("");
  const [nameError, setNameError] = useState("");
  const [email, setEmail] = useState("");
  const [emailError, setEmailError] = useState("");
  const [submitEnabled, setSubmitEnabled] = useState(false);

  useEffect(() => {
    // Update submitEnabled based on both name and email fields
    setSubmitEnabled(!!name && !!email);
  }, [name, email]);

  const handleSubmit = () => {
    // Implement logic to submit the form data
    console.log("Form submitted:", { name, email });
    // Redirect to homepage
    // window.location.href = "/";
  };

  const handleFocus = () => {
    setFocused(true);
  };

  const handleBlur = () => {
    setFocused(false);
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

  return (
    <div className="booking-page-container">
    <div className="booking-form-banner">
    <Text className="booking-page-heading" size="txtMarzakiMedium64">
        Book Your Dinner
      </Text>  </div>
  
      {/* Apply Marzaki Medium font with size 64 to the text */}
      
      <Form onSubmit={handleSubmit}>
  <div className="form-field-container">
    <Text className="form-field-label" size="txtKarlaExtraBold20Black900">
      Name
    </Text>
    <Field name="name" rules={[{ required: true, message: 'Please enter your name' }]}>
      <Input
        value={name}
        focused={focused}
        errorMessage={nameError}
        onFocus={handleFocus}
        onBlur={handleBlur}
        onChange={handleChange}
        placeholder="Name"
        name="name"
      />
    </Field>
  </div>
  <div className="form-field-container">
    <Text className="form-field-label" size="txtKarlaExtraBold20Black900">
      Email
    </Text>
    <Field name="email" rules={[{ required: true, message: 'Please enter your email' }]}>
      <Input
        value={email}
        focused={focused}
        errorMessage={emailError}
        onFocus={handleFocus}
        onBlur={handleBlur}
        onChange={handleChange}
        placeholder="Email"
        name="email"
      />
    </Field>
  </div>
  <div className="fixed bottom-4 right-4">
    {/* Using Link component to navigate back to homepage */}
    <Link to="/">
      <Button
        className={`cursor-pointer flex items-center justify-center min-w-[239px] rounded-[10px] ${submitEnabled ? "bg-blue-600" : "bg-gray-400"}`}
        leftIcon={<Img className="mb-px mr-2.5" src="images/img_save.svg" alt="save" />}
        color="light_blue_A700_26"
        onClick={handleSubmit}
        disabled={!submitEnabled}
      >
        <div className="text-[17px] text-center tracking-[-0.41px]">Submit</div>
      </Button>
    </Link>
  </div>
</Form>
    </div>
  );
};

export default BookingPage;



