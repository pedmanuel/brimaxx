import React from 'react';
import ReactDOM from 'react-dom';
import "./index.css";
import App from './App';
import { BrowserRouter } from "react-router-dom";
import "antd/dist/antd.css";

// importaça~do redux
import { createStore } from "redux";
import { Provider } from "react-redux";
import { composeWithDevTools } from "redux-devtools-extension";
import rootReducer from './reducers';


//stores
const store = createStore(rootReducer,composeWithDevTools());

ReactDOM.render(
   
 // <React.StrictMode>
 <Provider store = {store}>
    <BrowserRouter>
      <App />
    </BrowserRouter>
    </Provider>,
  //</React.StrictMode>,
  document.getElementById('root')
);



