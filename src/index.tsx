import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import ModalContextProvider from './contexts/ModalContext';
import LoginContextProvider from './contexts/LoginContext';
import TextImageContextProvider from './contexts/TextContext';
import MapAutocompleteContextProvider from './contexts/MapAutocompleteContext';
import LocationContextProvider from './contexts/LocationContext';
import ServiceContextProvider from './contexts/ServiceContext';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <LoginContextProvider>
    <TextImageContextProvider>
      <ModalContextProvider>
        <MapAutocompleteContextProvider>
          <LocationContextProvider>
            <ServiceContextProvider>
              <App />
            </ServiceContextProvider>
          </LocationContextProvider>
        </MapAutocompleteContextProvider>
      </ModalContextProvider>
    </TextImageContextProvider>
  </LoginContextProvider>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals

