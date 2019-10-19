import React, { Component } from 'react'
import {Link} from 'react-router-dom'

import axios from 'axios'

export default class People extends Component {
    constructor(props) {
        super(props)

        this.state = {
            allPeople: [],
            find:''

            
        }
    }
    

    componentDidMount(){
        this.getAllProfiles()
    }

    getAllProfiles(){
        axios.get(`/api/all_profiles`).then(response => {
            this.setState({
                allPeople: response.data
            })
        })
    }

    filterPeople(value){
        this.setState({
            find:value
        })
    }
    
    render() {
        const {allPeople} = this.state
        const {find} = this.state
        console.log(this.props.match.params)
         const mapPeople = allPeople.map(people => {
            return (

                <div key= {people.tag}>
                    
                    <div>
                        <h1>{people.firstName} {people.lastName}</h1>
                        <Link to = {`/profile/${people.tag}`}><button className = 'to_profile'>{people.firstName} 's SHI</button></Link>
                    </div>
                </div>
                
            )
        })     
       
        
        return (
            <div>
                {mapPeople}
            </div>
        )
    }
}

