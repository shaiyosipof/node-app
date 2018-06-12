/**
 * Created by Somebody on 12/6/2018.
 */


import React from 'react'
import {submit_form} from '../asunc_calls'
import { Link } from 'react-router-dom'


class User extends React.Component{
    constructor(props) {
        super(props);

        this.state = {
            posts: []
        };
    }

    componentDidMount() {
        submit_form("http://localhost:3000/users",false,(data,status)=>{
            console.log(data.data.data.users);
            let user_data = data.data.data.users;
            this.setState({ user_data });
            console.log(this.state);
        });
    }

    render() {
        if(this.state.user_data) {
            console.log("test");
            return <div>
                <ul>
                    {this.state.user_data.map(data => <li key={data.id}>{data.name}) </li>)}
                </ul>
            </div>
        }else{
            return "";
        }

    }
}

export default User