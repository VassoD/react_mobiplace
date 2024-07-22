import React, { useState } from "react";

function Input(props) {
  function handleChange(event) {
    const value = event.target.value;
    const id = props.ID.toString();
    let isValid = true;

    if (id === "name") {
      isValid = /^[A-Za-z]+$/.test(value);
    } else if (id === "email") {
      isValid =
        /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(
          value
        );
    }

    const borderStyle = isValid
      ? "border-bottom: 0.1rem solid #00e600"
      : "border-bottom: 1px solid red";
    document.getElementById(id).style = borderStyle;

    props.onChange(value);
  }

  return (
    <input
      autoComplete="off"
      type={props.type}
      placeholder={props.hint}
      id={props.ID}
      onChange={handleChange}
      value={props.value}
    />
  );
}

function Button(props) {
  return (
    <input id={props.ID} type="submit" value="Submit" onClick={props.onClick} />
  );
}

function Contact() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [submitStatus, setSubmitStatus] = useState("");

  function validateForm() {
    return (
      /^[A-Za-z]+$/.test(name) &&
      /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(
        email
      ) &&
      message.trim().length > 0
    );
  }

  function handleSubmit(e) {
    e.preventDefault();
    if (validateForm()) {
      // Here we would typically send the form data to a server
      console.log("Form submitted with:", { name, email, message });
      setSubmitStatus("Form submitted successfully!");
      // Reset form fields
      setName("");
      setEmail("");
      setMessage("");
    } else {
      setSubmitStatus("Please fill all fields correctly.");
    }
  }

  return (
    <div className="formmain">
      <div className="leftcontact">
        <img src="./images/form.png" alt="form" />
      </div>
      <form className="main-form" onSubmit={handleSubmit}>
        <h1>Contact Us</h1>
        <br />

        <div>
          <label>Name</label>
          <br />
          <Input
            hint="Enter your name"
            type="text"
            ID="name"
            value={name}
            onChange={setName}
          />
        </div>

        <div className="form-element">
          <label>Email</label>
          <br />
          <Input
            hint="Enter your email"
            type="email"
            ID="email"
            value={email}
            onChange={setEmail}
          />
        </div>

        <div className="form-element">
          <label>Message</label>
          <br />
          <textarea
            id="msg"
            rows="5"
            placeholder="Questions/comments..."
            value={message}
            onChange={(e) => setMessage(e.target.value)}
          ></textarea>
        </div>

        <Button ID="submit" onClick={handleSubmit}>
          Submit
        </Button>

        {submitStatus && <p className="submit-status">{submitStatus}</p>}
      </form>
    </div>
  );
}

export default Contact;
