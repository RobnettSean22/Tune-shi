import React, { Component } from 'react'

class Posts extends Component {
    constructor(props) {
        super(props)

        this.state = {
                 
        }
    }

    render() {
        console.log(this.props)
        const mapMessage = this.props.messages ? this.props.messages.map(posts => {
            return (
                <div key = {posts.num}>
                    <div>
                        <p>{posts.newPosting}</p>
                    </div>
                </div>
            )
        }) : null
        return (
            <div>
            
                {mapMessage}
                
            </div>
        )
    }
}

export default Posts


