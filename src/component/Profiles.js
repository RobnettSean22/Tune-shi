import React, {Component} from 'react'
import axios from 'axios'
import Post from './Post'



export default class Profile extends Component{
    constructor(props){
        super(props)
        this.state = {
            select:{},
            allProfiles:[]

        }
    }
  
    componentDidMount(){
        this.getAllProfiles()
    }
    getAllProfiles(){
        axios.get('/api/all_profiles').then(response => {
            this.setState({
                allProfiles: response.data,
            })
        })
        
    }
    addPost(tag, newPosting){
      const newPost = {
        newPosting: newPosting
      }
      axios.post(`/api/add_post/${tag}`, newPost).then(response => {
          this.setState({
              allProfiles: response.data
          })
      })

  }

    render(){
      const {allProfiles} = this.state
      const mappedProfiles = allProfiles.map((profiles, profileIndex) => {
        const mappedPosts = allProfiles[profileIndex].posted.map((element ) =>{
          return (
            <div key = {element.num}>
              <div>{element.newPosting}</div>
            </div>
          )
        })
        //                  onChange={(e) => {this.setState({newPost:e.target.value})}}></textarea>
        return(
          <div key = {profiles.tag}>
            <div>{profiles.firstName}</div>
            <div>{profiles.lastName}</div>
            <div>{mappedPosts}</div>
            <input className={profiles.tag} onChange={(e) => {this.setState({[profiles.tag]:e.target.value})}}/>
           <button onClick={(e) => this.addPost(profiles.tag, this.state[profiles.tag])}>SUBMIT</button>
          </div>
        )
     
      })
      
        return(
            <div>
            
            {mappedProfiles}
           
            
            </div>
        )
    }
  }

