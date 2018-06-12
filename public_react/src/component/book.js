/**
 * Created by Somebody on 12/6/2018.
 */


import React from 'react'
import {submit_form} from '../asunc_calls'
import { Link } from 'react-router-dom'


class Book extends React.Component{
    constructor(props) {
        super(props);

        this.state = {
            posts: []
        };
    }

    componentDidMount() {
        submit_form("http://localhost:3000/users",false,(data,status)=>{
            this.setState({ ...this.state, users: data });
        });
    }

    render() {
        return (
            <div>
                {this.state.users}
            </div>
        );
    }
}

export default Book