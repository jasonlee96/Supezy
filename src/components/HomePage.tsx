import "./style/home.css";
import {TitleLine, TitleEllipse, Button, ImageOverlay, Divider} from './common';
import { Quotes, HomeProduct, Benefit } from './home';
import { useState } from "react";
import { Waypoint } from 'react-waypoint';
import {useSpring, animated as a} from 'react-spring'
import { useTranslation, Trans } from 'react-i18next';

function HomePage() {
    const { t, i18n } = useTranslation();
    return (
      <div className="min-vh-100 bg-main" style={{paddingTop:"4px"}}>
          <div id="carouselExampleControls" className="carousel slide" >
            <div className="carousel-inner home-carousel">
                <div className="carousel-item active">

                        <div className="bg-test">
                        </div>
 
                </div>
                <div className="carousel-item">

                <img className="d-block w-100 home-carousel-item" src={process.env.PUBLIC_URL + '/assets/img/img2.jpg'} alt="Second slide" />

                </div>
                <div className="carousel-item">
                <img className="d-block w-100 home-carousel-item" src={process.env.PUBLIC_URL + '/assets/img/img3.jpg'} alt="Third slide" />
                </div>
            </div>
            <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="prev">
                <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                <span className="visually-hidden">Previous</span>
            </button>
            <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="next">
                <span className="carousel-control-next-icon" aria-hidden="true"></span>
                <span className="visually-hidden">Next</span>
            </button>
            </div>
         
        <Divider />

        <section id="quoteSection">
            <Quotes title={t("home.quotes.title")} author={t("home.quotes.author")}>
                <div className="fs-4">
                    “{t("home.quotes.description")}”
                </div>
            </Quotes>
        </section>

        <Divider />

        <section id="productSection" >
            <HomeProduct />
        </section>

        <Divider />
        
        <section id="benefitSection"  className="pb-5 mb-5">
            <Benefit />
        </section>
         </div>
    );
  }
  
  export default HomePage;