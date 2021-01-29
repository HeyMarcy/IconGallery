import React from 'react';
import { graphql } from 'gatsby';
import PhotosList from '../components/PhotosList';
import ArtistsFilter from '../components/ArtistsFilter';

export default function PhotosPage({ data }) {
  const photos = data.photos.nodes;
  console.log({ photos });
  return (
    <div>
      <ArtistsFilter />
      <PhotosList photos={photos} />
    </div>
  );
}

export const query = graphql`
  query PhotoQuery($artistRegex: String) {
    photos: allSanityPhoto(
      filter: { artists: { elemMatch: { name: { regex: $artistRegex } } } }
    ) {
      nodes {
        artists {
          name
          id
        }
        id
        location
        name
        photographer {
          name
        }
        slug {
          current
        }
        year

        photograph {
          asset {
            fixed(width: 400) {
              ...GatsbySanityImageFixed
            }
            fluid(maxWidth: 1000) {
              ...GatsbySanityImageFluid
            }
          }
        }
      }
    }
  }
`;

// import React from "react"
// import { graphql } from "gatsby"

// const ComponentName = ({ data }) => <pre>{JSON.stringify(data, null, 4)}</pre>

// export const query = graphql`
//   {
//     allSanityPhoto(filter: {artist: {elemMatch: {name: {regex: ""}}}}) {
//       nodes {
//         id
//         name
//       }
//     }
//   }
// `

// export default ComponentName
