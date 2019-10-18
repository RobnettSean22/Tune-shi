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
                    
                    <h1>{people.firstName}</h1>
                    <h1>{people.lastName}</h1>
                    <Link to = {`/profile/${people.tag}`}>{people.firstName} SHI</Link>

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

