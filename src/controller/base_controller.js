/**
 * Created by Somebody on 8/6/2018.
 */

'use strict';


class BaseController{

    constructor(){

    }

    send_response(res,data){
        res.send({
            error_code:0,
            error_desc:"",
            data:data
        })
    }
};


export default BaseController