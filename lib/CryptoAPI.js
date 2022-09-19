import axios from 'axios';
// const axios = require('axios');
// import { axios } from 'axios';
// import axios from '../node_modules/@bundled-es-modules/axios.js';
// import pkg from 'axios';
 // const {axios} = pkg;
// import {color} from 'colors';

export class CryptoAPI {
    constructor(apiKey) {
        this.apiKey = apiKey;
        this.baseUrl = 'https://rest.coinapi.io/v1/exchangerate';
        

    }
    
    async getPriceData(coinOption, currOption) {
        try {
            const res = await axios.get(`${this.baseUrl}/${coinOption}/${currOption}?apikey=${this.apiKey}` );
            
            const output = res.data;
            
            
            return output;
        } catch (error) {
         
            console.error(error);
        }
        
    }
}