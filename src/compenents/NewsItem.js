import React, { Component } from 'react'

export class NewsItem extends Component {
  render() {
    let {title, description, imageUrl, newsUrl, author, date, source} = this.props;
    let defaultImage = "https://images.cointelegraph.com/images/1200_aHR0cHM6Ly9zMy5jb2ludGVsZWdyYXBoLmNvbS91cGxvYWRzLzIwMjItMTEvZWFiMDU4NjYtMWZhOC00MTYxLThiNGUtYmE2ZTliZTE0NDk0LmpwZw==.jpg";
    return (
      <div className='my-2'>
        <div className="card">
          <div style={{display: "flex", justifyContent:"flex-end", position:"absolute", right:"0"}}>
          <span className='badge rounded-pill bg-danger' style={{left : "90%", zIndex : "1"}}>{source}<span className='visually-hidden'></span></span>
          </div>
        
          <img src={imageUrl != null ? imageUrl : defaultImage} className="card-img-top" alt="..." />
          <div className="card-body">
            <h5 className="card-title">{title}</h5>
            <p className="card-text">{description}</p>
            <p className='card-text'><small className='text-muted'>By {author != null ? "Unknown" : author} on {new Date(date).toUTCString()}</small></p>
            <a rel="noreferrer" href={newsUrl} target="_blank" className="btn btn-sm btn-primary">Read more</a>
          </div>
      </div>
      </div>
    )
  }
}

export default NewsItem