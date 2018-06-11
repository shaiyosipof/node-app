/**
 * Created by Somebody on 11/6/2018.
 */

'use strict'

const axios = require('axios');
class Curl{
    constructor(){
        var api;
    }

    async getCurl(baseUrl,url,data=false){
        this.api = axios.create({
            baseURL: baseUrl,
            timeout: process.env.TIMEOUT || 5000,
        });
        try {
            const response = await this.api.get(url);
            const key = Object.keys(response.data)[0];
            const { val } = response.data[key];
            return { rate: val };
        } catch (error) {
            console.log("Error!!");
            console.error(error);
            return null;
        }


    }

    postCurl(url,data){

    }
}

export default Curl;