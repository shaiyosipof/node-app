/**
 * Created by Somebody on 12/6/2018.
 */

import React from 'react'
import { Link } from 'react-router-dom'


const Header = () => (
    <div class="navbar navbar-expand-md navbar-dark bg-dark">
        <nav class="navbar-collapse collapse w-100 order-1 order-md-0 dual-collapse2">
            <ul class="navbar-nav mr-auto">
                <li class="nav-item"><Link to='/'>Home</Link></li>
                <li class="nav-item"><Link to='/users'>Users</Link></li>
                <li class="nav-item"><Link to='/books'>Books</Link></li>
            </ul>
        </nav>
    </div>
)

export default Header