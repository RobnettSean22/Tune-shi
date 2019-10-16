import React, { Component } from 'react'
import Posts from '../Posts/Posts'
import axios from 'axios'


class Profile extends Component {
    constructor(props){
        super(props)
        this.state = {
            profile: []
        }
    }
     
    componentDidMount(){
        this.getProfile()
    }

    getProfile(tag){
        axios.get(`/api/profiles/${tag}`).then(response => {
            this.setState({
                profile:response.data
            })
        })
    }

    render() {
        console.log(this.props.match.params.tag);
        const {profile} = this.state
        const mapPerson = profile.map(person => {
            return (
                <div key = {person.tag}>
                    <div>{person.firstName}</div>
                    <div>{person.lastName}</div>
                    <Posts 
                    messages = {person.posted}
                     />
                </div>
            )
        })
        //post tage will be below the lastname as a props
        return (
            <div>
                {mapPerson}
            </div>
        )
    }
}

export default Profile
