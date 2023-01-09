import React from "react";
import store from "./store/store";
import Todu from "./Todu/index";
import {Provider} from 'react-redux'


function App() {
  return (
    <div>
      <Provider store={store}>
      <Todu />
    </Provider>
    </div>
  );
}

export default App;
