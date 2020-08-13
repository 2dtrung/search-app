import React, { Component } from 'react'
import Search from './components/Search'
import ImageList from './components/ImageList'
import api from './api/api'
import { connect } from 'react-redux'



class App extends Component {
    render() {
        return (
            <div className="ui container" style={{ marginTop: "10px"}}>
                <Search search={this.handleSearchTerm}/>
                <h1>{this.props.title}</h1>
                <ImageList />
            </div>
        )
    }

}
const mapStateToProps = (state) => {
    return {title: state.title}
}
export default connect(mapStateToProps)(App)