
export default {
    name: 'photo',
    title: 'Photo',
    type: 'document',
    fields: [
      {
        title: 'Photo Name',
        name: 'name',
        type: 'string',
      },
      {
          title: 'Year',
          name: 'year',
          type: 'number'
      },
      {
          title: 'Location',
          name: 'location',
          type: 'string'
      },
      {
        title: 'Photograph',
        name: 'photograph',
        type: 'image',
        options: {
            hotspot: true,
        },
      },
      {
        title: 'Slug',
        name: 'slug',
        type: 'slug',
        options: {
          source: 'name',
          maxLength: 100,
        },
      },
      {
        title: 'Photographer',
        name: 'photographer',
        type: 'reference',
        to: [{type: 'photographer'}]
      },
      {
        title: 'Artists',
        name: 'artists',
        type: 'array',
        of: [{type: 'reference', to:[{type: 'artist'}]}]
      },
      {
        title: 'Aspect ratio is tall?',
        name: 'isTall',
        type: 'boolean'
      },
      
    ],
    preview: {
      select: {
        title: 'name',
        media: 'photograph',
        artist0: 'artist.0.name',
        artist1: 'artist.1.name',
        artist2: 'artist.2.name',
        artist3: 'artist.3.name',
      },
      prepare: ({ title, media, ...artists }) => {
        const featuring = Object.values(artists).filter(Boolean);
        return {
          title,
          media,
          subtitle: featuring.join(', '),
        };
      },
    },
}