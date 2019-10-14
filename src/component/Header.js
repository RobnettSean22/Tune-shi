import React, { Component } from 'react'
import './Header.css'

export default class Header extends Component {
    

    render() {
        return (
            <div>
             <header>
                <nav>
                    <div className = 'left'>Tune Shi</div>
                    <div className = 'right'>
                    <ul>
                        <li><a href="http:https://www.facebook.com/sean.robnett1">my SHI</a></li>
                        <li><a href="http://">find SHI</a></li>
                        <li><a href="http://">dope SHI</a></li>
                    </ul>
                    </div>
                </nav>
             </header>
            </div>
        )
    }
}


