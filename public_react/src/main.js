/**
 * Created by Somebody on 9/6/2018.
 */
import React from 'react';
import { submit_form } from "./asunc_calls";

export default class ChangePasswordForm extends React.Component{

    constructor(props){
        super(props);

        this.state={
            status:main
        }
    }

    render(){
        return (
            <nav class="navbar navbar-expand-md navbar-dark bg-dark">
                <div class="navbar-collapse collapse w-100 order-1 order-md-0 dual-collapse2">
                    <ul class="navbar-nav mr-auto">
                        <li class="nav-item"><a class="nav-link" href="#">Home</a></li>
                        <li class="nav-item"><a class="nav-link" onclick="User.get_users();">Users</a></li>
                        <li class="nav-item"><a class="nav-link" onclick="Book.get_books();">Book</a></li>
                    </ul>
                </div>
            </nav>
        )

    }
}
