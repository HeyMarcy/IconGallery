export default {
    name: 'photographer',
    title: 'Photographer',
    type: 'document',
    fields: [
        {
            name: 'name',
            title: 'Photographer Name',
            type: 'string',
          },
        {
            name: 'headshot',
            title: 'Headshot',
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