import React, { Component } from 'react'

class Posts extends Component {
    constructor(props) {
        super(props)

        this.state = {
                 
        }
    }

    render() {
        const mapMessage = this.props.message ? this.props.message.map(posts => {
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


