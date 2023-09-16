import { useState } from "react";

import "./App.css";

function App() {
  const [useForm, setUseForm] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
  });

  const [useFormErrors, setUseFormErrors] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
  });

  const inputHandler = (e) => {
    const { value, name } = e.target;
    setUseForm({
      ...useForm,
      [name]: value,
    });
  };

  const submitHandler = (e) => {
    e.preventDefault();
    errorHandler();
  };

  const errorHandler = () => {
    const emailRegex = /^([a-zA-Z0-9._%-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,})$/;
    const errors = {};
    if (useForm.firstName.trim() === "") {
      errors.firstName = "First Name cannot be empty";
    }

    if (useForm.lastName.trim() === "") {
      errors.lastName = "Last Name cannot be empty";
    }

    if (!emailRegex.test(useForm.email)) {
      errors.email = "Looks like this is not an email";
    }

    if (useForm.password.trim() === "") {
      errors.password = "Password cannot be empty";
    }
    setUseFormErrors(errors);
  };

  return (
    <div className="body-container">
      <div className="text-content">
        <h1>Learn to code by watching others</h1>
        <p>
          See how experienced developers solve problems in real-time. Watching
          scripted tutorials is great, but understanding how developers think is
          invaluable.
        </p>
      </div>
      <div>
        <div className="free-container">
          Try it free 7 days <span>then $20/mo. thereafter</span>
        </div>
        <form onSubmit={submitHandler}>
          <input
            onChange={inputHandler}
            name="firstName"
            type="text"
            placeholder="First Name"
            value={useForm.firstName}
          />
          {useFormErrors.firstName && (
            <span className="error">{useFormErrors.firstName}</span>
          )}
          <input
            onChange={inputHandler}
            name="lastName"
            type="text"
            placeholder="Last Name"
            value={useForm.lastName}
          />
          {useFormErrors.lastName && (
            <span className="error">{useFormErrors.lastName}</span>
          )}
          <input
            onChange={inputHandler}
            name="email"
            type="text"
            placeholder="Email Address"
            value={useForm.email}
          />
          {useFormErrors.email && (
            <span className="error">{useFormErrors.email}</span>
          )}
          <input
            onChange={inputHandler}
            name="password"
            type="password"
            placeholder="Password"
            value={useForm.password}
          />
          {useFormErrors.password && (
            <span className="error">{useFormErrors.password}</span>
          )}
          <button type="submit">CLAIM YOUR FREE TRIAL</button>
          <p>
            By clicking the button, you are agreeing to our{" "}
            <span>Terms and Services</span>
          </p>
        </form>
      </div>
    </div>
  );
}

export default App;
