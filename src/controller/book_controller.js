/**
 * Created by Somebody on 8/6/2018.
 */

'use strict'

import BaseController from './base_controller';
import Book from '../model/book';
const Book_model = new Book();
class BookController extends BaseController {
    constructor(){
        super();
    }
    save_book() {
    }

    get_book() {
    }

    get_all_books(req,res) { // getAllBooks
        let all_books = Book_model.get_books()
        super.send_response(res,all_books);
    }

    get_book_price(req,res,next){ //getBookPrice
        let book_price = Book_model.get_book_price(req.body.book_id);
        req.book_price=book_price;
        next();
    }
};

export default BookController;