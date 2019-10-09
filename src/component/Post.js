import React, {Component} from 'react';
import axios from 'axios'
export default class Post extends Component{
    constructor(){
        super()
        this.state = {
            postBoard:[],
            newPost:''
        }
        this.handleAddPost = this.handleAddPost.bind(this)
        this.handlePostBoard = this.handlePostBoard.bind(this)
    }
    componentDidMount(){
        axios.get("http://localhost:2222/api/data").then(response =>{
            this.setState({
                postBoard: response.data.posted
            })
        })
    }
    handleAddPost(value){
        this.setState({
            newPost:value
        })
    }

    handlePostBoard(index){
        const message = this.state.newPost
        this.setState({
            //when pushing an element into the array in react use the method bellow the spread operator (...) makes a copy of the arrray after the comma but in what you want to add!!!!
            postBoard: [...this.state.postBoard, message],
            newPost:''

        })

    }

    render(){
        let {postBoard} = this.state
        let updatePost = postBoard.map((element, index) =>{
            return(
                <div key={index}>
                    <p>{element}</p>
                </div>
            )
        })
        return(
            <div className='Posts'>
                <textarea value={this.state.newPost} placeholder='Whachu got' 
                 onChange={(e) => {this.handleAddPost(e.target.value)}}></textarea>
                <button onClick={(e) => this.handlePostBoard(e.target.value)}>Send that ish</button>
                <div className='messaages'>
                    {updatePost}
                </div>
            </div>

        )
    }
}
