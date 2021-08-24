import React from 'react';
import './Types.css';

const Types = () => {
    return(
        <div
            style={{
              backgroundImage: `url("https://www.lawtip.co.il/wp-content/uploads/2017/01/wsi-imageoptim-e2808fe2808fconsultation-with-psychologist.jpg")`,
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

export default Types;