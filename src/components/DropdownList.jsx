
import React, { useState } from "react";

const DropdownList = ({ title, options = [], defaultOption, onSelect }) => {
  const [selectedOption, setSelectedOption] = useState(defaultOption || (options.length > 0 ? options[0] : null));

  const handleSelect = (e) => {
    const selectedValue = e.target.value;
    setSelectedOption(selectedValue);
    onSelect(selectedValue);
  };

  return (
    <div className="dropdown-container">
      <label className="form-field-label">{title}</label>
      <select
        value={selectedOption}
        onChange={handleSelect}
      >
        {options.map((option, index) => (
          <option key={index} value={option}>
            {option}
          </option>
        ))}
      </select>
    </div>
  );
};

export default DropdownList;


