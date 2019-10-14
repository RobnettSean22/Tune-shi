import React, { Component } from 'react'
import './Profile.css'
import Post from './Post'
import Modal from 'react'

export default class Profile extends Component {
    constructor(props) {
        super(props)

        this.state = {
            editPost:this.props.iPost ,
            newMessage:'',
            modalIsOpen:false

        }
    }
    openModal(){
        this.setState({
            modalIsOpen:true
        })
    }
    afterOpenModal(){
        this.subtitl.style.color = '#f00'
    }

    closeModal(){
        
    }

    render() {
        const mappedPosts = this.props.posts.map(post =>{
            return (
                <div key = {post.num}>
                
                   <Post iPost = {post.newPosting}/>
                
                <input value ={this.state.newMessage} placeholder={post.newPosting} onChange={(e) => this.setState({newMessage:e.target.value})}/>
                <button onClick={(e) => {
                    this.props.updateFunc(
                        this.props.pId,
                        post.num,
                        this.state.newMessage,
                    );
                    this.setState({ newMessage: "" })}}>update</button>
                <button className = 'deletebut' onClick={(e) =>
                     this.props.deleteFunc(
                         this.props.pId, post.num )}>Delete</button>
                </div>

            )
        })
       
        return (
            <div>
                <div className = 'namestyle'>
                    <div className = 'names'>{this.props.firstName}</div>
                    <div className = 'profilepic'>
                    <img src="" alt=""/>
                    </div>
                    <div className = 'names'>{this.props.lastName}</div>
                </div>
                <div className = 'container'>    
                <div className = 'messagecontainer'>
                <p className = 'messages'>{mappedPosts}</p>
                </div>
                   
                    <div className = 'events'/><div>Events</div>

                    
                </div>    
            </div>
        )
    }
}

