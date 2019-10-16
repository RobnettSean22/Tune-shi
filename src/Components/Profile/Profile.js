import React, { Component } from 'react'
import Posts from '../Posts/Posts'
import axios from 'axios'


class Profile extends Component {
    constructor(props){
        super(props)
        this.state = {
            profile: null
        }
    }
     
    componentDidMount(){
        this.getProfile(this.props.match.params.tag)
    }

    getProfile(tag){
        axios.get(`/api/profile/${tag}`).then(response => {
            console.log(response)
            this.setState({
                profile:response.data
            })
        })
    }

    render() {
        console.log(this.props.match.params.tag);
        const {profile} = this.state
        
               
      
        //post tage will be below the lastname as a props
        return (
            <div>
            <div key={profile && profile.tag}>
            <div> {profile && profile.tag}</div>
            <div>{profile && profile.firstName}</div>
            <div>{profile && profile.lastName}</div>
             {profile && <Posts 
            messages = {profile.posted}
             />}
        </div>
            </div>
        )
    }
}

export default Profile
