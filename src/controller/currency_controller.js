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
        let result = await CurlModel.getCurl(process.env.CURRENCYCONVERT,url,false);
        super.send_response(res,result);

    }

};

export default CurrencyController;