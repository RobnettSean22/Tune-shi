import React, { Component } from 'react'
import Post from './Post'

export default class Profile extends Component {
    constructor(props) {
        super(props)

        this.state = {
            editPost:this.props.iPost ,
            newMessage:''
        }
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
                <button onClick={(e) => this.props.deleteFunc(this.props.pId, post.num )}>Delete</button>
                </div>

            )
        })
       
        return (
            <div>
            {this.props.firstName}
            {this.props.lastName}
            {mappedPosts}
            </div>
        )
    }
}
