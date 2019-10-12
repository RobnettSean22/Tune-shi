// import React, {Component} from 'react';
// import axios from 'axios'

// export default class Post extends Component{
//     constructor(){
//         super()
//         this.state = {
//             posted:[],
//             newPost:''
//         }
//         // this.handleAddPost = this.handleAddPost.bind(this)
//         // this.handlePostBoard = this.handlePostBoard.bind(this)
//     }
   

   
//     // handleAddPost(value){
//     //     this.setState({
//     //         newPost:value
//     //     })
//     // }
   
//     // handlePostBoard(index){
//     //     const message = this.state.newPost
//     //     this.setState({
//     //         //when pushing an element into the array in react use the method bellow the spread operator (...) makes a copy of the arrray after the comma but in what you want to add!!!!
//     //         postBoard: [...this.state.postBoard, message],
//     //         newPost:''

//     //     })

//     // }

//     render(){
       
//         let updatePost = newPost.map((profile, profileIndex) =>{
//             return(
//                 <div className='Posts'>
//                 <textarea value={this.state.newPost} placeholder='Whachu got' 
//                  onChange={(e) => {this.setState({newPost:e.target.value})}}></textarea>
//                 <button onClick={(e) => this.addPost(this.state.newPost)}>Send that ish</button>
//                 <div className='messaages'>
//                     {updatePost}
//                 </div>
//             </div>
//             )
//         })
//         return(
//             <div>
//             </div>
//         )
//     }
// }
