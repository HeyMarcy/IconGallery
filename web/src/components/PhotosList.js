import React from 'react';
import { Link } from 'gatsby';
import Img from 'gatsby-image';
import styled from 'styled-components';

const PhotoListStyle = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(450px, 1fr));
  gap: 4rem;
  grid-auto-rows: auto auto 500px;
`;
const PhotoStyles = styled.div`
  @supports not (grid-template-rows: subgrid) {
    --rows: auto auto 1fr;
  }
  display: grid;
  grid-template-rows: var(--rows, subgrid);
  grid-row: span 3;
  grid-gap: 1rem;
  h2,
  p {
    margin: 0;
  }
`;

function Photograph({ photo }) {
  return (
    <PhotoStyles>
      <Link to={`/photos/${photo.slug.current}`}>
        <Img fixed={photo.photograph.asset.fixed} />
        <h2>
          <span className="mark">{photo.name}</span>
        </h2>
      </Link>
      <p>{photo.photographer.name}</p>
      <p>{photo.artist.map((starName) => starName.name).join(', ')}</p>
    </PhotoStyles>
  );
}

export default function PhotosList({ photos }) {
  return (
    <PhotoListStyle>
      {photos.map((photo) => (
        <Photograph key={photo.id} photo={photo} />
      ))}
    </PhotoListStyle>
  );
}
