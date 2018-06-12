/**
 * Created by Somebody on 12/6/2018.
 */


import React from 'react'
import {submit_form} from '../asunc_calls'
import { Link } from 'react-router-dom'

const Book2 = (props) => {


        get_users = () =>{ // fix the bind issue that you have in order to set the state.
            submit_form("http://localhost:3000/books",false).then(res=>{
                this.setState({ ...this.state, books: res });
            });
        };

    return (
        <div>
            {this.state.books}
        </div>
    )
}

export default Book2