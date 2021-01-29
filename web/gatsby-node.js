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
      },
    });
  });
}

async function createArtistPages({ graphql, actions }) {
  const artistTemplate = path.resolve('./src/pages/photos.js'); // This uses the Photo template
  const { data } = await graphql(`
    query {
      artists: allSanityArtist {
        nodes {
          name
          id
        }
      }
    }
  `);

  data.artists.nodes.forEach((artist) => {
    actions.createPage({
      path: `artist/${artist.name}`,
      component: artistTemplate,
      context: {
        name: artist.name,
        artistRegex: `/${artist.name}/i`,
      },
    });
  });
}

export async function createPages(params) {
  await Promise.all([createPhotoPages(params), createArtistPages(params)]);
}
