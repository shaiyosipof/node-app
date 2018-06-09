/**
 * Created by Somebody on 8/6/2018.
 */

'use strict'


import BaseController from './base_controller';
import User from '../model/user';
const user_model = new User();
class UserController extends BaseController {

    constructor(){
        super();
    };

    get_user(req,res){
        let user;
        console.log(req.query["user_id"])
        if(req.query["user_id"] === undefined){
            user = user_model.get_user_by_name(req.query["user_name"])
        }

        else
            user = user_model.get_user(req.query["user_id"])
        super.send_response(res,user);

    };
    save_user(){
        console.log("test_save_user");
    };
    get_all_users(req,res){
        let all_users = user_model.get_users();
        super.send_response(res,all_users);
    };

    add_book_to_user(req,res){
        console.log("book price : " + req.book_price);
        let user_new_data = user_model.add_book_to_user(req.body.user_id,req.book_price)
        super.send_response(res,user_new_data);

    }
}

export default UserController;