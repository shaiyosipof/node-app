/**
 * Created by Somebody on 8/6/2018.
 */
'use strict'

class User{
    constructor(){
        this.stab = { "users":
            [
                {id:1,name:"shai",age:"23",cash:"4500"},
                {id:2,name:"nirit",age:"24",cash:"3800"},
                {id:3,name:"avi",age:"45",cash:"7800"}
            ]
        }
    }
    get_users(){
        return this.stab;
    }
    get_user(user_id){
        return this.get_user_by_param(user_id,"id");
    }

    get_user_by_name(user_name){
        return this.get_user_by_param(user_name,"name");
    }
    set_user(user_id,){

    }

    add_book_to_user(user_id,price){
        let user = this.get_user_by_param(user_id);
        user["cash"] -= price;
        return user;
    }

    get_user_by_param(value,param="id"){ //should be private function ??
        let item;
        this.stab["users"].forEach(function(arrayItem){
            if(arrayItem[param]==value){
                item = arrayItem;
            }
        });
        return item;
    }
};

export default User