import { useStaticQuery, graphql } from 'gatsby';
import React from 'react';

// static query - doesn't take a variable.
export default function PhotoFilter() {
  const photos = useStaticQuery(graphql`
    query {
      allPhotos: allSanityPhoto {
        nodes {
          name
          id
          photographer {
            name
          }
          photoOption {
            price
            dimension
            isTall
          }
          artist {
            name
          }
        }
      }
    }
  `);
  console.log({ photos });
  // list all photographers
  // list all artists
  // list genre
  // loop over photos and display how many are by a photographer
  // loop over photos and display how many are of an artist
  return (
    <div>
      <p>PHOTOS</p>
    </div>
  );
}
