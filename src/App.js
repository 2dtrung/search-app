import React, { Component } from 'react'
import Search from './components/Search'
import ImageList from './components/ImageList'
import api from './api/api'

class App extends Component {
    state = {
        images: []
    }

    async componentDidMount() {
        const response = await api.get("/search/photos", {
            params: { query: 'car', per_page: 30, page: Math.floor(Math.random() * 100) + 1 }
        });
        this.setState({ images: response.data.results });
    }

    handleSearchTerm = async(term) => {
        const response = await api.get("/search/photos", {
            params: { query: term, per_page: 30, page: Math.floor(Math.random() * 100) + 1 }
        });
        this.setState({ images: response.data.results });
    }
    render() {
        return (
            <div className="ui container" style={{ marginTop: "10px"}}>
                <Search search={this.handleSearchTerm}/>
                <ImageList images={this.state.images}/>
            </div>
        )
    }

}

export default App