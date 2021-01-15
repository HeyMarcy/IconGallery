
export default {
    name: 'photo',
    title: 'Photo',
    type: 'document',
    fields: [
        {
            name: 'name',
            title: 'Photo Name',
            type: 'string',
          },
        {
            name: 'photograph',
            title: 'Photograph',
            type: 'image',
            options: {
                hotspot: true,
            },
        },
        {
            name: 'slug',
            title: 'Slug',
            type: 'slug',
            options: {
              source: 'name',
              maxLength: 100,
            },
          },
    ]
}