import { useState } from 'react';
import './Form.css';
import ErrorIcon from '../images/icon-error.svg';

function Form() {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    password: '',
  });

  const [touchedFields, setTouchedFields] = useState({
    firstName: false,
    lastName: false,
    email: false,
    password: false,
  });

  const [errors, setErrors] = useState({
    firstName: false,
    lastName: false,
    email: false,
    password: false,
  });

  const handleInputChange = (field, value) => {
    setFormData((prevData) => ({
      ...prevData,
      [field]: value,
    }));
    setErrors((prevErrors) => ({
      ...prevErrors,
      [field]: false,
    }));
  };

  const handleFieldBlur = (field) => {
    setTouchedFields((prevTouchedFields) => ({
      ...prevTouchedFields,
      [field]: true,
    }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    // Check for empty fields
    const newErrors = {};
    for (const field in formData) {
      if (!formData[field]) {
        newErrors[field] = true;
      }
    }
    setErrors(newErrors);

    const formElement = event.target;
    if (Object.keys(newErrors).length > 0) {
      formElement.classList.add('error');
    } else {
      formElement.classList.remove('error');
    }

    // Perform form submission logic here if no errors
  };

  return (
    <div className="right-box">
      <div className="ads-box">
        <div className="title-ads-box">Try it free 7 days</div>
        <div className="subtitle-text-box">then $20/mo. thereafter</div>
      </div>

      <form className="form-box-default" onSubmit={handleSubmit}>
        <label
          className={`input-container ${
            touchedFields.firstName && !formData.firstName ? 'error' : ''
          }`}
        >
          <input
            type="text"
            placeholder="First Name"
            className={`input-field ${errors.firstName ? 'error-border' : ''}`}
            value={formData.firstName}
            onChange={(e) => handleInputChange('firstName', e.target.value)}
            onBlur={() => handleFieldBlur('firstName')}
          />
          {errors.firstName && (
            <img src={ErrorIcon} className="error-icon" alt="Error Icon" />
          )}
          {errors.firstName && (
            <div className="error-text">First Name Can not be empty</div>
          )}
        </label>

        <label
          className={`input-container ${
            touchedFields.lastName && !formData.lastName ? 'error' : ''
          }`}
        >
          <input
            type="text"
            placeholder="Last Name"
            className={`input-field ${errors.lastName ? 'error-border' : ''}`}
            value={formData.lastName}
            onChange={(e) => handleInputChange('lastName', e.target.value)}
            onBlur={() => handleFieldBlur('lastName')}
          />
          {errors.lastName && (
            <img src={ErrorIcon} className="error-icon" alt="Error Icon" />
          )}
          {errors.lastName && (
            <div className="error-text">Last Name Can not be empty</div>
          )}
        </label>

        <label
          className={`input-container ${
            touchedFields.email && !formData.email ? 'error' : ''
          }`}
        >
          <input
            type="email"
            placeholder={
              errors.email && !formData.email
                ? 'email@example/com'
                : 'Email Address'
            }
            className={`input-field ${errors.email ? 'error-border' : ''}`}
            value={formData.email}
            onChange={(e) => handleInputChange('email', e.target.value)}
            onBlur={() => handleFieldBlur('email')}
            style={{
              color: errors.email && !formData.email ? 'var(--Red)' : 'inherit'
            }}
          />
          {errors.email && (
            <img src={ErrorIcon} className="error-icon" alt="Error Icon" />
          )}
            {errors.email && (
            <div className="error-text">Email Can not be empty</div>
          )}
        </label>

        <label
          className={`input-container ${
            touchedFields.password && !formData.password ? 'error' : ''
          }`}
        >
          <input
            type="password"
            placeholder="Password"
            className={`input-field ${errors.password ? 'error-border' : ''}`}
            value={formData.password}
            onChange={(e) => handleInputChange('password', e.target.value)}
            onBlur={() => handleFieldBlur('password')}
          />
          {errors.password && (
            <img src={ErrorIcon} className="error-icon" alt="Error Icon" />
          )}
          {errors.password && (
            <div className="error-text">Password Can not be empty</div>
          )}
        </label>

        <button type="submit" className="submit-button">
          CLAIM YOUR FREE TRIAL
        </button>
      </form>
    </div>
  );
}

export default Form;
