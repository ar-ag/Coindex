import {KeyManager} from '../lib/KeyManager.js';

// const KeyManager = require('../lib/KeyManager');
import inquirer from 'inquirer';
// const colors = require ('colors');
import color from 'colors';
import ansi from '../node_modules/ansi-colors-es6/index.js';
import { isRequired } from '../utils/validation.js';

export const key = {
    async set() {
        const keyManager = new KeyManager();
        const input = await inquirer.prompt([
            {
                type:'input',
                name:'key',
                message:('Enter API key').blue+ ' https://www.coinapi.io/pricing?apikey',
                validate: isRequired
            }
        ]);

        const key = keyManager.setKey(input.key);
        if(key) {
            console.log(('API key set').green);
        }

    },

    show() {
        try {
            const keyManager = new KeyManager();
            const key = keyManager.getKey();
            console.log('Current API key is:',key.yellow);
            return key;


        } catch (err) {
            console.error(err.message.red);

        }
    },

    remove() {
        try {
            const keyManager = new KeyManager();
            keyManager.deleteKey();
            console.log('API key removed'.blue);
            return;


        } catch (err) {
            console.error(err.message.red);

        }
    }
};

