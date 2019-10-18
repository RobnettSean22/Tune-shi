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
        this.deletePost = this.deletePost.bind(this)
        this.updatePost = this.updatePost.bind(this)
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
            newPosting:newPosting,
        }
        
     
        
        axios.post(`/api/add_post/${tag}` , newPost).then(response => {
            this.setState({
                profile:response.data,
                newPosting:''
                
            })
        })
    }

    updatePost(tag, num, editPost){
        axios.put(`/api/update_post/${tag}/${num}`, editPost).then(response => {
            this.setState({
                profile: response.data
            })
        })

    }
    
    deletePost(tag, num){
        axios.delete(`/api/delete_post/${tag}/${num}`).then(respons => {
            this.setState({
                profile: respons.data
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
                                id = {profile.tag}
                                deleteFunc ={this.deletePost}
                                updateFunc = {this.updatePost}
                                />}
                            </div>
                        </div>
                        
                        <input  placeholder = 'What You Got To Say' value = {newPosting} onChange ={(e) => this.setState({newPosting:e.target.value, })}/>
                        <button onClick = {(e) => this.addPost(profile.tag, newPosting)}></button>
                    </div>
                </div>
            </div>
            
        </div>
        )
    }
}

export default Profile
