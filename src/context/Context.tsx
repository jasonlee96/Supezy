import { StringifyOptions } from "querystring";
import React, {createContext, useReducer, useContext} from "react";
import { useTranslation, Trans } from 'react-i18next';

interface GlobalState{
    auth: Boolean,
    user: object | null,
    lang: string,
    isLoad: Boolean,
    error: string | null,
    faq : FAQViewModel | null
}

interface GlobalContext{ dispatch: React.Dispatch<any>, state: GlobalState }

export interface FAQViewModel{
  title: string,
  faqs: Array<FAQGroup>
}

export interface FAQGroup{
  id: Number,
  group_title: string,
  group_items: Array<FAQ>,
  is_default: boolean
}
 export interface FAQ{
  id: Number,
  question: string,
  answer: string
}

const GlobalStateContext = createContext({
    state: {

    } as Partial<GlobalState>,
    setState: {} as React.Dispatch<React.SetStateAction<Partial<GlobalState>>>,
  });

const GlobalStateProvider = ({
    children,
    value = {
      auth: false,
      lang: "cn",
      isLoad: false,
      user: null,
      error: null,
      faq: null
    } as GlobalState,
  }: {
    children: React.ReactNode;
    value?: Partial<GlobalState>;
  }) => {
    const setFAQObject = ()=>{
      setState({...state, faq: t("faq", {returnObjects: true})});
    }
    const [state, setState] = React.useState(value);
    const { t, i18n } = useTranslation();
    React.useEffect(() => {
      var lng = localStorage.getItem("supezy-lang");
      if(lng) value.lang = lng;
      i18n.changeLanguage(value.lang);
      setFAQObject();
    }, []);
    return (
      <GlobalStateContext.Provider value={{ state, setState }}>
        {children}
      </GlobalStateContext.Provider>
    );
  };
  
  const useGlobalState = () => {
    const context = useContext(GlobalStateContext);

    if (!context) {
      throw new Error("useGlobalState must be used within a GlobalStateContext");
    }
    return context;
  };

export { GlobalStateProvider, useGlobalState };