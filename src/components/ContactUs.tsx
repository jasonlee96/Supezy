import { useEffect, useState } from 'react';
import {TitlePage, TitleEllipse, Button, ImageOverlay, Divider} from './common';
import { Distributor, FeedbackForm } from "./contact";
import {useGlobalState} from '../context/Context';
import {Contact} from '../context/Model';
import { useTranslation, Trans } from 'react-i18next';

function ContactUs(){
    const { t, i18n } = useTranslation();
    let [contact, setContact] = useState<Contact>();
    let {state, setState} = useGlobalState();
    useEffect(() => {
        initialData();
      }, []);
      useEffect(() => {
        initialData();
    }, [state.lang]);
    const initialData = () => {
        setContact(t("contact", {returnObjects: true}));
    }
    return(
        <div className="min-vh-100 bg-main" style={{paddingTop:"48px", overflowX: "clip"}}>
            <TitlePage title={contact?.title ?? ""}></TitlePage>
            {/* <ImageOverlay title={contact?.title ?? ""} image={process.env.PUBLIC_URL + '/assets/img/bg/banner.jpg'} customCss="align-items-center">
            </ImageOverlay> */}
            
            {/* <div className="d-flex flex-row justify-content-center p-5">
                <a href="#distributorSection" className="mx-5 px-5 py-3 btn-rounded btn btn-lg bg-main-dark text-white">Checkout our Distributor</a>
                <a href="#feedbackSection" className="mx-5 px-5 py-3 btn-rounded btn btn-lg bg-main-dark text-white">Provide feedback</a>
            </div> */}

            <section id="distributorSection" className="bg-main-dark pb-5">
                <div className="bg-trans py-5 pb-0 text-center w-100 d-flex flex-column">
                    <div className="fs-1 fw-bolder py-4">{contact?.distributorTitle ?? ""}</div>
                </div>

                <div className="bg-trans py-5 pt-0 container">
                    <div className="row">
                        {contact?.distributors.map(item => 
                                <Distributor image={item.icon} name={item.name} position={item.position} whatsapp={item.whatsapp} instagram={item.instagram} key={item.instagram}></Distributor>
                            )}
                    </div>
                </div>
            </section>

            <section id="feedbackSection">
                <FeedbackForm feedback={contact?.feedback} contact={contact?.contact}></FeedbackForm>
            </section>
        </div>
    )
}

export default ContactUs;