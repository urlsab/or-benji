import React from 'react';
import './Home.css';

const Home = () => {
    return(
        <div
            style={{
              backgroundImage: `url("https://www.infomed.co.il/content/images/contentworlds/303/_0028_%D7%98%D7%99%D7%A4%D7%95%D7%9C%20%D7%A4%D7%A1%D7%99%D7%9B%D7%95%D7%9C%D7%95%D7%92%D7%99.jpg.jpg")`,
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

export default Home;