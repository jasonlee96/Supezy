import { ImageOverlay, Button } from "./common";
import { FAQGroups, FAQNav } from "./faqs";
import {useEffect, useState, useLayoutEffect} from "react";
import $ from "jquery";
import { useGlobalState } from "../context/Context";
import { useTranslation, Trans } from 'react-i18next';

function FAQ() {
    const { t, i18n } = useTranslation();
    const { state, setState } = useGlobalState();
    useLayoutEffect(() => {
        $('.collapse').on('show.bs.collapse', function (e) {
            ($('.collapse') as any).collapse("hide");
        });
        setState({...state, faq: t("faq", { returnObjects: true })});
      }, []);

      useLayoutEffect(() => {
        setState({...state, faq: t("faq", { returnObjects: true })});
      }, [state.lang]);
    return (
        <div className="min-vh-100 bg-main" style={{paddingTop:"11px"}}>
        <ImageOverlay title={state.faq?.title ?? "FAQ"} image={process.env.PUBLIC_URL + '/assets/img/bg/banner.jpg'} customCss="align-items-center">
        </ImageOverlay>
        <section id="FAQ">
            <div className="container my-5 bg-main-pink-0">
                <FAQNav groups={state.faq?.faqs}/>
                <div id="content" className="tab-content" role="tablist">
                    {
                        state.faq?.faqs?.map((item) => <FAQGroups group={item} key={item.id.toString()}/>)
                    }
                </div>
            </div>
        </section>
    </div>
    );
  }
  
  export default FAQ;