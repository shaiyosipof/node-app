/**
 * Created by Somebody on 8/6/2018.
 */

'use strict'

import BaseController from './base_controller';
import Curl from '../model/curl'
const CurlModel = new Curl();
class CurrencyController extends BaseController {
    constructor(){
        super();
    }

    async get_currency_conversion(req,res){
        const url = "/convert?q="+req.query["from"] + "_" + req.query["to"] + "&compact=y";
        console.log("test22");
        let result = await CurlModel.getCurl(process.env.CURRENCYCONVERT,url,false);
        console.log(result);
        console.log("test55");

        res.send({test:result});
        //this.send_response(res,{test:333});

    }

    async send_response(res,data) {
        await BaseController.prototype.send_response(res,data)
    }

};

export default CurrencyController;