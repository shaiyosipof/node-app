/**
 * Created by Somebody on 8/6/2018.
 */

'use strict'

import UserController from '../controller/user_controller';
import BookController from '../controller/book_controller';
import CurrencyController from '../controller/currency_controller';
const user_controller = new UserController();
const book_controller = new BookController();
const currencyController = new CurrencyController();
module.exports = function(app){
    app.get("/user",user_controller.get_user);

    app.get("/users",user_controller.get_all_users);

    app.get("/books",book_controller.get_all_books);

    app.post("/buy_book",book_controller.get_book_price,user_controller.add_book_to_user);

    app.get("/convert_currency",currencyController.get_currency_conversion);

    /*app.get("/save_book",book_controller.set_book);

    app.get("/save_user_to_book",book_controller.get_book,user_controller.save_book_user);*/
};