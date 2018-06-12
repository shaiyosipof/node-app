/**
 * Created by Somebody on 13/6/2018.
 */

import React from 'react'
import { Switch, Route } from 'react-router-dom'
import User from "./users";
import Book from "./book";
import Home from "./home";

// The Main component renders one of the three provided
// Routes (provided that one matches). Both the /roster
// and /schedule routes will match any pathname that starts
// with /roster or /schedule. The / route will only match
// when the pathname is exactly the string "/"
const App = () => (
    <main>
        <Switch>
            <Route exact path='/' component={Home}/>
            <Route path='/users' component={User}/>
            <Route path='/books' component={Book}/>
        </Switch>
    </main>
)

export default App
