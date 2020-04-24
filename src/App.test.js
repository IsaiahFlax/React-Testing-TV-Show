import React from 'react';
import {render} from '@testing-library/react';
import {fetchShow as mockFetchShow} from './api/fetchShow';

import App from './App';

//jest.mock('./api/fetchShow')

test('App renders', ()=>{
    render(<App />);
})