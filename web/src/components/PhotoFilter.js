import { useStaticQuery, graphql, Link } from 'gatsby';
import React from 'react';
import styled from 'styled-components';

function countPhotosOfArtist(photos) {
  const counts = photos
    .map((photo) => photo.artist)
    .flat()
    .reduce((acc, artist) => {
      const existingArtist = acc[artist.id];
      if (existingArtist) {
        existingArtist.count += 1;
      } else {
        acc[artist.id] = {
          id: artist.id,
          name: artist.name,
          count: 1,
        };
      }
      return acc;
    }, {});
  const sortedPhotos = Object.values(counts).sort((a, b) => b.count - a.count);
  return sortedPhotos;
}

// static query - doesn't take a variable.
export default function PhotoFilter() {
  const { allPhotos, artists, photographers } = useStaticQuery(graphql`
    query {
      photographers: allSanityPhotographer {
        nodes {
          name
          id
        }
      }
      artists: allSanityArtist {
        nodes {
          name
          id
        }
      }
      allPhotos: allSanityPhoto {
        nodes {
          name
          id
          photographer {
            name
            id
          }
          artist {
            name
            id
          }
        }
      }
    }
  `);
  console.clear();
  // console.log({ allPhotos, artists, photographers });
  // console.log(allPhotos.nodes.map((photo) => photo.artist).flat());
  const photoCountOfArtist = countPhotosOfArtist(allPhotos.nodes);

  // list all photographers
  // list all artists
  // list genre
  // loop over photos and display how many are by a photographer
  // loop over photos and display how many are of an artist
  return (
    <PhotoStyles>
      {photoCountOfArtist.map((photo) => (
        <Link to={`/photos/${photo.name}`} key={photo.id}>
          <span className="name">{photo.name}</span>
          <span className="count">{photo.count}</span>
        </Link>
      ))}
    </PhotoStyles>
  );
}

const PhotoStyles = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 1rem;
  margin-bottom: 4rem;
  a {
    display: grid;
    grid-template-columns: auto 1fr;
    grid-gap: 0 1rem;
    align-items: center;
    padding: 5px;
    background: var(--grey);
    border-radius: 2px;
    text-decoration: none;
    font-size: clamp(1.5rem, 1.4vw, 2.5rem);
    .count {
      background: white;
      padding: 2px 5px;
    }
    &[aria-current='page'] {
      background: var(--yellow);
    }
  }
`;
