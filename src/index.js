import React from 'react';
import ReactDOM from 'react-dom';
import { SpeechProvider } from '@speechly/react-client';

import { Provider } from './context/context';
import App from './App';
import './index.css';

ReactDOM.render(
    <SpeechProvider appId='e03b8857-88e3-4968-a7a3-798a4ea5c9e8' language='en-US'>
        <Provider>
            <App />
        </Provider>
    </SpeechProvider>, 
    document.getElementById('root')
);