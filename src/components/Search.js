import React, { Component } from 'react' 
import { connect } from 'react-redux'
import { getTerm } from '../actions'
import { getImage } from '../actions'
import api from '../api/api'
class Search extends Component {
    handleChange = (event) => {
        this.props.getTerm(event.target.value)
    }
    handleSubmit = async (event) => {
        event.preventDefault()
        const response =  await api.get("/search/photos", {
            params: { query: this.props.term, per_page: 30, page: Math.floor(Math.random() * 100) + 1 }
        });
        this.props.getImage(response.data.results)
    }
    render () {
        return (
            <div className="ui segment">
                <form className="ui form" onSubmit = {this.handleSubmit}>
                    <div className="field">
                        <label>Seach Image:</label>
                        <h1>{this.props.term}</h1>
                        <input type="text" value={this.props.term} onChange = {this.handleChange}/>
                    </div>
                </form>
            </div>
        )
    }
}
const mapStateToProps = (state) => {
    return {term: state.term}
}
export default connect(mapStateToProps, {getTerm, getImage})(Search)