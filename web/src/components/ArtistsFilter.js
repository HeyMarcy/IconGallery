import { useStaticQuery, graphql, Link } from 'gatsby';
import React from 'react';
import styled from 'styled-components';

function countPhotosOfArtist(photos) {
  const counts = photos
    .map((photo) => photo.artists)
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

export default function ArtistsFilter({ activeArtist }) {
  const { photos, artists } = useStaticQuery(graphql`
    query {
      # photographers: allSanityPhotographer {
      #   nodes {
      #     name
      #     id
      #   }
      # }
      artists: allSanityArtist {
        nodes {
          name
          id
        }
      }
      photos: allSanityPhoto {
        nodes {
          artists {
            name
            id
          }
        }
      }
    }
  `);

  const photoCountOfArtist = countPhotosOfArtist(photos.nodes);

  return (
    <PhotoStyles>
      <Link to="/photos">
        <span className="name">All</span>
        <span className="count">{photos.nodes.length}</span>
      </Link>
      {photoCountOfArtist.map((artist) => (
        <Link
          to={`/artist/${artist.name}`}
          key={artist.id}
          className={artist.name === activeArtist ? 'active' : ''}
        >
          <span className="name">{artist.name}</span>
          <span className="count">{artist.count}</span>
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
