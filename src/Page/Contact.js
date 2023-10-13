import React, { useState } from "react";
import "./Contact.css";
import ReCAPTCHA from "react-google-recaptcha";

function Contact() {
  const [data,setData]=useState({
    customerName:"",
    customerEmail:"",
    customerPhone:"",
    customerNote:""
  })
  const handleInputChange=(e)=>{
    const { name, value } = e.target;
    setData({...data,[name]:value})
    
  }
  const config={
    Username:"connect@tractionshastra.com",
    Password:"E6A2B4EA967F0BDFBE109EC9ACF7F1674E79",
    Host:"smtp.elasticemail.com",
    Port:2525,
    To : 'them@website.com',
    From : "you@isp.com",
    Subject : "This is the subject",
    Body : "And this is the body"
  }
  const [verified,setVerified]= useState(false)

  function onChange(value) {
    console.log("Captcha value:", value);
    setVerified(true)
  }
  return (
    <>
      <div className="contact-us">
        <form action="#">
          <label htmlFor="customerName">
            NAME <em>&#x2a;</em>
          </label>
          <input
            id="customerName"
            name="customerName"
            required=""
            type="text"
            onChange={handleInputChange}
            value={data.customerName}
          />
          <label htmlFor="customerEmail">
            EMAIL <em>&#x2a;</em>
          </label>
          <input
            id="customerEmail"
            name="customerEmail"
            required=""
            type="email"
            onChange={handleInputChange}
            value={data.customerEmail}
          />
          <label htmlFor="customerPhone">PHONE</label>
          <input
            id="customerPhone"
            name="customerPhone"
            pattern="[0-9]{3}-[0-9]{3}-[0-9]{4}"
            type="tel"
            onChange={handleInputChange}
            value={data.customerPhone}
          />
          <label htmlFor="orderNumber">ORDER NUMBER</label>
          <input id="orderNumber" name="orderNumber" type="text" />
          <label htmlFor="customerNote">
            YOUR MESSAGE <em>&#x2a;</em>
          </label>
          <textarea
            id="customerNote"
            name="customerNote"
            required=""
            rows="4"
            onChange={handleInputChange}
            value={data.customerNote}
          ></textarea>
          <h3>Please provide all the information about your issue you can.</h3>
          <label htmlFor="spamProtection">
            SPAM PROTECTION <em>&#x2a; </em>
            <span>
              &nbsp;&nbsp;&nbsp;&nbsp;What day comes before July 11th?
            </span>
          </label>
          <input id="spamProtection" name="spamProtection" type="text" />
          <ReCAPTCHA
    sitekey="6LdxYnwoAAAAAPn4yzzK6Tv0JokKed3zFFxZsbgV"
    onChange={onChange}
  />
          <button id="customerOrder" disabled={!verified}>SUBMIT</button>
        </form>
      </div>
    </>
  );
}

export default Contact;
