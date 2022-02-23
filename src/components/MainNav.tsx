import { useEffect } from 'react';
import { useTranslation, Trans } from 'react-i18next';
import { useGlobalState } from "../context/Context";

function MainNav() {
    const { t, i18n } = useTranslation();
    const { state, setState } = useGlobalState();
    const changeLanguage = (lang) => {
        setState({...state, lang: lang});
        localStorage.setItem("supezy-lang", lang);
        i18n.changeLanguage(lang);
    }
    
  return (
        <>
        <nav className="navbar navbar-expand-lg fixed-top navwc-main-darker py-3 shadow" id="mainNav">
            <div className="container">
                <a className="navbar-brand" href={process.env.PUBLIC_URL +"/"}><img src={process.env.PUBLIC_URL + '/assets/img/logo.png'} alt="Text Logo" style={{width:"100px", height:"70px"}}/></a>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarResponsive" aria-controls="navbarResponsive" aria-expanded="false" aria-label="Toggle navigation">
                    Menu
                    <i className="fas fa-bars ms-1"></i>
                </button>
                <div className="collapse navbar-collapse" id="navbarResponsive">
                    <ul className="navbar-nav text-uppercase ms-auto py-4 py-lg-0">
                        <li className="nav-item px-4 active"><a className="nav-link" href={process.env.PUBLIC_URL +"/"}>{t("nav.Home")}</a></li>
                        <li className="nav-item px-4 active"><a className="nav-link" href={process.env.PUBLIC_URL +"/about"}>{t("nav.AboutUs")}</a></li>
                        <li className="nav-item px-4 active"><a className="nav-link" href={process.env.PUBLIC_URL +"/product/peachnut"}>{t("nav.Product")}</a></li>
                        <li className="nav-item px-4 active"><a className="nav-link" href={process.env.PUBLIC_URL +"/contact"}>{t("nav.ContactUs")}</a></li>
                        <li className="nav-item px-4 active"><a className="nav-link" href={process.env.PUBLIC_URL +"/faq"}>{t("nav.FAQ")}</a></li>
                        <li className="nav-item px-4 dropdown">
                            <a className="nav-link dropdown-toggle"  href="#" id="langDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false" >
                                {t("Language")}
                            </a>
                            <div className="dropdown-menu" aria-labelledby="langDropdown">
                                <a className="dropdown-item" onClick={() => changeLanguage("cn")}>中文</a>
                                <a className="dropdown-item" onClick={() => changeLanguage("en")}>EN</a>
                            </div>
                        </li>
                        
                    </ul>
                </div>
            </div>
        </nav>
        <div style={{paddingTop: "4rem"}} className="bg-main" id="page-top"></div>
        </>
  );
}

export default MainNav;
