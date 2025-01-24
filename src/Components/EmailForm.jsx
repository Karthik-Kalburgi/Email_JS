import React, { useState } from "react";
import emailjs from "@emailjs/browser";

const EmailForm = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    const serviceId = "service_aqv46ew";
    const templateId = "template_odtrfvk";
    const publicKey = "KlO73PmloElJU-C1p";

    const templateParams = {
      from_name: name,
      from_email: email,
      to_name: "Web Wizard",
      message: message,
    };

    emailjs
      .send(serviceId, templateId, publicKey, templateParams)
      .then((response) => {
        console.log("Email Has Sent Succesfully !!!!!", response);
        setName("");
        setEmail("");
        setMessage("");
      })
      .catch((error) => {
        console.log("Error Sendind Message!!!!", error);
      });
  };

  return (
    <div>
      <div>
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            placeholder="Enter Your Name..."
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
          <input
            type="text"
            placeholder="Enter Your Email..."
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <textarea
            cols="30"
            rows="10"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
          ></textarea>
          <button>Send Email</button>
        </form>
      </div>
    </div>
  );
};

export default EmailForm;
