import {thunk, action} from 'easy-peasy';

import fs from 'fs';

export default {
    Gemeindebriefe: 'test',
    loadGemeindebriefe: action((state) => {
        state.Gemeindebriefe = 'jdlkjsadalkdjal';
        //fs.readdirSync('./pages/assets/Gemeindebriefe')
    })
};
