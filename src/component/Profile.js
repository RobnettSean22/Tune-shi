import React, { Component } from 'react'
import './Profile.css'
import Post from './Post'
import Modal from 'react'

const customStyles = {
    content : {
      top                   : '50%',
      left                  : '50%',
      right                 : 'auto',
      bottom                : 'auto',
      marginRight           : '-50%',
      transform             : 'translate(-50%, -50%)'
    }
  }; 

export default class Profile extends Component {
    constructor(props) {
        super(props)

        this.state = {
            editPost:this.props.iPost ,
            newMessage:'',
            modalIsOpen:false

        }
        this.openModal = this.openModal.bind(this)
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
        this.setState({
            modalIsOpen: false
        })
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
                    <button onClick = {this.openModal}>Edit</button>

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
                <div className = 'messages'>{mappedPosts}</div>
                </div>
                   
                    <div className = 'events'/><div>Events</div>

                    
                </div>    
            </div>
        )
    }
}

