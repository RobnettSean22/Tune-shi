import React, { Component } from 'react'
import {Link} from 'react-router-dom'

import axios from 'axios'

class People extends Component {
    constructor(props) {
        super(props)

        this.state = {
            allPeople: []
            
        }
    }
    

    componentDidMount(){
        this.getAllProfiles()
    }

    getAllProfiles(){
        axios.get(`/api/all_profiles`).then(response => {
            this.setState({
                allPeople: response.data, 
            })
        })
    }
    
    render() {
        const {allPeople} = this.state
         const mapPeople = allPeople.map(people => {
            return (

                <div key= {people.tag}>
                
                    <h1>{people.firstName}</h1>
                    <h1>{people.lastName}</h1>
                    <Link to = {`/profile/${people.tag}`}>{people.firstName} SHI</Link>
                </div>
                
            )
        })
 ///posted should be put below the last name and passed as a props.       
        return (
            <div>
                {mapPeople}
            </div>
        )
    }
}

export default People
