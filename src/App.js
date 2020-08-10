import React, { Component } from 'react'

class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            posts: [
                {title: 'post1', content: 'content 1'},
                {title: 'post2', content: 'content 2'},
                {title: 'post3', content: 'content 3'}
            ],
            title: '',
            content: ''
        }
    }
    handleChangeTitle = (event) => {
        this.setState({title: event.target.value})
    }
    handleChangeContent = (event) => {
        this.setState({content: event.target.value})
    }
    handleSubmit = (event) => {
        event.preventDefault()

        let {title, content } = this.state;
        this.setState({posts: [...this.state.posts, {title, content}]})
        this.setState({title:''})
        this.setState({content: ''})
    }
    render() {
        return (
            <div className="container">
                <div className="row">
                    <div className="col-md-12">
                        <form onSubmit={this.handleSubmit}>
                            <label>Search Image:</label>
                            <input name="title" value={this.state.title} onChange={this.handleChangeTitle}/>
                        </form>
                    </div>
                </div>
                <div className="row">
                </div>
            </div>
        )
    }
}

export default App