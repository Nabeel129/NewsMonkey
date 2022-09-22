import React, { Component } from 'react'

export class NewsItem extends Component {
    render() {
        let { title, description, imageUrl, newsUrl, author, date, source } = this.props;
        return (
            <div className="card" >
                <span className="position-absolute top-0 badge rounded-pill text-bg-danger">{source}</span>
                <img src={!imageUrl ? 'https://images.pexels.com/photos/13077052/pexels-photo-13077052.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1' : imageUrl} className="card-img-top" alt='Not Available' />
                <div className="card-body text-center">
                    <h5 className="card-title">{title}</h5>
                    <p className="card-text">{description}</p>
                    <p className="card-text"><small className="text-muted">By {!author ? 'Unknown' : author} on {new Date(date).toGMTString()}</small></p>
                    <a href={newsUrl} target="_blank" rel="noopener noreferrer" className="btn btn-sm btn-dark">Read More</a>
                </div>
            </div>
        )
    }
}

export default NewsItem