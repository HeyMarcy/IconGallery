export default {
  title: 'Photographer',
  name: 'photographer',
  type: 'document',
  fields: [
      {
        title: 'Photographer Name',
        name: 'name',
        type: 'string',
        },
      {
        title: 'Headshot',
        name: 'headshot',
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
        title: 'Photographer Bio',
        name: 'photograher_bio',
        type: 'text'
      },
      
    ]
}