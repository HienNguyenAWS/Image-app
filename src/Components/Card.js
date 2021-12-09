import React from 'react';

const Card = ({images}) => {

    return (
        <>
            {images.map(image =>(
                <div key={image.id} className="card">
                    <a 
                        href={image.largeImageURL}
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        <img 
                            src={image.webformatURL} 
                            alt="Photograph"
                            className="cardImage" 
                        />
                    </a>
                    <div className="cardInfo">
                        <p className="user">Photo by {image.user}</p>
                        <p>
                            <i className="fa fa-eye"></i>
                            <span>Views: </span>
                            {image.views}
                        </p>
                        <p>
                            <i className="fa fa-download"></i>
                            <span>Downloads: </span>
                            {image.downloads}
                        </p>
                        <p>
                            <i className="fa fa-heart"></i>
                            <span>Likes: </span>
                            {image.likes}
                        </p>
                        <p>
                            <i className="fa fa-comment"></i>
                            <span>Comments: </span>
                            {images.comments}
                        </p>
                        <div className="tags">
                            {image.tags
                            .split(",")
                            .map((tag, index) => 
                                tag.length >= 11 ? "" : <span key={index}>#{tag}</span>
                            )}
                        </div>
                    </div>
                </div>
            ))}
        </>
    )
}

export default Card;