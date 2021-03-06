import React from 'react';
import './Contact.css';
import {BrowserRouter as Router,NavLink} from "react-router-dom";

const Contact = () => {
    return(
        <div 
            style={{
                backgroundImage: `url("https://images.unsplash.com/photo-1512428559087-560fa5ceab42?ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mzd8fGNvbnRhY3R8ZW58MHx8MHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=60")`,
                backgroundRepeat: 'no-repeat',height:'92.8vh',color:'white',width:'100%',
              backgroundSize: 'cover',
              backgroundPosition: 'center',
              filter: 'brightness(80%)'
            }}>
                <div className="contactContainer">
                    <p className="contactText"> אצלנו נפגשים באווירה רגועה מול נופי רושלים, התהליך כולו מלווה ביחס אישי וחם מתוך מקצועיות ורגישות. במהלך הטיפול נעבור על מה שיעשה לכם טוב מתוך נתינת כלים להמשך החיים</p>
                </div> 
                <div className="miniFrame">
                    <p className="miniText">    לקביעת תור במועד פנוי  <a href="https://www.torbareshet.co.il/guest/guest_start"><b>לחץ כאן</b></a>  </p>
                    <p className="miniText">  <a href="https://mail.google.com"><b>לחץ כאן</b></a>  OrBenji123@gmail.com  לשליחת מייל לכתובת   </p>
                    <p className="miniText">רחוב יפו 56, בנין כלל קומה 12, ירושלים</p> 
                    <p className="miniText"> טלפון : 0546879495</p>
                </div>     
        </div>
    );
}

export default Contact;

// https://mail.google.com/