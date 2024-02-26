import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import { Provider as Localizationpro} from './Components/Context/localization';
import App from './App';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Localizationpro>
        <App />
      </Localizationpro>
    </BrowserRouter>
  </React.StrictMode>
);

