import React from 'react';
import './Home.css';

const Home = () => {
    return(
        <div
            style={{
              backgroundImage: `url("https://www.infomed.co.il/content/images/contentworlds/303/_0028_%D7%98%D7%99%D7%A4%D7%95%D7%9C%20%D7%A4%D7%A1%D7%99%D7%9B%D7%95%D7%9C%D7%95%D7%92%D7%99.jpg.jpg")`,
              backgroundRepeat: 'no-repeat',height:'92.8vh',color:'white',width:'100%',
              backgroundSize: 'cover',
              backgroundPosition: 'center',
              filter: 'brightness(80%)'
            }}>
                <div className="homeContainer">
                  <h1 className="homeHeader"> אור בנג'י </h1>
                  <h1 className="homeHeader"> טקסט לדוגמא  </h1>
                  <h3 className="homeMiniHeader">פסיכותרפיסט, מטפל זוגי ומאמן אישי</h3>
                  <h6 className="homeText">   אור בנג'י הוא בוגר מצטיין של תואר ראשון בפסיכולוגיה ופילוסופיה מהאוניברסיטה העברית. במהלך התואר רכש נסיון רב בטיפול קיבל המלצות חמות מאנשי מקצוע ומרצים באוניברסיטה</h6>
                </div> 
        </div>
  );
}

export default Home;