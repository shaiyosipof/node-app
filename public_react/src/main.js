/**
 * Created by Somebody on 9/6/2018.
 */
import React from 'react';
import { render } from 'react-dom';
import { BrowserRouter } from 'react-router-dom'
import { submit_form } from "./asunc_calls";
import Header from "./component/header";
import { Switch, Route } from 'react-router-dom'
import Main from "./component/app";
export default class MainForm extends React.Component{

    constructor(props){
        super(props);

        this.state={
            status:"main",
            page:"main"
        }
    }

    render(){
        return(
        <div>
            <Header />
            <Main />
        </div>)
    }


}


render(

    <BrowserRouter>
    <MainForm>
    </MainForm>
    </BrowserRouter>,
    document.getElementById('app')
);
