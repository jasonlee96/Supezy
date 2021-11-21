import {
    Route,
    Redirect
  } from "react-router-dom";
import { useGlobalState } from "../../context/Context";


function AuthRoute ({children, ...rest}) {
    const { state, setState } = useGlobalState();
    console.log(state);
    return (
        <Route
          {...rest}
          render={({ location }) =>
            state.auth ? (
              children
            ) : (
              <Redirect
                to={{
                  pathname: "/adminlogin",
                  state: { from: location }
                }}
              />
            )
          }
        />
      );
  }

export default AuthRoute;