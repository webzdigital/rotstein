import React, { Component } from 'react';
import { BrowserRouter as Router, Link } from 'react-router-dom';
import './Home.css';

import logo from './images/logo.png';
import menuLogoOne from './images/image001.png';
import menuLogoTwo from './images/image002.png';
import menuLogoThree from './images/image003.png';
import menuLogoFour from './images/image004.png';
import menuLogoFive from './images/image005.png';
import menuLogoSix from './images/image006.png';
import menuLogoSeven from './images/image007.png';
import menubgOne from './images/image008.png';
import menubgTwo from './images/image009.png';
import menubgThree from './images/image010.png';
import menubgFour from './images/image011.png';
import menubgFive from './images/image012.png';
import menubgSix from './images/image013.png';
import menubgSeven from './images/image014.png';
import logoTwo from './images/logo2.png';

import homeVideo from './video/TiratCarmel.mp4';

class Home extends Component {
	render() {
    return (
      <Router>
      <section className="homeSec">
        <div className="videoSec">
          <video width="100%" height="auto" autoPlay loop>
            <source src={homeVideo} type="video/mp4" />
          </video>
        </div>
        <div className="sec-one">
          <div className="container-fluid">
            <ul>
              <li>פטור ממדד לשנה!</li>
              <li>ליווי אדריכלי לעיצוב</li>
              <li>הטבה בשינויי דיירים!</li>
              <li>פטור משכ"ט עו"ד</li>
              <li>תנאי מימון 20/80</li>
            </ul>
          </div>
        </div>
        <div className="sec-two">
          <div className="container">
            <div className="row">
              <div className="col-md-6">
                <div className="row">
                  <div className="col-md-6 my-auto">
                    <ul className="nav-menu">
                      <li>
                      <Link to="/pageone">
                        <div className="nav-menu-wrap">
                          <div className="nav-menu-logo">
                            <img className="img-fluid" src={menuLogoOne} alt="menuLogoOne"/>
                          </div>
                          <div className="nav-menu-desc">
                            <div className="nav-menu-desc-text menuColorOne">
                              <h5>להטבות<br/>בבת ים &gt;&gt;</h5>
                              <p>לחיות יוקרה בין תל אביב לים</p>
                            </div>
                            <img className="img-fluid" src={menubgOne} alt="menubgOne"/>
                          </div>
                        </div>
                        </Link>
                      </li>
                      <li>
                        <div className="nav-menu-wrap">
                          <div className="nav-menu-logo">
                            <img className="img-fluid" src={menuLogoTwo} alt="menuLogoTwo"/>
                          </div>
                          <div className="nav-menu-desc">
                            <div className="nav-menu-desc-text menuColorTwo">
                              <h5>להטבות<br/>ברמת השרון &gt;&gt;</h5>
                              <p>יצירת מגורים מעוררת השראה</p>
                            </div>
                            <img className="img-fluid" src={menubgTwo} alt="menubgTwo"/>
                          </div>
                        </div>
                      </li>
                      <li>
                        <div className="nav-menu-wrap">
                          <div className="nav-menu-logo">
                            <img className="img-fluid" src={menuLogoThree} alt="menuLogoThree"/>
                          </div>
                          <div className="nav-menu-desc">
                            <div className="nav-menu-desc-text menuColorThree">
                              <h5>להטבות<br/>בבאר יעקב &gt;&gt;</h5>
                              <p>הזדמנות נדירה לקוטג' בגוש דן</p>
                            </div>
                            <img className="img-fluid" src={menubgThree} alt="menubgThree"/>
                          </div>
                        </div>
                      </li>
                      <li>
                        <div className="nav-menu-wrap">
                          <div className="nav-menu-logo">
                            <img className="img-fluid" src={menuLogoFour} alt="menuLogoFour"/>
                          </div>
                          <div className="nav-menu-desc">
                            <div className="nav-menu-desc-text menuColorFour">
                              <h5>להטבות<br/>בטירת כרמל &gt;&gt;</h5>
                              <p>הדור הבא של מתחמי המגורים</p>
                            </div>
                            <img className="img-fluid" src={menubgFour} alt="menubgFour"/>
                          </div>
                        </div>
                      </li>
                    </ul>
                  </div>
                  <div className="col-md-6 my-auto">
                    <ul className="nav-menu">
                      <li>
                        <div className="nav-menu-wrap">
                          <div className="nav-menu-logo">
                            <img className="img-fluid" src={menuLogoFive} alt="menuLogoFive"/>
                          </div>
                          <div className="nav-menu-desc">
                            <div className="nav-menu-desc-text menuColorFive">
                              <h5>להטבות<br/>בנתניה &gt;&gt;</h5>
                              <p>לצאת מהעיר, ולהישאר בה</p>
                            </div>
                            <img className="img-fluid" src={menubgFive} alt="menubgFive"/>
                          </div>
                        </div>
                      </li>
                      <li>
                        <div className="nav-menu-wrap">
                          <div className="nav-menu-logo">
                            <img className="img-fluid" src={menuLogoSix} alt="menuLogoSix"/>
                          </div>
                          <div className="nav-menu-desc">
                            <div className="nav-menu-desc-text menuColorSix">
                              <h5>להטבות<br/>ברמת גן &gt;&gt;</h5>
                              <p>קו ראשון לתל אביב</p>
                            </div>
                            <img className="img-fluid" src={menubgSix} alt="menubgSix"/>
                          </div>
                        </div>
                      </li>
                      <li>
                        <div className="nav-menu-wrap">
                          <div className="nav-menu-logo">
                            <img className="img-fluid" src={menuLogoSeven} alt="menuLogoSeven"/>
                          </div>
                          <div className="nav-menu-desc">
                            <div className="nav-menu-desc-text menuColorSeven">
                              <h5>להטבות<br/>בתל אביב &gt;&gt;</h5>
                              <p>קלאסיקה תל אביבית</p>
                            </div>
                            <img className="img-fluid" src={menubgSeven} alt="menubgSeven"/>
                          </div>
                        </div>
                      </li>
                    </ul>
                  </div>
                </div>
              </div> 

              <div className="col-md-6">
                <div className="logoSec">
                  <Link to="/"><img className="img-fluid" src={logo} alt="logo"/></Link>
                  <h3>הטבות סופשנה <span>חוזרות ביג טיים!</span></h3>
                  <p>רוטשטיין עם הטבות גדולות מתמיד בכל הפרויקטים שלנו ברחבי הארץ</p>
                </div>
                <form className="formSec">
                  <p>רוצה לשמוע עוד? מלא פרטים ונחזור אלייך בהקדם</p>
                  <div className="row">
                    <div className="col-md-6 mb-3">
                      <input type="text" name="firstname" placeholder="שם מלא:" />
                    </div>
                    <div className="col-md-6 mb-3">
                      <input type="email" name="email" placeholder="מייל:"/>
                    </div>
                    <div className="col-md-6">
                      <input type="text" name="phone" placeholder="טלפון:" />
                    </div>
                    <div className="col-md-6">
                      <input type="text" name="project" placeholder="פרויקט >" />
                    </div>
                    <div className="col-md-6 mt-2">
                      <img className="img-fluid" src={logoTwo} alt="logo"/>
                    </div>
                    <div className="col-md-6 mb-3">
                      <div className="row mt-2">
                        <div className="col-md-8 mb-3 py-0">
                          <label className="label-wrap">אני מאשר קבלת מידע שיווקי
                            <input type="checkbox"/>
                            <span className="checkmark"></span>
                          </label>
                        </div>
                        <div className="col-md-4 mt-2 text-right">
                          <input type="submit" name="submit" value="שלח" />
                        </div>
                      </div>

                    </div>
                  </div>
                </form>
                <div className="footText">
                  <p>ההטבות לחוזים שיחתמו עד ה- 31.12.21 בלבד!</p>
                </div>
              </div>

            </div>
          </div>
        </div>
      </section>        
    </Router>
    )
  }
}

export default Home;
