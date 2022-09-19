import axios from 'axios';

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
