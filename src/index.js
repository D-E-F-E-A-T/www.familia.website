import React from 'react';
import ReactDOM from 'react-dom';
import { AppContainer } from 'react-hot-loader';

import RegisterServiceWorker from '~/utils/registerServiceWorker';
import App from './app';

const render = (Component) => {
    ReactDOM.render(
        <AppContainer>
            <Component />
        </AppContainer>,
        document.getElementsByTagName('main')[0],
    );
};

render(App);

if (module.hot) module.hot.accept('./app', () => { render(App); });

RegisterServiceWorker();

