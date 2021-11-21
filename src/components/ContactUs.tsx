import {TitleLine, TitleEllipse, Button, ImageOverlay, Divider} from './common';
import { Distributor, FeedbackForm } from "./contact";

function ContactUs(){
    return(
        <div className="min-vh-100 bg-main" style={{paddingTop:"11px"}}>
            <ImageOverlay title="Distributor List  &amp;  Contact Us" image={process.env.PUBLIC_URL + '/assets/img/img3.jpg'} customCss="align-items-center">
            </ImageOverlay>
            
            <div className="d-flex flex-row justify-content-center p-5">
                <a href="#distributorSection" className="mx-5 px-5 py-3 btn-rounded btn btn-lg bg-main-dark text-white">Checkout our Distributor</a>
                <a href="#feedbackSection" className="mx-5 px-5 py-3 btn-rounded btn btn-lg bg-main-dark text-white">Provide feedback</a>
            </div>

            <section id="distributorSection" className="bg-main-dark pb-5">
                <div className="bg-trans py-5 text-center w-100 d-flex flex-column">
                    <div className="fs-1 fw-bolder py-4">Distributor List</div>
                </div>

                <div className="bg-trans py-5 container">
                    <div className="row">
                        <Distributor image="" name="Jason Lee" position="Position" whatsapp="0187849195" instagram="smileyx96"></Distributor>
                        <Distributor image="" name="Kam Wai Hong" position="Position" whatsapp="0187849195" instagram="smileyx96"></Distributor>
                        <Distributor image="" name="Cinderella Wong" position="Position" whatsapp="0187849195" instagram="smileyx96"></Distributor>
                        <Distributor image="" name="Name" position="Position" whatsapp="0187849195" instagram="smileyx96"></Distributor>
                        <Distributor image="" name="Name" position="Position" whatsapp="0187849195" instagram="smileyx96"></Distributor>
                        <Distributor image="" name="Name" position="Position" whatsapp="0187849195" instagram="smileyx96"></Distributor>
                    </div>
                </div>
            </section>

            <section id="feedbackSection">
                <FeedbackForm></FeedbackForm>
            </section>
        </div>
    )
}

export default ContactUs;