import "./style/home.css";
import {Image, Divider, Background, BackgroundBase, InLineComponent} from './common';
import { Quotes, HomeProduct, Benefit } from './home';
import { useState, useEffect } from "react";
import { useTranslation, Trans } from 'react-i18next';
import {HomeViewModel} from '../context/Model';
import { useGlobalState } from "../context/Context";
import {JiggleZoom, FadeIn, Shake, SlideIn} from "./animation";

function HomePage() {
    const { t, i18n } = useTranslation();
    let [home, setHome] = useState<HomeViewModel>();
    let {state, setState} = useGlobalState();
    useEffect(() => {
        initialData();
      }, []);

    useEffect(() => {
        initialData();
    }, [state.lang])

    const initialData = () => {
        setHome(t("home", {returnObjects: true}));
    }

    return (
      <div className="min-vh-100 bg-main" style={{paddingTop:"4px"}}>
          <div id="carouselExampleControls" className="carousel slide" >
            <div className="carousel-inner home-carousel">
                <div className="carousel-item active">
                    <div className="bg-test">
                        <FadeIn css="position-relative w-100 h-100">
                            <Background 
                                image={process.env.PUBLIC_URL + '/assets/img/bg/opa-nuts.png'}
                                imageStyle={{
                                width: "700px",
                                height: "700px",
                                backgroundSize:"1500px",
                                backgroundPosition: "bottom",
                                backgroundRepeat: "no-repeat"
                                }}
                                css="w-100 h-100">
                                    <FadeIn delay={2500} css="position-relative w-100 h-100">
                                    <Background 
                                        image={process.env.PUBLIC_URL + '/assets/img/bg/cherry.png'}
                                        imageStyle={{
                                            width: "700px",
                                        height: "700px",
                                        backgroundSize:"250px",
                                        backgroundPosition: "right bottom",
                                        backgroundRepeat: "no-repeat",
                                        display: "flex"
                                        }}
                                        css="w-100 h-100">
                                            <FadeIn delay={3500} css="position-relative w-100 h-100">
                                            <Background 
                                                image={process.env.PUBLIC_URL + '/assets/img/bg/cherry.png'}
                                                imageStyle={{
                                                width: "700px",
                                                height: "700px",
                                                backgroundSize:"250px",
                                                backgroundPosition: "100px 100px",
                                                backgroundRepeat: "no-repeat"
                                                }}
                                                css="w-100 h-100">
                                                <FadeIn delay={4500} css="position-relative w-100 h-100 d-flex justify-content-center align-items-center">    
                                                <BackgroundBase color="#FEC5BB" imageStyle={{
                                                    maxWidth: "600px",
                                                    maxHeight: "600px",
                                                    margin: "auto"
                                                }}>
                                                <FadeIn delay={5500} css="position-relative w-100 h-100">
                                                    <Shake>  
                                                    <Image image={process.env.PUBLIC_URL + '/assets/img/products/SDM_3.png'} imageStyle={{

                                                    }} css=""></Image>
                                                    </Shake>
                                                </FadeIn>
                                                </BackgroundBase>
                                                </FadeIn>
                                            </Background>
                                            </FadeIn>
                                    </Background>
                                    </FadeIn>
                                </Background>

                        </FadeIn>      
                    </div>
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
            <Quotes title={t("home.quotes.title", "")} author={t("home.quotes.author")}>
                <div className="spz-large-font cn-sp-font letter-space">
                    “{t("home.quotes.description")}”
                </div>
            </Quotes>
        </section>

        <Divider />

        <section id="productSection" >
            <HomeProduct header={home?.product.header ?? ""} title={home?.product.title ?? ""} description={home?.product.description ?? ""} href={home?.product.href ?? ""} buttonText={home?.product.buttonText ?? ""}/>
        </section>

        <Divider />
        <InLineComponent title={home?.whySupezy.header ?? ""} subtitle={home?.whySupezy.description ?? ""} titleCss="text-black" color="">
            {home?.whySupezy.items.map(item => 
                <SlideIn>
                    <div className="mx-lg-2 mx-auto px-2" style={{minWidth: "200px", maxWidth: "250px"}}>
                    <div className="text-center py-4 rounded">
                        <Image image={process.env.PUBLIC_URL + item.icon ?? ""} css={"d-flex mx-auto "} />
                        </div>
                    <div className="text-center text-main fw-bold fs-5 py-3">{item.description}</div>
                    </div>
                </SlideIn>    
            )}
                

            </InLineComponent>
            {/* <Divider/>
        <section id="benefitSection"  className="pb-5 mb-5">
            <Benefit benefit={home?.benefit}/>
        </section> */}
         </div>
    );
  }
  
  export default HomePage;