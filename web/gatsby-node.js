import path from 'path';

async function createPhotoPages({ graphql, actions }) {
  const photoTemplate = path.resolve('./src/templates/Photo.js');

  const { data } = await graphql(`
    query {
      photos: allSanityPhoto {
        nodes {
          name
          id
          slug {
            current
          }
        }
      }
    }
  `);

  data.photos.nodes.forEach((photo) => {
    actions.createPage({
      path: `photo/${photo.slug.current}`,
      component: photoTemplate,
      context: {
        slug: photo.slug.current,
        name: photo.name,
      },
    });
  });
}

async function createArtistPage({ graphql, actions }) {
  const artistTemplate = path.resolve('./src/templates/Artist.js');
  const { data } = await graphql(`
    query {
      artists: allSanityArtist {
        nodes {
          name
          id
          slug {
            current
          }
        }
      }
    }
  `);
  data.artists.nodes.forEach((artist) => {
    actions.createPage({
      path: `artist/${artist.slug.current}`,
      component: artistTemplate,
      context: {
        slug: artist.slug.current,
        name: artist.name,
      },
    });
  });
}

export async function createPages(params) {
  await Promise.all([createPhotoPages(params), createArtistPage(params)]);
}
