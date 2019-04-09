import React from 'react';
import { render } from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import { addLocaleData, IntlProvider } from 'react-intl';
import en from './../node_modules/react-intl/locale-data/en';
import store from './store';
import App from './app';

addLocaleData(en);

const renderLandingPage = async () => {
  const messages = {}; // this messages are traslations.
  render(
    <IntlProvider locale="en" messages={messages}>
      <Provider store={store}>
        <BrowserRouter>
          <App />
        </BrowserRouter>
      </Provider>
    </IntlProvider>,
    document.getElementById('app')
  );
};

renderLandingPage();
