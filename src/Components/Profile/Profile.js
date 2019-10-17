import React, { Component } from 'react'
import Posts from '../Posts/Posts'
import axios from 'axios'
import './Profile.css'


class Profile extends Component {
    constructor(props){
        super(props)
        this.state = {
            profile: null,
            newPosting:''
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

    
    addPost(tag, newPosting){
        const newPost = {
            newPosting:newPosting
        }
     
        
        axios.post(`/api/add_post/${tag}` , newPost).then(response => {
            this.setState({
                profile:response.data
            })
        })
    }

    render() {
       
        const {profile} = this.state
        let {newPosting} = this.state
    
        console.log(this.props.match.params)
               
      //put the post div in a container with the info and events as well
        //post tag will be below the lastname as a props
        return (
        <div>
            <div key={profile && profile.tag}>
                <div>
                    <div className= 'cover-photo-container'>COVER PHOTO</div>
                    <div className = 'picnname-container'>
                        <div className= 'name1st'>{profile && profile.firstName}</div>
                        <div className = 'profile-pic'>INSERT PROFILE PIC</div>
                        <div className = ' name2nd'>{profile && profile.lastName}</div>
                    </div>
                    <div>
                        <div className = 'posts-container'>
                            <div>{profile && <Posts 
                                messages = {profile.posted}
                                />}
                            </div>
                        </div>
                        
                        <input  onChange ={(e) => this.setState({newPosting:e.target.value})}/>
                        <button onClick = {(e) => this.addPost(profile.tag, newPosting)}></button>
                    </div>
                </div>
            </div>
            
        </div>
        )
    }
}

export default Profile
