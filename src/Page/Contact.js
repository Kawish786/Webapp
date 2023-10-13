import React, { useState } from "react";
import "./Contact.css";
import ReCAPTCHA from "react-google-recaptcha";

function Contact(props) {
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
  const handleClick=(e)=>{
    e.preventDefault()
    const {customerName, customerEmail, customerNote, customerPhone} =data;
    if(!customerName ||!customerEmail||!customerNote|| !customerPhone){
      props.showAlert("All fields are reuired","danger")
    }
    else{
      
    const config={
      SecureToken:"dcf1aec6-2e21-4a3a-bcc1-fb06900b8934",
      To : 'connect@tractionshastra.com',
      From : data.customerEmail,
      Subject : "FeedBack From Customer (Assignment)",
      Body : `${data.customerName} is connected to you and completed the assignment you have given and my email is ${data.customerEmail}
              my phone number is ${data.customerPhone} <br/> Below you can check about me ${data.customerNote}  `
    }
    if(window.Email){
      window.Email.send(config).then((message)=>props.showAlert("Feedback Submitted Successfully","success"))

    }
    }
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
          <button id="customerOrder"  onClick={handleClick}>SUBMIT</button>
        </form>
      </div>
    </>
  );
}

export default Contact;
