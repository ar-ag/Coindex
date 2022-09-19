
import Configstore from 'configstore';
// const Configstore = require('configstore');
// const key = require('../commands/key');
// const pkg = require('../package.json')
import pkg from '../package.json' assert {type:'json'};

export class KeyManager {
    constructor() {
        this.conf = new Configstore(pkg.name);
    }

    setKey(key) {
        this.conf.set('apiKey', key);
        return key;
    }

    getKey() {
        const key = this.conf.get('apiKey');

        if(!key) {
            throw new Error('No API key found -- get api key from https://nomics.com');
        }

        return key;
    }

    deleteKey() {
        const key = this.conf.get('apiKey');

        if(!key) {
            throw new Error('No API key found -- get api key from https://nomics.com');
        }

        this.conf.delete('apiKey');
        return;
    }
}

// module.exports = KeyManager;