/**
 * Created by Somebody on 8/6/2018.
 */

'use strict'

class Book{
    constructor(){
        this.stab = {"books":
                    [
                        {id:1,name:"sasamy2",price:350},
                        {id:2,name:"my name is moshe",price:150},
                        {id:3,name:"this is how we do it",price:600}
                    ]}
    }

    get_books(){
        return this.stab;
    }

    get_book_by_id(book_id){
        return this.get_book_by_item(book_id);
    }

    get_book_price(book_id){
        return this.get_book_by_item(book_id)["price"];
    }


    get_book_by_item(value,param='id'){
        let x;
        this.stab["books"].forEach(function(array_items){
            if(array_items[param]==value)
                x = array_items;
        });
        return x;
    }
};

export default Book;
