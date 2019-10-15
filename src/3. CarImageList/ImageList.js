import React from 'react';
import './ImageList.css';
import ImageCard from './ImageCard';

const ImageList = (props) => {
    const images = props.images.map((image) => <ImageCard key={image.id} image={image} />);
    return <div className="image-list"> {images}</div>;
}

export default ImageList;

    // const images = props.images.map(image => <img key={image.id} src={image.urls.regular} alt={images.description} />);
    // const images = props.images.map(({description, id, urls}) => <img  key={id} src={urls.regular} alt={description} />); // using Destructuring


