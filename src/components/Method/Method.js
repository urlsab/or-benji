import React from 'react';
import './Method.css';

const Method = () => {
    return(
        <div
            style={{
            backgroundImage: `url("https://images.unsplash.com/photo-1464029902023-f42eba355bde?ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8dGhlcmFwaXN0fGVufDB8fDB8fA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=60")`,
            backgroundRepeat: 'no-repeat',height:'93.2vh',color:'white',width:'100%',
              backgroundSize: 'cover',
              backgroundPosition: 'center',
              filter: 'brightness(80%)'
            }}>
                <div className="container">
                    <p className="text"> אצלנו נפגשים באווירה רגועה מול נופי רושלים, התהליך כולו מלווה ביחס אישי וחם מתוך מקצועיות ורגישות. במהלך הטיפול נעבור על מה שיעשה לכם טוב מתוך נתינת כלים להמשך החיים</p>
                </div>     
        </div> 
    );
}

export default Method;