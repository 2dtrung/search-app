import React, { Component } from 'react'
import ImageCard from './ImageCard'
import { connect } from 'react-redux';
import { getImage } from '../actions'

class ImageList extends Component {
    render () {
        let html = this.props.images.map( item => {
            return <ImageCard image={item} />
        });
        return (
            <div className="image-list">
                {html}
            </div>
        )
    }
}
const mapStateToProps = state => {
    return { images: state.images}
}
export default connect(mapStateToProps)(ImageList)
