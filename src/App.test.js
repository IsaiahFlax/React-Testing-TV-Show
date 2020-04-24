import React from 'react';
import {render} from '@testing-library/react';
import {fetchShow as mockFetchShow} from './api/fetchShow';

import App from './App';

// test('App renders', ()=>{
//     render(<App />);
// })

jest.mock('./api/fetchShow')

test('async test', async ()=>{
    mockFetchShow.mockResolvedValueOnce({data: {
        _embedded: {
            episodes: [{
                id: 553946,
                name: 'name'
            }]
        }
    }})
})