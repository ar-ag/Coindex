import {KeyManager} from '../lib/KeyManager.js';
import {CryptoAPI} from '../lib/CryptoAPI.js';
import color from 'colors';

export const check = {
    async price(cmd) {
        try {
            const keyManager = new KeyManager();
            const key = keyManager.getKey();

            const api = new CryptoAPI(key);
            
            const priceOutputData = await api.getPriceData(cmd.coin, cmd.curr);
            console.log(`${cmd.coin} rate in ${cmd.curr} is ${priceOutputData.rate}`.red);
        } catch (error) {
            console.log(error.message);
        }
    }
}