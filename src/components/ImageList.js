import React, { Component } from 'react'
import ImageCard from './ImageCard'

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

export default ImageList
