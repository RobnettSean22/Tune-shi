import React, { Component } from 'react'
import axios from 'axios'
import Profile from './Profile'


export default class Profiles extends Component {
    constructor(props) {
        super(props)

        this.state = {
               allProfiles:[]  
        }
        this.deletePost = this.deletePost.bind(this)
        this.updatePost =this.updatePost.bind(this)
    }

    componentDidMount(){
        this.getAllProfiles()
    }

    getAllProfiles(){
        axios.get('./api/all_profiles').then(response => {
            return this.setState({
                allProfiles: response.data
            })
        })
    }

    addPost(tag, newPosting){
       
        axios.post(`./api/add_post/${tag}` , {newPosting}).then(response => {
        
            this.setState({
                allProfiles: response.data
            })
        })
    }
    
    deletePost(tag, num){
        axios.delete(`./api/delete_post/${tag}/${num}`).then(response => {
            this.setState({
                allProfiles: response.data
            })
        })
    }
    updatePost(tag,num, editPost){
        axios.put(`./api/update_post/${tag}/${num}`, {editPost}).then(response => {
            this.setState({
                allProfiles: response.data
            })
        })
    }

//add input and funtion in the mappBelow
    render() {
        const {allProfiles} = this.state
        const mappedProfiles = allProfiles.map(profiles => {
            return (
                <div key = {profiles.tag}>
                <Profile
                    
                    pId = {profiles.tag}
                    firstName = {profiles.firstName}
                    lastName = {profiles.lastName}
                    posts = {profiles.posted}
                    deleteFunc = {this.deletePost}
                    updateFunc = {this.updatePost}
                
                />
                <input className={profiles.tag} onChange={(e) => {this.setState({[profiles.tag]:e.target.value})}}/>
                <button onClick={(e) => this.addPost(profiles.tag, this.state[profiles.tag])}>SUBMIT</button>
                </div>
            )
        })

        
        
        return (
            <div>
               <div>{mappedProfiles}</div> 
               
                
                
            </div>
        )
    }
}

 
