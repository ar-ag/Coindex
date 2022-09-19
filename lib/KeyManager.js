
import Configstore from 'configstore';

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
            throw new Error('No API key found -- get api key from https://www.coinapi.io/pricing?apikey');
        }

        return key;
    }

    deleteKey() {
        const key = this.conf.get('apiKey');

        if(!key) {
            throw new Error('No API key found -- get api key from https://www.coinapi.io/pricing?apikey');
        }

        this.conf.delete('apiKey');
        return;
    }
}

