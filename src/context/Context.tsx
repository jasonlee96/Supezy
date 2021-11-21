import { StringifyOptions } from "querystring";
import React, {createContext, useReducer, useContext} from "react";
import { useTranslation, Trans } from 'react-i18next';

interface GlobalState{
    auth: Boolean,
    user: object | null,
    lang: string,
    error: string | null
}
interface GlobalContext{ dispatch: React.Dispatch<any>, state: GlobalState }

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
      user: null,
      error: null
    } as GlobalState,
  }: {
    children: React.ReactNode;
    value?: Partial<GlobalState>;
  }) => {
    const [state, setState] = React.useState(value);
    const { t, i18n } = useTranslation();
    React.useEffect(() => {
      i18n.changeLanguage(value.lang);
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