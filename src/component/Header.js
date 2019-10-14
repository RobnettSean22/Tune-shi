import React, { Component } from 'react'
import './Header.css'

export default class Header extends Component {
    

    render() {
        return (
            <div>
             <header>
                <div className = 'left'>Logo</div>
                <div className = 'right'>
                    <ul>
                        <li>my shi</li>
                        <li>find shi</li>
                        <li>dope shi</li>
                    </ul>
                </div>
             </header>
            </div>
        )
    }
}


