export default {
    name: 'artist',
    title: 'Artist',
    type: 'document',
    fields: [
        {
            name: 'name',
            title: 'Artist or Ensemble Name',
            type: 'string',
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