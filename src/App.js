import React, { useState } from 'react';
import './style.css';
import 'react-phone-input-2/lib/style.css';
import PhoneInput from 'react-phone-input-2';
import 'react-phone-input-2/lib/bootstrap.css';

export default function App() {
  const [phoneNumber, setPhoneNumber] = useState('');
  const [isValid, setIsValid] = useState(true);

  const handlePhoneChange = (value, country) => {
    setPhoneNumber(value);
    setIsValid(
      country?.dialCode && value.length >= country.dialCode.length + 3
    ); // Adjust validation as needed
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (isValid) {
      // Perform your submission or further processing here
    }
  };
  return (
    <div>
      <h1>Hello StackBlitz!</h1>
      <p>Start editing to see some magic happen :)</p>

      <h1>Country Code Phone Input with Validation</h1>
      <form onSubmit={handleSubmit}>
        <PhoneInput
          country={'us'}
          value={phoneNumber}
          onChange={handlePhoneChange}
          inputStyle={{ width: '100%' }}
          isValid={isValid}
          placeholder="Enter phone number"
        />
        {!isValid && <p className="error-message">Invalid phone number</p>}
        <button type="submit" disabled={!isValid}>
          Submit
        </button>
      </form>
    </div>
  );
}
