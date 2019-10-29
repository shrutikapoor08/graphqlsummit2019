import React, { useContext, useReducer } from "react";
import { BrowserRouter as Router } from "react-router-dom";
import Context from '../context';
import reducer from '../reducer'

import Home from "./Home";

const App = () => {
    const initialState = useContext(Context);
    const [state,dispatch] = useReducer(reducer, initialState);
    return (
          <Router>
              <Context.Provider value={{state,dispatch}}>
                <Home />
              </Context.Provider>
          </Router>
    );
};

export default App;