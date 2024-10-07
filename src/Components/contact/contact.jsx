import React from "react";
import "./contact.css";
import theme from "../../asserts/theme.png";


const Contact =()=>{
   


  const onSubmit = async (event) => {
    event.preventDefault();
    const formData = new FormData(event.target);

    formData.append("access_key", "78d5f26d-d1c4-4ce5-a79a-96b5d54aa681");

    const object = Object.fromEntries(formData);
    const json = JSON.stringify(object);

    const res = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json"
      },
      body: json
    }).then((res) => res.json());

    if (res.success) {
        alert("Email have been send successfully")
      console.log("Success", res);
    }
  };

 


    return(
        <div className="contact" id="contact">
            <div className="contact-title">
                <h1>Get in Contact</h1>
                <img src={theme} width="60%" alt=""/>
            </div>
            <div className="contact-section">
                <div className="contact-left">
                    <h1>Let's talk</h1>
                    <p>I'm currently available to take on new project, so feel free to send me a message about anything that you want me to work on. You can contact anytime.
                    </p>
                    <div className="contact-details">
                        <div className="contact-detail">
                        <i class="fa-regular fa-envelope"></i> <p>rani9457101710@gmail.com</p>

                        </div>
                        <div className="contact-detail">
                        <i class="fa-regular fa-phone"></i> <p>+91 9318498694</p>
                            
                        </div>
                        <div className="contact-detail">
                        <i class="fa-regular fa-location-dot"></i> <p>Ghaziabad, Uttar Pradesh, India</p>
                            
                        </div>
                    </div>

                </div>

                <form onSubmit={onSubmit} action="#" method="post" className="contact-right">
                    <label htmlFor="Your-name" > Your Name</label>
                    <input type="text" name ="name" placeholder="Enter Your name"/>

                    <label htmlFor="">Your Email</label>
                    <input type="email" name="email" placeholder="enter your Email" />

                    <label htmlFor="" >Write your message</label>
                    <textarea name="message" placeholder="drop your message here..."  rows="10" cols="60">
                        </textarea>
                    <button className="contact-submit" type="submit">Submit Now</button>


                </form>
            </div>
        </div>
    )
}

export default Contact;
