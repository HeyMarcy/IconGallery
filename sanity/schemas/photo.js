import photographer from "./photographer";

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
          title: 'Price',
          name: 'price',
          type: 'number',
          description: 'Price in USD',
        },
        {
          title: 'Photographer',
          name: 'photographer',
          type: 'reference',
          to: [{type: 'photographer'}]
        },
        {
          title: 'Artist',
          name: 'artist',
          type: 'array',
          of: [{type: 'reference', to:[{type: 'artist'}]}]
        }
    ],
    // preview: {
    //   select: {
    //     title:'name',
    //     media: 'photograph',
    //     photographer: `photographer.0.name`,
    //     artist0: 'artist.0.name'
    //   },
    //   prepare: fields => {
    //     console.log(fields);
    //     return 'name'
    //   }
    // }
}