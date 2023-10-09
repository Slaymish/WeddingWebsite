import React from 'react';
import styled from 'styled-components';

const GalleryContainer = styled.div`
    display: grid;
    grid-template-columns: repeat(auto-fill,minmax(250px,1fr));
    gap: 1rem;
`;

const Image = styled.img`
    width: 100%;
    height: 100%;
    object-fit: cover;
`;

const Gallery = ({ images }) => {
    return (
        <GalleryContainer>
            {images.map((image, index) => <Image src={image} alt={`Wedding-Gallery-Image-${index}`} key={index} />)}
        </GalleryContainer>
    );
}

export default Gallery;