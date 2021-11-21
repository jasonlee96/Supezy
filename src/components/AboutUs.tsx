import {TitleLine, TitleEllipse, Button, ImageOverlay, Divider} from './common';
import { News } from "./about";

function AboutUs(){
    return(
        <div className="min-vh-100 bg-main" style={{paddingTop:"11px"}}>
            <ImageOverlay title="ABOUT SUPEZY" image={process.env.PUBLIC_URL + '/assets/img/img3.jpg'} customCss="align-items-center">
            </ImageOverlay>
            
            <section id="aboutSection" className="bg-main-pink-0 pb-5">
                <div className="bg-white py-5 text-center w-100 d-flex flex-column text-black">
                    <div className="fs-1 fw-bolder py-4">Who we are?</div>
                    <div className="fs-4 py-4 w-50 mx-auto">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Porro corporis corrupti earum saepe placeat neque culpa error possimus id esse tempora harum et rerum veniam sapiente, sunt ullam nobis. Ratione.</div>
                    <div className="py-5"></div>
                </div>

                <div className="bg-white py-5"></div>
                <div className="container d-flex flex-row py-5">
                    <div className="row py-5 w-100">
                        <div className="col-lg-7 col-12 order-lg-first order-last text-center text-lg-start py-lg-0 py-5">
                            <div className="fs-2 fw-bolder py-4">Another Title</div>
                            <div className="fs-4">Description...</div>
                        </div>
                        <div className="col-lg-5 col-12  order-lg-last order-first">
                            <div className="bg-main-darker mx-auto" style={{height: "650px", marginTop:"-200px", width:"360px"}}></div>
                        </div>
                    </div>
                </div>
            </section>

            <Divider />

            <section id="newsSection">
                <News />
            </section>
        </div>
    )
}

export default AboutUs;