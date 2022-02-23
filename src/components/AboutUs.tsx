import {TitleLine, TitleEllipse, Button, ImageOverlay, Divider, Image} from './common';
import { News } from "./about";
import { useTranslation, Trans } from 'react-i18next';
import {AboutViewModel} from '../context/Model';
import {useState, useEffect} from 'react';
import { useGlobalState } from '../context/Context';
import {SlideIn, JiggleZoom, Shake, FadeIn} from "./animation";

function AboutUs(){
    const { t, i18n } = useTranslation();
    let [about, setAbout] = useState<AboutViewModel>();
    let {state, setState} = useGlobalState();
    useEffect(() => {
        initialData();
      }, []);
      useEffect(() => {
        initialData();
    }, [state.lang])
    const initialData = () => {
        setAbout(t("about", {returnObjects: true}));
    }
    return(
        <div className="min-vh-100 bg-main" style={{paddingTop:"11px"}}>
            <ImageOverlay title={about?.header ?? ""} image={process.env.PUBLIC_URL + '/assets/img/bg/banner.jpg'} customCss="align-items-center">
            </ImageOverlay>
            
            <section id="aboutSection" className="bg-main-pink-0 pb-5">
                <div className="bg-white py-5 text-center w-100 d-flex flex-column text-black">
                <SlideIn isLeft={true}>
                    <div className="fs-1 fw-bolder py-4">{about?.title ?? ""}</div>
                    </SlideIn>
                    <SlideIn isLeft={false}>
                    <div className="fs-4 py-4 w-50 mx-auto pre-lines">
                        {about?.description ?? ""}
                    </div>
                    </SlideIn>
                    <div className="py-5"></div>
                </div>

                <div className="bg-white py-5"></div>
                <div className="container d-flex flex-row py-5">
                    <div className="row py-5 w-100">
                        <div className="col-lg-7 col-12 order-lg-first order-last text-center text-lg-start py-lg-0 py-5">
                            <SlideIn isLeft={true}>
                            <div className="fs-2 fw-bolder py-4">{about?.visionTitle ?? ""}</div>
                            <div className="fs-4 pre-lines">{about?.visionDesc ?? ""}</div>
                            </SlideIn>
                            <div className="my-5"></div>
                            <SlideIn isLeft={true}>
                            <div className="fs-2 fw-bolder py-4">{about?.missionTitle ?? ""}</div>
                            <div className="fs-4 pre-lines">{about?.missionDesc ?? ""}</div>
                            </SlideIn>
                        </div>
                        
                        <div className="col-lg-5 col-12  order-lg-last order-first d-flex align-items-center align-items-lg-end">
                            <SlideIn isLeft={false}>
                            <Image image={process.env.PUBLIC_URL + '/assets/img/about/IMG_7698.JPEG'} css="mx-auto" imageStyle={{height: "650px", marginTop:"-200px", width:"389px", objectFit: "cover"}}></Image>
                            </SlideIn>
                        </div>
                    </div>
                </div>
            </section>

            <Divider />

            <section id="newsSection">
                <News news={about?.news ?? [] }/>
            </section>
        </div>
    )
}

export default AboutUs;