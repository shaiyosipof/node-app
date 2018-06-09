/**
 * Created by Somebody on 8/6/2018.
 */

'use strict'


var assert = require("assert"); // core module
var User = require('../src/model/user.js');  // our module
User = new User();


describe('get user', function(){
    describe('Module User', function(){
        it('should have a get_user_by_param Method', function(){
            assert.equal(typeof User, 'object');
            assert.equal(typeof User.get_user_by_param, 'function');
        });

        it('get_user_by_param(1,"id") should equal {id:1,name:"shai",age:"23",cash:"4500"}', function(){
            assert.deepEqual(User.get_user_by_param(1,"id"), {id:1,name:"shai",age:"23",cash:"4500"});
        });

        it('get_user_by_param("shai","name") should equal {id:1,name:"shai",age:"23",cash:"4500"}', function(){
            assert.deepEqual(User.get_user_by_param(1,"id"), {id:1,name:"shai",age:"23",cash:"4500"});
        });
    });
});